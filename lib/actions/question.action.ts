'use server'

import { connectToDatabase } from "../mongoose"
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";

import {CreateQuestionParams, GetQuestionsParams} from "@/lib/actions/shared.types";
import User from "@/database/user.model";
import {revalidatePath} from "next/cache";

export const getQuestions = async (params: GetQuestionsParams) => {
    try {
        connectToDatabase()

        const questions = await Question.find({}).populate({ path: 'tags', model: Tag }).populate({ path: 'author', model: User})

        return questions;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function createQuestion(params: CreateQuestionParams) {
    // eslint-disable-next-line no-empty
    try {
        connectToDatabase();

        const { title, content, tags, author, path } = params;

        // create

        const question = await new Question({
            title,
            content,
            author,
        }).save();

        const tagDocuments = [];

        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                {name: { $regex: new RegExp(`^${tag}$`, "i")} },
                { $setOnInsert: {name: tag}, $push: { questions: question._id } },
                { upsert: true, new: true}
            );

            tagDocuments.push(existingTag._id);
        }
        console.log(tagDocuments)
        await Question.findByIdAndUpdate(question._id, {
            $push: { tags: { $each: tagDocuments } }
        })

        revalidatePath(path)
    } catch (error) {
        
    }
}

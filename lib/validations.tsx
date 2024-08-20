import { z } from "zod"

export const QuestionSchema = z.object({
    title: z.string().min(5).max(130),
    explanations: z.string().min(100).max(200000),
    tags: z.array(z.string().min(1).max(20)).min(1).max(5),
})
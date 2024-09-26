import { z } from "zod"

export const QuestionSchema = z.object({
    title: z.string().min(5, "Field must contain at least 5 character(s)").max(130, "Field must contain at most 130 character(s)"),
    explanation: z.string().min(100, "Field must contain at least 100 character(s)").max(20000, "Field must contain at most 20000 character(s)"),
    tags: z.array(z.string().min(1, "Tag must contain at least 1 character(s)").max(20, "Tag must contain at most 20 character(s)")).min(1, "There must be at least 1 tag").max(5, "There must be at most 5 tags"),
})
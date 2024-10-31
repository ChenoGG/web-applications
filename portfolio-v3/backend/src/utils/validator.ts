import { ProjectProps } from "@/features/projects/types";
import { z } from "zod";

const thumbnailSchema = z.object({
    image: z.string().optional(),
    imageAltText: z.string().optional(),
})

const projectSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, {message: "Project name is required"}), // https://stackoverflow.com/questions/75883100/how-to-make-a-custom-error-message-in-zod
    language: z.array(z.string()).min(1, {message: "Project language is required"}),
    description: z.string().optional(),
    thumbnail: thumbnailSchema,
    publishedAt: z.string().datetime().optional(),
    isPublic: z.boolean(),
    status: z.string().nullable().optional(),
    externalLinks: z.array(z.string().url()).optional(), 
    tags: z.array(z.string()).optional()
})

export const isValidProject = (data: Partial<ProjectProps>): boolean => {
    
        try {
            projectSchema.parse(data)
            return true

        } catch (error) {
            return false
        }
    }
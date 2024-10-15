import { z } from 'zod'

export { projectSchema, projectsSchema }

const thumbnailSchema = z.object({
    image: z.string(),
    imageAltText: z.string(),
})

const projectSchema = z.object({
    name: z.string(),
    language: z.array(z.string()),
    description: z.string(),
    thumbnail: thumbnailSchema,
    publishedAt: z.string().datetime(),
    isPublic: z.boolean(),
    status: z.string(),
})

const projectsSchema = z.array(projectSchema)
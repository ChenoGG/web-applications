import { DB } from "@/db/db"
import { ProjectProps } from "@/features/users/types/types"
import { fromDb, toDb } from "../mappers/project.mapper"

export const createProjectRepository = (db: DB) => {

    // Create project
    const create = async (data: ProjectProps): Promise<Result<string>> => {
        try {
            const project = toDb(data)
    
            const query = db.prepare(`
            INSERT INTO projects (id, name,
                                language, description,
                                thumbnail_image, thumbnail_image_alt_text,
                                published_at, is_public,
                                status, external_links, tags)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `)
    
            query.run(
                project.id,
                project.name,
                project.language, 
                project.description,
                project.thumbnail.image,
                project.thumbnail.imageAltText,
                project.publishedAt, 
                project.isPublic,
                project.status,
                project.externalLinks, 
                project.tags 
            )
    
            return ResultHandler.success(project.id)
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
        }
    }

    // Check if project exists using ID
    const exist = async (id: string): Promise<boolean> => {
        const query = db.prepare("SELECT COUNT(*) as count from projects WHERE id = ?")
        const data = query.get(id) as { count: number }

        return data.count > 0
    }

    // Get project using ID
    const getById = async (
        id: string,
    ): Promise<Result<ProjectProps | undefined>> => {
        try {
            const project = await exist(id)
            if (!project) return ResultHandler.failure("Project not found", "NOT_FOUND")
            
            const query = db.prepare("SELECT * FROM projects WHERE id = ?")
            const data = query.get(id)
            
            // TODO: ADD ZOD VALIDATION
            
            return ResultHandler.success(fromDb(data))

        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
        }
    }

    // Get all projects
    const list = async (): Promise<Result<ProjectProps[]>> => {
        try {
            const query = db.prepare("SELECT * FROM projects")
            const data = query.all()

            return ResultHandler.success(data.map((project) => fromDb(project)))
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
        }
    }

    // Delete project
    const remove = async (id: string): Promise<Result<string>> => {
        try {
            const project = await exist(id)
            if (!project) return ResultHandler.failure("Project not found", "NOT_FOUND")
            
            const query = db.prepare("DELETE FROM projects WHERE id = ?")
            query.run(id)

            return ResultHandler.success(id)

        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
        }
    }

    const update = async (data: ProjectProps): Promise<Result<Partial<ProjectProps>>> => {
        try {
            const projectExist = await exist(data.id)

            if (!projectExist) {
                return ResultHandler.failure("Project not found", "NOT_FOUND")
            }

            const project = toDb(data)
            
            const query = db.prepare(`
                UPDATE projects
                SET name = ?, language = ?, description = ?, thumbnail_image = ?,
                    thumbnail_image_alt_text = ?, published_at = ?, is_public = ?,
                    status = ?, external_links = ?, tags = ? WHERE id = ?
                `)

            query.run(
                project.name,
                project.language,
                project.description,
                project.thumbnail.image,
                project.thumbnail.imageAltText,
                project.publishedAt,
                project.isPublic,
                project.status,
                project.externalLinks,
                project.tags,
                project.id
            )

            return ResultHandler.success(data)
            
        } catch (error) {
            return ResultHandler.failure(error, "INTERNAL_SERVER_ERROR")
        }
    }

    return { create, list, getById, remove, update }

}

export type ProjectRepository = ReturnType<typeof createProjectRepository>

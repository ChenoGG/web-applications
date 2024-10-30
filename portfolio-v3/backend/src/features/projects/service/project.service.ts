import db from "@/db/db";
import { createProjectRepository, ProjectRepository } from "../repository/project.repository";
import { CreateProjectDto, ProjectProps, UpdateProjectDto } from "@/features/users/types/types";
import { createProject } from "../mappers/project.mapper";
import { isValidProject } from "@/utils/validator";

export const createProjectService = (projectRepository: ProjectRepository) => {

    // Create project
    const create = async (data: CreateProjectDto): Promise<Result<string>> => {
        const project = createProject(data)

        if (!isValidProject(project)) {
            return ResultHandler.failure("Invalid project data", "BAD_REQUEST")
        }

        return projectRepository.create(project) 
    }

    // Get project by ID
    const getById = async (
        id: string
    ): Promise<Result<ProjectProps | undefined>> => {
        return projectRepository.getById(id)
    }

    // Get all projects
    const list = async (): Promise<Result<ProjectProps[]>> => {
        return projectRepository.list()
    }

    // Delete project
    const remove = async (id: string) => {
        return projectRepository.remove(id)
    }

    // Update project
    const update = async (data: UpdateProjectDto) => {
        const project = createProject(data)

        if (!isValidProject(project)) {
            return ResultHandler.failure("Invalid project data", "BAD_REQUEST")
        }

        return projectRepository.update(project)
    }

    return { create, list, getById, remove, update}
}

export const projectService = createProjectService(createProjectRepository(db))

export type ProjectService = ReturnType<typeof createProjectService>
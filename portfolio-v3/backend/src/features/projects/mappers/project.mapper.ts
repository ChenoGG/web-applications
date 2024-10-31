import { DbProjectProps, ImageProps, ProjectProps } from "../types";
import { Entries } from "@/types";

export const createId = () => {
    return crypto.randomUUID();
  };

export const createProject = (project: Partial<ProjectProps>): ProjectProps => {
    return  {
        id: project.id ?? createId(),
        name: project.name ?? "",
        language: project.language ?? [],
        description: project.description ?? "",
        // Added a fallback here with the help of ChatGPT
        // Think it was originally "undefined" due to Partial and use of ImageProps in ProjectProps?
        thumbnail: {
            image: project.thumbnail?.image ?? "",
            imageAltText: project.thumbnail?.imageAltText ?? "",
        } as ImageProps,
        publishedAt: project.publishedAt ?? new Date(),
        isPublic: project.isPublic ??  true,
        status: project.status ?? "", 
        externalLinks: project.externalLinks ?? [],
        tags: project.tags ?? []
    }
}

export const fromDb = (project: DbProjectProps) => {
    return {
        id: project.id,
        name: project.name,
        language: project.language ? project.language.split(", ") : [],
        description: project.description,
        thumbnail: {
            image: project.thumbnail.image,
            imageAltText: project.thumbnail.imageAltText,
        } as ImageProps,
        publishedAt: project.publishedAt ? new Date(project.publishedAt) : "",
        isPublic: project.isPublic,
        status: project.status,
        externalLinks: project.externalLinks ? project.externalLinks.split(", ") : [],
        tags: project.tags ? project.tags.split(", ") : []
    }
}

export const toDb = (data: ProjectProps) => {
    const project = createProject(data)
    
    const entries = Object.entries(project) as Entries<ProjectProps>
    const dbProject = {} as DbProjectProps

    for (const entry of entries) {
        if (!entry) continue

        const [key, value] = entry
        switch (key) {
            case "id":
                dbProject.id = value
                break;
            case "name":
                dbProject.name = value
                break;
            case "language":
                dbProject.language = value?.join(", ")
                break;
            case "description":
                dbProject.description = value
                break;
            case "thumbnail":
                if (value) {
                    // Think this works, asked ChatGPT here.
                    const thumbnail = value as ImageProps

                    dbProject.thumbnail.image = thumbnail.image ?? ""
                    dbProject.thumbnail.imageAltText = thumbnail.image ?? ""
                }
                break;
            case "publishedAt":
                dbProject.publishedAt = value?.toString() 
                break;
            case "isPublic":
                dbProject.isPublic = value
                break;
            case "status":
                dbProject.status = value
                break;
            case "externalLinks":
                dbProject.externalLinks = value?.join(", ")
                break;
            case "tags":
                dbProject.tags = value?.join(", ")
                break;
            default:
                break;
        }
    }

    return dbProject
}


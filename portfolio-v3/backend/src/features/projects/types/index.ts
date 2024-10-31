export type ImageProps = {
    image: string
    imageAltText: string
}

export type ProjectProps = {
    id: string
    name: string
    language: string[]
    description: string
    thumbnail: ImageProps
    publishedAt: string | Date
    isPublic: boolean
    status: string
    externalLinks?: string[]
    tags: string[]
}

export type DbProjectProps = {
    id: string
    name: string
    language: string
    description: string 
    thumbnail: ImageProps
    publishedAt: string 
    isPublic: boolean
    status: string
    externalLinks?: string
    tags: string
}

// Hope it works LUL
export type CreateProjectDto = Pick<
  ProjectProps,
  | "id"
  | "name"
  | "language"
  | "description"
  | "thumbnail"
  | "publishedAt"
  | "isPublic"
  | "status"
  | "externalLinks"
  | "tags"
>;

export type UpdateProjectDto = Partial<
  Pick<
    ProjectProps,
    | "id"
    | "name"
    | "language"
    | "description"
    | "thumbnail"
    | "publishedAt"
    | "isPublic"
    | "status"
    | "externalLinks"
    | "tags"
  >
>;
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
    thumbnail_image: string
    thumbnail_image_alt_text: string
    published_at: string 
    is_public: boolean
    status: string
    external_links?: string
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
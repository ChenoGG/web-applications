export type User = {
    id: string;
    email: string;
    name: string;
}

export type ImageProps = {
    image: string
    imageAltText: string
}

export type ProjectProps = {
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
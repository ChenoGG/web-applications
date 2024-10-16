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

export type FormProps = {
    name: string
    language: string[]
    desc: string
    thumbnail: string
    publishedAt: string
    isPublic: boolean
    status: string
    externalLinks?: string[]
    tags: string[]
  }
export type ImageProps = {
    image: string
    imageAltText: string
}

export type ProjectProps = {
    name: string
    language: string[]
    description: string
    thumbnail: ImageProps
}

export type FormProps = {
    name: string
    language: string[]
    desc: string
    thumbnail: string
  }
import { ImageProps } from "./types"

type CardProps = {
    thumbnail: ImageProps
    name: string
    language: string[]
    description: string
}

export default function Card(props: CardProps) {
    const { thumbnail, name, language, description } = props

    return (
            <section className="project-card">
                <img src={thumbnail.image} alt={thumbnail.imageAltText} />
                <h2>{name}</h2>
                <p>{language.join(", ")}</p>
                <p>{description}</p>
            </section>
    )
}
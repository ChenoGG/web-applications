import { ProjectProps } from "./types"

export default function Card(props: ProjectProps) {
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
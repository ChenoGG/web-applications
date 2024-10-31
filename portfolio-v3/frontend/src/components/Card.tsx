import { formatPublishedAt } from "../features/helpers/format"
import { ProjectProps } from "./types"
import { useState } from "react"

export default function Card(props: ProjectProps & {
    removeProject: (name: string) => void
}) {
    const [showRemove, setShowRemove] = useState(false)
    const { thumbnail, name, language, description, publishedAt, isPublic, status, externalLinks, tags, removeProject } = props

    const formattedDate = formatPublishedAt(publishedAt)
    
    const updateShowState = () => {
        setShowRemove(true)
    }

    return (
            <section className="project-card" onMouseOver={updateShowState} onMouseLeave={() => setShowRemove(false)}>
                <img src={thumbnail.image} alt={thumbnail.imageAltText} />
                <h2>Name: {name}</h2>
                <p>Language: {language.join(", ")}</p>
                <p>Tags: {tags.join(", ")}</p>
                <p>Desc: {description}</p>
                <p>Links: {externalLinks}</p>
                <p>Published Date: {formattedDate}</p>
                <p>Status: {status}</p>
                {
                    showRemove ? (<button className="create-button" type="button" onClick={() => removeProject(name)}>Delete Project</button>) : null
                }
            </section>
    )
}
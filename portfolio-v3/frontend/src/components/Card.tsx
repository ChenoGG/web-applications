import { formatPublishedAt } from "../features/helpers/format"
import { ProjectProps } from "./types"
import { useState } from "react"

export default function Card(props: ProjectProps & {
    removeProject: (name: string) => void
}) {
    const [showRemove, setShowRemove] = useState(false)
    const { thumbnail, name, language, description, publishedAt, /* isPublic, */ status, removeProject } = props

    const formattedDate = formatPublishedAt(publishedAt)

    const updateShowState = () => {
        setShowRemove(true)
    }

    return (
            <section className="project-card" onMouseOver={updateShowState} onMouseLeave={() => setShowRemove(false)}>
                <img src={thumbnail.image} alt={thumbnail.imageAltText} />
                <h2>{name}</h2>
                <p>{language.join(", ")}</p>
                <p>{description}</p>
                <p>Published Date: {formattedDate}</p>
                {/* Assume this is to show/hide it from the page, so prob won't need to show it like this*/}
                {/* <p>{isPublic}</p> */}
                <p>{status}</p>
                {
                    showRemove ? (<button type="button" onClick={() => removeProject(name)}>Delete Project</button>) : null
                }
            </section>
    )
}
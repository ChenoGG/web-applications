import { ProjectProps } from "./types"

type DisplayProjectStatsProps = {
    projects: ProjectProps[]
    total: number
}

export default function DisplayProjectStats(props: DisplayProjectStatsProps) {
    const { projects, total } = props

    if (total === 0) return <h3>Total projects: {total}</h3>

    return (
       <section>
        {/* https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples */}
        {/* Using filter to get X amount of times a language is used in projects */}
        <h3>Total projects: {total}</h3>
        <p>HTML - {projects.filter(project => project.language.includes("HTML")).length}</p>
        <p>CSS - {projects.filter(project => project.language.includes("CSS")).length}</p>
        <p>JavaScript - {projects.filter(project => project.language.includes("JavaScript")).length}</p>
        <p>Python - {projects.filter(project => project.language.includes("Python")).length}</p>
        <p>C# - {projects.filter(project => project.language.includes("C#")).length}</p>
       </section> 
    )
}
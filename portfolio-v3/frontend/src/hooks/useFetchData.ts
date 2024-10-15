import { useEffect, useState } from "react"
import { ProjectProps } from "../components/types"
import api from "../services/api"
import { projectsSchema } from "../features/helpers/validate"

const useFetchData = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([])
    const [loading, setLoading] = useState<boolean>(true) // (false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                console.log("fetching data")
                setLoading(true)
                const data: ProjectProps[] = await api.listProjects()
                console.log(projectsSchema.safeParse(data))
                const parsedData = projectsSchema.parse(data) 
                setProjects(parsedData)
                console.log("data fetched")
            } catch (error) {
                console.error("data rejected", error)
                setError(error instanceof Error ? error.message : "An error occurred")
            } finally {
                setLoading(false)
                console.log("data initialized")
            }
        }

        fetchProjects()
    }, [])

    return { projects, loading, error}
}

export default useFetchData
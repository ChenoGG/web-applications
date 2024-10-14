import { useEffect, useState } from "react"
import { ProjectProps } from "../components/types"
import { ofetch } from "ofetch"

const useFetchData = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([])
    const [loading, setLoading] = useState<boolean>(true) // (false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                console.log("fetching data")
                setLoading(true)
                const data: ProjectProps[] = await ofetch("http://localhost:3000/projects")
                setProjects(data)
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
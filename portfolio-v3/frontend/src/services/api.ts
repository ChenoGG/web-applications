import { ofetch } from "ofetch"
import { fetchProjectURL } from "../configs/url"

const listProjects = async () => {
    try {
        const projects = await ofetch(fetchProjectURL)
        return projects ?? []
    } catch (error) {
        console.error("failed to fetch projects", error)
    }
}

export default { listProjects }
import { Hono } from "hono";
import { projectService, ProjectService } from "../service/project.service";
import { authenticate } from "@/features/users/utils/middleware";
import { createProject } from "../mappers/project.mapper";

export const createProjectController = (projectService: ProjectService) => {
    
    const app = new Hono()
    app.use(authenticate())

    // CRUD
    // I think this should work - or if not, hopefully be somewhat on the correct path

    // Get all Projects
    app.get("/", async (c) => {
        const result = await projectService.list()

        if (!result.success) {
            return c.json({ error: result.error.message }, { status: result.error.code })
        }

        return c.json(result.data, { status: 200 })
    })


    // Get specific project with :id
    app.get("/:id", async (c) => {
        const id = c.req.param("id")
        const result = await projectService.getById(id)

        if (!result.success) {
            return c.json({ error: result.error.message }, { status: result.error.code })
        }

        return c.json(result.data, { status: 200 })
    })


    // Create a project
    app.post("/", async (c) => {
        const projectData = await c.req.json()

        const project = createProject(projectData)
        const result = await projectService.create(project)

        if (!result.success) {
            return c.json({ error: result.error.message }, { status: result.error.code} )
        }

        return c.json({ id: result.data }, { status: 201 })

    })


    // Delete a project
    app.delete("/:id", async (c) => {
        const id = c.req.param("id")
        const result = await projectService.remove(id)

        if (!result.success) {
            return c.json({ error: result.error.message }, { status: result.error.code} )
        }

        return c.json(result)
    })


    // Update a project
    app.patch("/:id", async (c) => {
        const id = c.req.param("id")
        const data = await c.req.json()

        const result = await projectService.update({
            id,
            ...data,
        })

        if (!result.success) {
            return c.json({ error: result.error.message }, { status: result.error.code} )
        }

        return c.json(result)
    })


    return app
}

export const projectController = createProjectController(projectService)

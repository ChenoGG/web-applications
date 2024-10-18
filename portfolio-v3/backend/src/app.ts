import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";
import { hostURL } from "./config";
import { ProjectProps, User } from "./features/users/types/types";
import { authenticate } from "./features/users/utils/middleware";

type ContextVariables = {
    user: User | null
}

const app = new Hono<{ Variables: ContextVariables }>();

app.use("/*", cors({
    origin: hostURL,
    credentials: true,
}))

app.use("/statics/*", serveStatic({ root: "./" }))

// json is the web-route
app.get("/projects", authenticate(), async (c) => {
    const data = await readFile("../frontend/src/assets/data.json", "utf-8")
    let projects = JSON.parse(data)
    
    const user = c.get("user")

    let userRoleShownProjects
    if (user.id === "1") { // 1 = ADMIN
        userRoleShownProjects = projects
    } 
    else { // 2 = USER
        userRoleShownProjects = projects.filter((project: ProjectProps) => project.isPublic === true)
    } 
    
    return c.json(userRoleShownProjects)
})

// test
app.get("/", async (c) => {
    return c.text("Hellooooo am I breaking the 404?");
});

export default app;
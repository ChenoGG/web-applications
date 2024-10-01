import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

const app = new Hono();

app.use("/*", cors())

app.use("/statics/*", serveStatic({ root: "./" }))

// json is the web-route
app.get("/projects", async (c) => {
    const data = await readFile("../frontend/src/assets/data.json", "utf-8")

    return c.json(JSON.parse(data))
})

// test
app.get("/", async (c) => {
    return c.text("Hellooooo am I breaking the 404?");
});

export default app;
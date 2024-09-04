import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("/*", cors())

app.use("/statics/*", serveStatic({ root: "./" }))

app.get("/json", async (c) => {
    const data = await readFile("/assets/data.json", "utf-8")

    return c.json(JSON.parse(data))
})

console.log("HOPE IT WORKS LUL")

const port  = 3999
serve({
    fetch: app.fetch,
    port,
})
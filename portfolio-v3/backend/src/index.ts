import app from "./app";
import { port } from "./config";
import { serve } from "@hono/node-server";


console.log("HOPE IT WORKS")

serve({
    fetch: app.fetch,
    port,
})
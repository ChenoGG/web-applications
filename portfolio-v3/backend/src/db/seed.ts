// Fill db with data
import fs from "node:fs/promises"
import { join } from "node:path"
import { DB } from "./db"
import { ProjectProps } from "@/features/users/types/types"
import * as url from "url"

export const seed = async (db: DB) => {
    // https://www.sonarsource.com/blog/dirname-node-js-es-modules/
    // Got "ERR_INVALID_ARG_TYPE": The path argument must be of type string, received undefined
    // When using import.meta.dirname - maybe version related?
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url)) // const path = join(import.meta.dirname, "data.json") 
    const path = join(__dirname, "data.json")
    const file = await fs.readFile(path, "utf-8")
    const { projects } = JSON.parse(file) as {
        projects: ProjectProps[]
    }

    const insertProject = db.prepare(`
        INSERT INTO projects (id, name,
                            language, description,
                            thumbnail_image, thumbnail_image_alt_text,
                            published_at, is_public,
                            status, external_links, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        // Can't store arrays in SQLite -> stringify
        db.transaction(() => {
            for (const project of projects) {
                insertProject.run(
                    project.id,
                    project.name,
                    JSON.stringify(project.language ?? []), 
                    project.description,
                    project.thumbnail.image,
                    project.thumbnail.imageAltText,
                    project.publishedAt.toString(), 
                    project.isPublic ? 1 : 0, // https://stackoverflow.com/questions/843780/store-boolean-value-in-sqlite - bool as 1/0 integer since no bool
                    project.status,
                    JSON.stringify(project.externalLinks ?? []), 
                    JSON.stringify(project.tags ?? []) 
                );
            }
        })();
}
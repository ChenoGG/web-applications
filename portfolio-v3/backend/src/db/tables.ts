// Make tables
import type { DB } from "./db"

export const createTables = async (db: DB) => {
    db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        language TEXT[],
        description TEXT,
        thumbnail_image TEXT,
        thumbnail_image_alt_text TEXT,
        published_at TEXT,
        is_public BOOLEAN,
        status TEXT,
        external_links TEXT[],
        tags TEXT[]
    );
        `);
}

// User - is this needed at this point?
// Use for cookies I guess if you don't set it manually?
/* CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL
); */
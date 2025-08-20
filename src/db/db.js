import { drizzle } from "drizzle-orm/libsql"

export const dtbs = drizzle(process.env.DB_FILE_NAME)

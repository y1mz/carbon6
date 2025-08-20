import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { dtbs } from "../db/db"

export const auth = betterAuth({
    database: drizzleAdapter(dtbs, {
        provider: "sqlite"
    })
})
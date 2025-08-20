import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"

export const posts = sqliteTable("posts", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    postSlug: text("slug").notNull(),
//    categories: many(postcategories),
    ogImage: text("og_image"),
    ogDescription: text("og_description").notNull(),
    mdContentFile: text("md_content_file").notNull(),
    isPublished: integer("is_published", {
        mode: "boolean"
    }),
    createdAt: integer("created_at", {
        mode: "timestamp"
    }).notNull(),
    updatedAt: integer("updated_at", {
        mode: "timestamp"
    })

//   comments: many(postcomments),
//   votes: many(postvotes)
})

export const postcategories = sqliteTable("post_categories", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    slug: text("text").notNull(),
    categoryTitle: text("title").notNull(),
//    posts: many(posts)
})

export const pages = sqliteTable("pages", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description"),
    pageSlug: text("page_slug").notNull(),
    type: text("type"), // Add an enum for page contents thats either a text or list of items.
    ogImage: text("og_image"),
//    subPages: many(subpages),
    mdContentFile: text("md_content_file"),
    updatedAt: integer("updated_at", {
        mode: "timestamp"
    })
})

export const subpages = sqliteTable("sub_pages", {
    id: text("id").primaryKey(),
    parentPageId: integer("parent_page_id").notNull().references(() => pages.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    description: text("description"),
    subPageSlug: text("sub_page_slug"),
    ogImage: text("og_image"),
    mdContentFile: text("md_content_file"),
    updatedAt: integer("updated_at", {
        mode: "timestamp"
    })
})

export const projects = sqliteTable("projects", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    projectLogo: text("project_logo_url"),
    readmeFile: text("readme_file").notNull(),
    projectGitUrl: text("project_git_url"),
    projectWebsiteUrl: text("project_web_url")
})

// export const images = sqliteTable("gallery", {})

// export const postcomments = sqliteTable("comments", {})

// export const postvotes = sqliteTable("post_votes", {})
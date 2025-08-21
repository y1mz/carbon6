import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"
import { cuid2 } from "drizzle-cuid2/sqlite"

export const posts = sqliteTable("posts", {
    id: cuid2("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    postSlug: text("slug").notNull(),
    ogImage: text("og_image"),
    ogDescription: text("og_description").notNull(),
    mdContentFile: text("md_content_file").notNull(),
    isPublished: integer("is_published", {
        mode: "boolean"
    }).default(0),
    createdAt: integer("created_at", {
        mode: "timestamp"
    }).notNull().default(new Date().toTimeString()),
    updatedAt: integer("updated_at", {
        mode: "timestamp"
    })

//   comments: many(postcomments),
//   votes: many(postvotes)
})

export const postcategories = sqliteTable("post_categories", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    slug: text("text").notNull(),
    categoryTitle: text("title").notNull().unique()
//    posts: many(posts)
})

export const postToCategories = sqliteTable("posts_to_categories", ({
    postId: text("post_id").notNull().references(() => posts.id),
    categoryId: integer("category_id").notNull().references(() => postcategories.id)
}))

export const postRelations = relations(posts, ({ many }) => ({
    postToCategories: many(postToCategories),
    comments: many(postComments)
}))

export const postComments = sqliteTable("post_comments", {
    id: cuid2("id").defaultRandom().primaryKey(),
    postId: text("post_id").notNull().references(() => posts.id),
    commentContents: text("comment_contents").notNull(),
    commentSource: text("comment_source", { enum: ["twitter", "fediverse"] }).notNull(),
    commentId: text("comment_uuid"),
    commentUrl: text("comment_url").notNull(),
    date: integer("date", { mode: "timestamp" })
})

export const commentsRelations = relations(postComments, ({ one }) => ({
    post: one(posts)
}))

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
    id: cuid2("id").defaultRandom().primaryKey(),
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

export const pageRelations = relations(pages, ({ many }) => ({
    subpages: many(subpages)
}))

export const subPageRelations = relations(subpages, ({ one }) => ({
    parent: one(pages)
}))

export const projects = sqliteTable("projects", {
    id: cuid2("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    projectLogo: text("project_logo_url"),
    readmeFile: text("readme_file").notNull(),
    projectGitUrl: text("project_git_url"),
    projectWebsiteUrl: text("project_web_url")
})

// export const images = sqliteTable("gallery", {})

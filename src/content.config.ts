import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/blog",
    generateId: ({ entry, data }) => {
      const locale = entry.split("/")[0];
      return `${locale}/${String(data.slug)}`;
    },
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishingDate: z.coerce.date(),
    draft: z.boolean(),
    slug: z.string(),
    translation: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    url: z.string(),
    publishingDate: z.string(),
    tech: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};

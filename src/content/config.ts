import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishingDate: z.date(),
    draft: z.boolean(),
    translation: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    url: z.string().url(),
    publishingDate: z.string(),
    tech: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};

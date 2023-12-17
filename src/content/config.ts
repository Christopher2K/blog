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

export const collections = {
  blog: blogCollection,
};

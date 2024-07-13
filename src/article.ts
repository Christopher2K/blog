import { getCollection } from "astro:content";

function getTranslationPath(translationLang: string, slug: string) {
  const langPrefix = translationLang === "fr" ? "" : translationLang + "/";
  return `/${langPrefix}blog/${slug}`;
}

export async function getBlogCollection(lang: string) {
  const blogCollection = await getCollection("blog", ({ data, id }) => {
    return id.startsWith(lang) && Boolean(import.meta.env.DEV || !data.draft);
  }).then((data) =>
    data.toSorted((a, b) => {
      if (a.data.publishingDate > b.data.publishingDate) {
        return -1;
      } else if (a.data.publishingDate < b.data.publishingDate) {
        return 1;
      } else {
        return 0;
      }
    }),
  );

  return blogCollection.map((entry) => {
    const langPrefix = lang === "fr" ? "" : lang + "/";
    const translationLang = lang === "fr" ? "en" : "fr";

    return {
      ...entry,
      path: `/${langPrefix}blog/${entry.slug}`,
      translation: entry.data.translation
        ? {
            path: getTranslationPath(translationLang, entry.data.translation),
          }
        : undefined,
    };
  });
}

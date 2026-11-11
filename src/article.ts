import { getCollection, type CollectionEntry } from "astro:content";
import { SUPPORTED_LANG, getLocale, type SupportedLang } from "@/i18n";
import { getArticlePath } from "@/utils/routes";

export type BlogArticle = CollectionEntry<"blog"> & {
  locale: SupportedLang;
  translationKey: string;
  path: string;
  translation?: {
    locale: SupportedLang;
    path: string;
  };
};

function getArticleLocale(id: string) {
  const locale = getLocale(id.split("/")[0]);

  if (!id.startsWith(`${locale}/`)) {
    throw new Error(`Invalid blog entry ID: ${id}`);
  }

  return locale;
}

export async function getBlogCollection(
  lang: SupportedLang,
): Promise<BlogArticle[]> {
  const entries = await getCollection("blog", ({ data }) =>
    Boolean(import.meta.env.DEV || !data.draft),
  );

  const entriesByLocaleAndKey = new Map<string, CollectionEntry<"blog">>();

  for (const entry of entries) {
    const locale = getArticleLocale(entry.id);
    const key = `${locale}/${entry.id.slice(locale.length + 1)}`;

    if (entriesByLocaleAndKey.has(key)) {
      throw new Error(`Duplicate blog translation key: ${key}`);
    }
    entriesByLocaleAndKey.set(key, entry);
  }

  return entries
    .filter((entry) => getArticleLocale(entry.id) === lang)
    .toSorted(
      (a, b) =>
        b.data.publishingDate.getTime() - a.data.publishingDate.getTime(),
    )
    .map((entry) => {
      const translationKey = entry.id.slice(lang.length + 1);
      const translationLang = SUPPORTED_LANG.find((locale) => locale !== lang);
      const translatedEntry = translationLang
        ? entriesByLocaleAndKey.get(`${translationLang}/${translationKey}`)
        : undefined;

      return {
        ...entry,
        locale: lang,
        translationKey,
        path: getArticlePath(lang, entry.data.slug),
        translation:
          translationLang && translatedEntry
            ? {
                locale: translationLang,
                path: getArticlePath(
                  translationLang,
                  translatedEntry.data.slug,
                ),
              }
            : undefined,
      };
    });
}

export async function getArticleStaticPaths(lang: SupportedLang) {
  const blogCollection = await getBlogCollection(lang);

  return blogCollection.map((entry) => ({
    params: { slug: entry.data.slug },
    props: { entry, lang },
  }));
}

export function getArticleAlternatePaths(article: BlogArticle) {
  if (!article.translation) return undefined;

  return {
    [article.locale]: article.path,
    [article.translation.locale]: article.translation.path,
  } as Record<SupportedLang, string>;
}

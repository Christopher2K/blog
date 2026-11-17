import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getTranslator, isSupportedLang } from "@/i18n";
import { getBlogCollection } from "@/article";
import { getHomePath } from "@/utils/routes";

export async function GET(context: APIContext) {
  const requestedLocale = context.url.searchParams.get("lang");
  if (requestedLocale !== null && !isSupportedLang(requestedLocale)) {
    return new Response("Unsupported locale", { status: 400 });
  }

  const locale = isSupportedLang(requestedLocale)
    ? requestedLocale
    : context.locals.locale;
  const t = getTranslator(locale);
  const blogCollection = await getBlogCollection(locale);

  return rss({
    title: t("rss:title"),
    description: t("rss:description"),
    site: new URL(getHomePath(locale), context.site ?? context.url),
    trailingSlash: false,
    stylesheet: `/${locale}/rss-stylesheet.xsl`,
    items: blogCollection.map((item) => ({
      title: item.data.title,
      pubDate: item.data.publishingDate,
      description: item.data.description,
      link: item.path,
    })),
    customData: `<language>${locale}</language>`,
  });
}

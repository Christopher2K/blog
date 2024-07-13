import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { t, l } from "@/i18n";

import { getBlogCollection } from "@/article";
import { DEFAULT_LANG, LOCALE_FULL_NAME, type SupportedLang } from "@/i18n";

export async function GET(context: APIContext) {
  const locale = context.currentLocale ?? DEFAULT_LANG;
  const localeFullName = LOCALE_FULL_NAME[locale as unknown as SupportedLang];
  const blogCollection = await getBlogCollection(locale);

  return rss({
    title: t("rss:title"),
    description: t("rss:description"),
    site: context.site + l("/", { targetLocale: locale }),
    trailingSlash: false,
    stylesheet: `/${locale}/rss-stylesheet.xsl`,
    items: blogCollection.map((item) => ({
      title: item.data.title,
      pubDate: item.data.publishingDate,
      description: item.data.description,
      link: item.path,
    })),
    customData: `<language>${localeFullName}</language>`,
  });
}

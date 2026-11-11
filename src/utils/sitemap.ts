import {
  getArticleAlternatePaths,
  getBlogCollection,
  type BlogArticle,
} from "@/article";
import { SUPPORTED_LANG, type SupportedLang } from "@/i18n";
import { getHomePath } from "@/utils/routes";

type SitemapPage = {
  path: string;
  alternatePaths?: Partial<Record<SupportedLang, string>>;
  includeXDefault?: boolean;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function absoluteUrl(path: string, site: URL) {
  return escapeXml(new URL(path, site).href);
}

function renderPage(page: SitemapPage, site: URL) {
  const alternates = SUPPORTED_LANG.flatMap((locale) => {
    const path = page.alternatePaths?.[locale];
    return path
      ? [
          `    <xhtml:link rel="alternate" hreflang="${locale}" href="${absoluteUrl(path, site)}" />`,
        ]
      : [];
  });

  if (page.includeXDefault && page.alternatePaths?.fr) {
    alternates.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(page.alternatePaths.fr, site)}" />`,
    );
  }

  return [
    "  <url>",
    `    <loc>${absoluteUrl(page.path, site)}</loc>`,
    ...alternates,
    "  </url>",
  ].join("\n");
}

function articleToSitemapPage(article: BlogArticle): SitemapPage {
  return {
    path: article.path,
    alternatePaths: getArticleAlternatePaths(article),
  };
}

export async function generateSitemap(site: URL) {
  const articlesByLocale = await Promise.all(
    SUPPORTED_LANG.map((locale) => getBlogCollection(locale)),
  );
  const homeAlternatePaths: Record<SupportedLang, string> = {
    fr: getHomePath("fr"),
    en: getHomePath("en"),
  };
  const pages: SitemapPage[] = [
    ...SUPPORTED_LANG.map((locale) => ({
      path: getHomePath(locale),
      alternatePaths: homeAlternatePaths,
      includeXDefault: true,
    })),
    ...articlesByLocale.flatMap((articles) =>
      articles.map(articleToSitemapPage),
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((page) => renderPage(page, site)).join("\n")}
</urlset>
`;
}

export function generateSitemapIndex(site: URL) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${absoluteUrl("/sitemap-0.xml", site)}</loc>
  </sitemap>
</sitemapindex>
`;
}

export function xmlResponse(xml: string) {
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

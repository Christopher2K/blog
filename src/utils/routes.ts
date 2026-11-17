import type { SupportedLang } from "@/i18n";

export function getHomePath(_locale: SupportedLang) {
  return "/";
}

export function getArticlePath(_locale: SupportedLang, slug: string) {
  return `/blog/${slug}`;
}

export function getRssPath(locale: SupportedLang) {
  return `/rss.xml?lang=${locale}`;
}

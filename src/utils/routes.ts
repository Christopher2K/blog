import { DEFAULT_LANG, type SupportedLang } from "@/i18n";

function getLocalePrefix(locale: SupportedLang) {
  return locale === DEFAULT_LANG ? "" : `/${locale}`;
}

export function getHomePath(locale: SupportedLang) {
  return `${getLocalePrefix(locale)}/`;
}

export function getArticlePath(locale: SupportedLang, slug: string) {
  return `${getLocalePrefix(locale)}/blog/${slug}`;
}

export function getRssPath(locale: SupportedLang) {
  return `${getLocalePrefix(locale)}/rss.xml`;
}

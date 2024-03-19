import i18next from "i18next";
import { getRelativeLocaleUrl } from "astro:i18n";

import commonEn from "./en/common.json";
import homeEn from "./en/home.json";
import blogEn from "./en/blog.json";

import commonFr from "./fr/common.json";
import homeFr from "./fr/home.json";
import blogFr from "./fr/blog.json";

export const SUPPORTED_LANG = ["en", "fr"] as const;
export type SupportedLang = (typeof SUPPORTED_LANG)[number];
export type Resource = {
  common: typeof commonEn;
  home: typeof homeEn;
  blog: typeof blogEn;
};

const resources: Record<SupportedLang, Resource> = {
  en: {
    common: commonEn,
    home: homeEn,
    blog: blogEn,
  },
  fr: {
    common: commonFr,
    home: homeFr,
    blog: blogFr,
  },
};

export async function init() {
  await i18next.init({
    lng: "fr", // if you're using a language detector, do not define the lng option
    debug: true,
    ns: ["common", "home", "blog"],
    resources,
  });
}

/**
 * Localize navigation path
 */
function l(path: string, { targetLocale }: { targetLocale?: string } = {}) {
  if (targetLocale) {
    return `/${targetLocale === "fr" ? "" : targetLocale}${path}`;
  }

  const lang = i18next.language;
  return getRelativeLocaleUrl(lang, path);
}

export const LOCALE_FULL_NAME: Record<SupportedLang, string> = {
  en: "en_US",
  fr: "fr_FR",
};

const { changeLanguage, t } = i18next;

export { t, changeLanguage, l };
export default i18next;

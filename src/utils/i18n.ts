export const SUPPORTED_LANGUAGES = ["en", "fr"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGAUGE = "en";
export const LANG_COOKIE_NAME = "i18next";
export const LOCALE_FULL_NAME: Record<SupportedLanguage, string> = {
  en: "en_US",
  fr: "fr_FR",
};

import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  primaryLocale: "fr", // default app locale
  secondaryLocales: ["en"], // other supported locales
  fallbackLocale: "en", // fallback locale (on missing translation)
  trailingSlash: "never", // "never" or "always"
  run: "client+server", // "client+server" or "server"
  showPrimaryLocale: false, // "/en/about" vs "/about"
  translationLoadingRules: [], // per page group loading
  translationDirectory: {}, // translation directory names
  translations: {}, // { [translation_group1]: { [locale1]: {}, ... } }
  routes: {
    en: {
      "blog/fais-ton-propre-x": "blog/build-your-own-x",
    },
  }, // { [secondary_locale1]: { about: "about-translated", ... } }
});

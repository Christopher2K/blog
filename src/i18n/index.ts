import commonEn from "./en/common.json";
import homeEn from "./en/home.json";
import blogEn from "./en/blog.json";
import rssEn from "./en/rss.json";

import commonFr from "./fr/common.json";
import homeFr from "./fr/home.json";
import blogFr from "./fr/blog.json";
import rssFr from "./fr/rss.json";

export const SUPPORTED_LANG = ["en", "fr"] as const;
export const DEFAULT_LANG = "fr" satisfies SupportedLang;

export type SupportedLang = (typeof SUPPORTED_LANG)[number];

type Resource = {
  common: typeof commonEn;
  home: typeof homeEn;
  blog: typeof blogEn;
  rss: typeof rssEn;
};

type TranslationValues = Record<string, string | number>;
type InterpolatedTranslationValues = {
  "blog:publishedOn": { date: string };
  "common:seo.defaultOgImageAlt": { title: string };
  "common:seo.titleTemplate": { title: string };
};
type MessagePath<T> = {
  [Key in keyof T]: T[Key] extends string
    ? Key & string
    : `${Key & string}.${MessagePath<T[Key]>}`;
}[keyof T];

export type TranslationKey = {
  [
    Namespace in keyof Resource
  ]: `${Namespace & string}:${MessagePath<Resource[Namespace]>}`;
}[keyof Resource];

const resources: Record<SupportedLang, Resource> = {
  en: {
    common: commonEn,
    home: homeEn,
    blog: blogEn,
    rss: rssEn,
  },
  fr: {
    common: commonFr,
    home: homeFr,
    blog: blogFr,
    rss: rssFr,
  },
};

export function isSupportedLang(
  locale: string | undefined,
): locale is SupportedLang {
  return SUPPORTED_LANG.includes(locale as SupportedLang);
}

export function getLocale(locale: string | undefined): SupportedLang {
  return isSupportedLang(locale) ? locale : DEFAULT_LANG;
}

function getMessage(locale: SupportedLang, key: TranslationKey) {
  const [namespace, path] = key.split(":") as [keyof Resource, string];
  let message: unknown = resources[locale][namespace];

  for (const segment of path.split(".")) {
    if (typeof message !== "object" || message === null) {
      throw new Error(`Unknown translation key: ${key}`);
    }
    message = (message as Record<string, unknown>)[segment];
  }

  if (typeof message !== "string") {
    throw new Error(`Unknown translation key: ${key}`);
  }

  return message;
}

export function getTranslator(locale: SupportedLang) {
  return <Key extends TranslationKey>(
    key: Key,
    ...args: Key extends keyof InterpolatedTranslationValues
      ? [values: InterpolatedTranslationValues[Key]]
      : []
  ) => {
    const values = (args as [TranslationValues?])[0] ?? {};

    return getMessage(locale, key).replace(
      /\{\{\s*(\w+)\s*\}\}/g,
      (_placeholder, name: string) => {
        if (!(name in values)) {
          throw new Error(`Missing value "${name}" for translation: ${key}`);
        }
        return String(values[name]);
      },
    );
  };
}

export const LOCALE_FULL_NAME: Record<SupportedLang, string> = {
  en: "en_US",
  fr: "fr_FR",
};

import type { APIContext } from "astro";
import { DEFAULT_LANG, isSupportedLang, type SupportedLang } from "@/i18n";

export const LOCALE_COOKIE = "locale";

export function getPreferredLocale(
  cookieLocale: string | undefined,
  acceptLanguage: string | null,
): SupportedLang {
  if (isSupportedLang(cookieLocale)) return cookieLocale;

  const languages = (acceptLanguage ?? "")
    .split(",")
    .map((preference, index) => {
      const [tag, ...parameters] = preference.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number(qualityParameter.trim().slice(2))
        : 1;

      return {
        locale: tag?.split("-")[0],
        quality: Number.isFinite(quality) ? quality : 0,
        index,
      };
    })
    .filter(({ quality }) => quality > 0)
    .toSorted((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { locale } of languages) {
    if (isSupportedLang(locale)) return locale;
  }

  return DEFAULT_LANG;
}

export function setLocaleCookie(
  cookies: APIContext["cookies"],
  locale: SupportedLang,
) {
  cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: "lax",
    secure: import.meta.env.PROD,
  });
}

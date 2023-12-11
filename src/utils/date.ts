import { format as fnsFormat } from "date-fns";
import frCA from "date-fns/locale/fr-CA/index.js";
import enCA from "date-fns/locale/en-CA/index.js";
import { astroI18n } from "astro-i18n";

export function format(date: Date | number, pattern: string) {
  const appLocale = astroI18n.locale as unknown as string;
  let locale = frCA;

  switch (appLocale) {
    case "fr":
      locale = frCA;
      break;
    case "en":
      locale = enCA;
      break;
  }

  return fnsFormat(date, pattern, { locale });
}

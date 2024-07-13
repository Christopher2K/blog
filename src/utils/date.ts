import i18next from "@/i18n";
import { format as fnsFormat } from "date-fns";
import frCA from "date-fns/locale/fr-CA/index.js";
import enCA from "date-fns/locale/en-CA/index.js";

export function format(date: Date | number, pattern: string = "PPP") {
  const appLocale = i18next.language;
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

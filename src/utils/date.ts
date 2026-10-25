import i18next from "@/i18n";
import { format as fnsFormat } from "date-fns";
import { frCA, enCA } from "date-fns/locale";

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

  // Content dates are date-only values parsed as UTC midnight. Re-interpret
  // them as local midnight so the calendar day renders correctly in any
  // timezone (otherwise they shift to the previous day west of UTC).
  const localDate =
    date instanceof Date
      ? new Date(date.getTime() + date.getTimezoneOffset() * 60_000)
      : date;

  return fnsFormat(localDate, pattern, { locale });
}

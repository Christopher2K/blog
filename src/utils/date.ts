import { format as fnsFormat } from "date-fns";
import { frCA, enCA } from "date-fns/locale";
import type { SupportedLang } from "@/i18n";

export function format(
  date: Date | number,
  locale: SupportedLang,
  pattern: string = "PPP",
) {
  const dateLocale = locale === "fr" ? frCA : enCA;

  // Content dates are date-only values parsed as UTC midnight. Re-interpret
  // them as local midnight so the calendar day renders correctly in any
  // timezone (otherwise they shift to the previous day west of UTC).
  const localDate =
    date instanceof Date
      ? new Date(date.getTime() + date.getTimezoneOffset() * 60_000)
      : date;

  return fnsFormat(localDate, pattern, { locale: dateLocale });
}

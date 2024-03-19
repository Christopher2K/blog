import { type MiddlewareHandler } from "astro";

import { changeLanguage, init } from "@/i18n";

export const onRequest: MiddlewareHandler = async ({ currentLocale }, next) => {
  await init();
  changeLanguage(currentLocale);

  return next();
};

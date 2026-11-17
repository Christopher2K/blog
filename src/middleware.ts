import { defineMiddleware } from "astro:middleware";
import {
  getPreferredLocale,
  LOCALE_COOKIE,
  setLocaleCookie,
} from "@/i18n/request";

function addLocaleVaryHeader(response: Response) {
  const values = new Set(
    response.headers
      .get("Vary")
      ?.split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );
  values.add("Cookie");
  values.add("Accept-Language");
  response.headers.set("Vary", [...values].join(", "));
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (pathname === "/en/rss.xml") {
    return context.redirect("/rss.xml?lang=en", 308);
  }

  if (pathname === "/en" || pathname === "/en/") {
    setLocaleCookie(context.cookies, "en");
    return context.redirect(`/${search}`, 308);
  }

  if (pathname.startsWith("/en/blog/")) {
    setLocaleCookie(context.cookies, "en");
    return context.redirect(`${pathname.slice(3)}${search}`, 308);
  }

  context.locals.locale = getPreferredLocale(
    context.cookies.get(LOCALE_COOKIE)?.value,
    context.request.headers.get("Accept-Language"),
  );

  const response = await next();
  const isNegotiated =
    pathname === "/" ||
    pathname.startsWith("/blog/") ||
    (pathname === "/rss.xml" && !context.url.searchParams.has("lang"));

  if (isNegotiated) addLocaleVaryHeader(response);
  return response;
});

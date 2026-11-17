import type { APIContext } from "astro";
import { isSupportedLang } from "@/i18n";
import { setLocaleCookie } from "@/i18n/request";

function getReturnPath(value: FormDataEntryValue | null, origin: string) {
  if (
    typeof value !== "string" ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\")
  ) {
    return "/";
  }

  try {
    const url = new URL(value, origin);
    if (url.origin !== origin) return "/";
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return "/";
  }
}

export async function POST(context: APIContext) {
  const form = await context.request.formData();
  const locale = form.get("locale");

  if (typeof locale !== "string" || !isSupportedLang(locale)) {
    return new Response("Unsupported locale", { status: 400 });
  }

  setLocaleCookie(context.cookies, locale);
  return context.redirect(
    getReturnPath(form.get("returnTo"), context.url.origin),
    303,
  );
}

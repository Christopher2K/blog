import type { APIContext } from "astro";
import { generateSitemap, xmlResponse } from "@/utils/sitemap";

export async function GET(context: APIContext) {
  return xmlResponse(
    await generateSitemap(new URL(context.site ?? context.url)),
  );
}

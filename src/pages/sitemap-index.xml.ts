import type { APIContext } from "astro";
import { generateSitemapIndex, xmlResponse } from "@/utils/sitemap";

export function GET(context: APIContext) {
  return xmlResponse(
    generateSitemapIndex(new URL(context.site ?? context.url)),
  );
}

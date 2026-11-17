# llcoolblog

Bilingual personal blog built with Astro, MDX, Solid, and Panda CSS. Pages are
server-rendered with Astro's standalone Node adapter.

## Commands

```sh
pnpm dev        # Start the development server
pnpm typecheck  # Run TypeScript and Astro checks
pnpm build      # Build the production server and assets
pnpm start      # Run the production build
pnpm preview    # Preview the production build
```

The production server listens on Astro Node's `HOST` and `PORT` settings.

## Internationalization

French is the fallback locale. Public page URLs have no language prefix. Each
request uses the explicitly selected locale cookie first, then the browser's
`Accept-Language` header, then French. The locale is request-scoped through
`Astro.locals.locale`; there is no global language state.

The language controls POST to `/locale`, which validates the requested locale
and local return path, stores the preference cookie, and redirects back with a
303 response. Legacy `/en` page URLs redirect permanently to their unprefixed
equivalents and select English.

Articles live in `src/content/blog/{fr,en}`. Each article has a localized
`slug`, which determines its public URL. Files with the same basename are
treated as translations even when their slugs differ:

```text
content/blog/en/build-your-own-x.mdx  -> /blog/build-your-own-x
content/blog/fr/build-your-own-x.mdx  -> /blog/fais-ton-propre-x
```

An article does not need a translation. Drafts and translations are resolved
together so production language links never target an unpublished article. If a
slug belongs to the other language and a translation exists in the preferred
language, the server temporarily redirects to that translation. If no such
translation exists, the available article is rendered in its own locale.

`src/article.ts` owns the article/translation graph, and `src/utils/routes.ts`
owns public paths. Shared page markup lives in `src/components/pages`; the files
under `src/pages` are thin route entry points.

RSS is available at `/rss.xml?lang=en` and `/rss.xml?lang=fr`. Generated feed
links always include the explicit locale so feed readers do not need cookies or
browser language headers. Bare `/rss.xml` remains available and uses normal
locale negotiation. Canonical URLs and sitemaps contain only unprefixed paths.
Negotiated HTML and bare RSS responses vary by `Cookie` and `Accept-Language`.

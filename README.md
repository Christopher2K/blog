# llcoolblog

Bilingual personal blog built with Astro, MDX, Solid, and Panda CSS.

## Commands

```sh
pnpm dev        # Start the development server
pnpm typecheck # Run TypeScript and Astro checks
pnpm build     # Build the production site
pnpm preview   # Preview the production build
```

## Internationalization

French is the default locale and uses unprefixed URLs. English pages live under
`/en`. UI messages are in `src/i18n/{fr,en}` and are read through the typed,
locale-explicit `getTranslator(locale)` helper; there is no global language
state or middleware.

Articles live in `src/content/blog/{fr,en}`. Each article has a localized
`slug`, which determines its public URL. Files with the same basename are
treated as translations even when their slugs differ:

```text
content/blog/en/build-your-own-x.mdx  -> /en/blog/build-your-own-x
content/blog/fr/build-your-own-x.mdx  -> /blog/fais-ton-propre-x
```

An article does not need a translation. Drafts and translations are resolved
together so production language links never target an unpublished article.

`src/article.ts` owns the article/translation graph, and `src/utils/routes.ts`
owns localized paths. Language links, canonical and `hreflang` metadata, RSS,
and the sitemap all use those helpers. Shared page markup lives in
`src/components/pages`; the files under `src/pages` are thin route entry points.

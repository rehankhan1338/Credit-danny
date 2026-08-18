# creditdanny.com — Next.js migration

Static WordPress export → **Next.js 16 (App Router, TypeScript strict, fully SSG)**.
Every page, metadata string, JSON-LD payload, heading, alt text and anchor is
verified character-for-character against the original HTML (see *Verification*).

## URL scheme — read this first

The live ranking URLs **already end in a trailing slash** (`/about/` → 200;
`/about.html` → 404 on production — verified 2026-08-17). This repo therefore
uses `trailingSlash: true` and **no ranking URL changes at all**. Canonicals
are byte-identical to production. The `.html` → `/page/` redirects in
`next.config.ts` are defensive coverage for old backlinks/mirrors, one hop
each, `permanent: true`.

One deliberate exception: `mentorship/apply.html` carried a stale canonical
(`/mentorship/apply/`, which 301s on live). Its route, canonical, og:url and
JSON-LD now use the URL that actually resolves: **`/mentorship-apply/`**.

Two source pages deviate from the one-H1 ideal and are preserved as-is:
`home-buying-blueprint` has 2 h1s, `mentorship` has 0.

## The blog stays on WordPress (proxied)

62 live URLs (blog, 55+ posts, category/author archives) have no source in
this repo. A fallback rewrite proxies **everything this app doesn't own** to
`WP_ORIGIN` — blog, Rank Math sitemaps, `/wp-content/uploads/*`, feeds — so
cutover breaks nothing and new WP posts keep working.

> ### ⚠️ Before pointing DNS at this deployment
> Set the env var `WP_ORIGIN` to a hostname that still reaches WordPress
> directly (e.g. `https://origin.creditdanny.com`). The default is
> `https://creditdanny.com`, which is correct for previews **but becomes a
> proxy loop after cutover** if left unchanged.
> Also keep the WP origin serving `sitemap_index.xml` + post/category/author
> sitemaps; Next serves `page-sitemap.xml` itself (lastmods frozen at the
> live values from 2026-08-17 — bump entries in
> `app/page-sitemap.xml/route.ts` when a page meaningfully changes).

Hosting must be a Node build (`next build` + `next start`, or Vercel). A pure
static export would silently drop the redirects, the proxy and the
case-insensitivity shim.

## Layout of the code

- `app/(<page>)/…/page.tsx` — one route group per page. Each group's
  `layout.tsx` renders `components/Shell.tsx` with that page's original WP
  `<body>` class string (CSS targets `.elementor-kit-27255861` on body, so it
  must be server-rendered; route groups are the SSG-safe way to vary it).
- `components/shared/` — header/footer/nav blocks extracted where byte-identical
  across 2+ pages (7 components, auto-extracted by hash).
- `components/behaviors/` — the React port of `assets/js/main.js` (SmartBar,
  FullScreenMenu, SmoothScroll, Modal, PannedSlots, PlayMarks, Counters,
  StickyStrip, Reveal, HeroSound, LottiePlayers), mounted once in Shell.
- `components/effects/` — ports of the 7 per-page scripts
  (`assets/js/pages/*.js`), mounted by their pages.
- `proxy.ts` — case-insensitivity shim: live nginx serves `/TEAM/` = `/team/`
  at 200; Next is case-sensitive, so uppercase variants 308 to the lowercase
  canonical (an improvement over live's duplicate-content 200s), folding the
  `.html` mapping into the same hop.
- `public/assets/**`, `public/wp-content/**` — every image/video/font at its
  original path. **Do not rename or move.**
- Root `*.html` files — the migration source of truth. Not served (only
  `public/` is). Keep them: the verification suite diffs against them.
- `scripts/convert.mjs` — the HTML→TSX converter that generated the pages.
  Re-run with `npm run convert` only if you edit the source HTML.

## Third-party scripts

GA4, Clicky, Meta Pixel, Wistia, GoHighLevel forms, Trustindex and the
SearchAtlas/OTTO optimizer load via `next/script` (`afterInteractive`) or a
post-hydration effect (`components/OttoSeo.tsx`). Payloads are byte-identical
to the original; only the injection point moved, because several of them
mutate the DOM and executing during parse raced React hydration into
intermittent #418 errors. Verified: zero hydration/console errors on all 19
pages (`scripts/verify-console.mjs`, headless Chrome).

The tiny pre-paint JS-detection one-liners (`ca-js`/`pl-js`/… on `<html>`)
remain raw inline scripts — the reveal CSS needs them before first paint —
with `suppressHydrationWarning` on `<html>` to match.

`assets/css/legacy-elementor.css` (the two legal pages) is served
byte-identical via `<link>` rather than the bundler: the export mangled some
selectors and browsers' CSS error recovery must stay exactly as it is today.

## Commands

```
npm run dev          # dev server
npm run build        # production build (all pages SSG)
npm start            # serve production build
npm run lint         # eslint (flat config; next lint was removed in Next 16)
npm run convert      # regenerate pages from the root *.html sources

# with `npm start` running on :3100:
node scripts/verify-seo.mjs        # 19/19 SEO parity vs original HTML
node scripts/verify-redirects.mjs  # every legacy URL: one permanent hop
node scripts/verify-console.mjs    # headless-Chrome console/hydration sweep
```

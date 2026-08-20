import type { NextConfig } from "next";

/**
 * WordPress origin for everything this repo does NOT own (blog posts,
 * /category/*, /author/*, Rank Math sitemaps, wp-content uploads, feeds).
 *
 * IMPORTANT — before pointing creditdanny.com DNS at this deployment, set
 * WP_ORIGIN to a hostname that still reaches the WordPress server directly
 * (e.g. https://origin.creditdanny.com). Leaving the default after cutover
 * would make the fallback rewrite proxy to this same deployment (a loop).
 */
// `||` (not `??`) so an empty WP_ORIGIN env var also falls back
const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";

const nextConfig: NextConfig = {
  /*
   * The live ranking URLs all end in a trailing slash (verified 2026-08-17:
   * https://creditdanny.com/about/ → 200, /about → 301 → /about/).
   * trailingSlash: true keeps every canonical byte-identical to production.
   */
  trailingSlash: true,

  reactStrictMode: true,

  /*
   * ────────────────────────────────────────────────────────────────────────
   * TEST-DOMAIN NOINDEX — REMOVE THIS ENTIRE headers() BLOCK AT LAUNCH.
   *
   * While this deployment lives on a test domain, every response (Next
   * pages, public/ files, and WordPress-proxied fallbacks alike) carries
   * X-Robots-Tag: noindex, nofollow so search engines never index it as a
   * duplicate of the live creditdanny.com. The HTTP header outranks the
   * per-page `robots: "index, follow"` meta tags (the most restrictive
   * directive wins), so those meta tags stay byte-identical to production
   * and verify-seo keeps passing.
   *
   * Deliberately NOT done via robots.txt Disallow — a crawl block would
   * stop Google from ever seeing the noindex, letting the URLs get indexed
   * (without content) anyway.
   *
   * AT LAUNCH (main domain cutover): delete this headers() block, redeploy,
   * and indexing resumes from the unchanged meta tags. Nothing else to flip.
   * ────────────────────────────────────────────────────────────────────────
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },

  /*
   * 301 coverage for the legacy .html URLs of this static export, one hop
   * each, straight to the final trailing-slash URL. `permanent: true` emits
   * a 308 (permanent, equivalent to 301 for search engines; never a 302).
   *
   * NOTE: these .html URLs already 404 on live production — the live site
   * has served clean trailing-slash URLs all along. These entries are
   * defensive coverage for old backlinks/mirrors, not a live-URL migration.
   */
  async redirects() {
    return [
      // legacy index.html
      { source: "/index.html", destination: "/", permanent: true },

      // one entry per page file in this repo — exhaustive
      { source: "/about.html", destination: "/about/", permanent: true },
      { source: "/accelerator.html", destination: "/accelerator/", permanent: true },
      { source: "/accelerator-application.html", destination: "/accelerator-application/", permanent: true },
      { source: "/blueprint.html", destination: "/blueprint/", permanent: true },
      { source: "/blueprint-application.html", destination: "/blueprint-application/", permanent: true },
      { source: "/blueprint-strategy.html", destination: "/blueprint-strategy/", permanent: true },
      { source: "/consult-calendar.html", destination: "/consult-calendar/", permanent: true },
      { source: "/get-started.html", destination: "/get-started/", permanent: true },
      { source: "/home-buying-blueprint.html", destination: "/home-buying-blueprint/", permanent: true },
      { source: "/mentorship.html", destination: "/mentorship/", permanent: true },
      { source: "/plans.html", destination: "/plans/", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy/", permanent: true },
      { source: "/sponsorship.html", destination: "/sponsorship/", permanent: true },
      { source: "/sponsorship-apply.html", destination: "/sponsorship-apply/", permanent: true },
      { source: "/team.html", destination: "/team/", permanent: true },
      { source: "/terms-and-conditions.html", destination: "/terms-and-conditions/", permanent: true },
      { source: "/transformations.html", destination: "/transformations/", permanent: true },

      /*
       * mentorship/apply.html lives in a subdirectory locally, but its live
       * URL is the flat /mentorship-apply/ (verified: /mentorship/apply/
       * 301s to /mentorship-apply/ in production). Both old shapes map
       * straight to the final URL — no chains.
       */
      { source: "/mentorship/apply.html", destination: "/mentorship-apply/", permanent: true },
      // (the slashless /mentorship/apply is normalized to /mentorship/apply/
      // by the built-in trailing-slash 308 before redirects are matched)
      { source: "/mentorship/apply/", destination: "/mentorship-apply/", permanent: true },
      { source: "/mentorship/index.html", destination: "/mentorship/", permanent: true },
    ];
  },

  /*
   * Everything this repo does not serve falls through to WordPress, so the
   * cutover breaks nothing: /blog/, all post slugs (including ones published
   * after this build), /category/*, /author/*, feeds, Rank Math's
   * sitemap_index.xml + post/category/author sitemaps + main-sitemap.xsl,
   * and /wp-content/uploads/* referenced by blog markup.
   * page-sitemap.xml is the one XML Next serves itself (app/page-sitemap.xml).
   */
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        /*
         * Trailing-slash URLs must proxy WITH the slash — `/:path*` alone
         * expands slashless, and the WP origin 301s /blog back to /blog/,
         * which would loop once this deployment owns the domain.
         */
        { source: "/:path*/", destination: `${WP_ORIGIN}/:path*/` },
        { source: "/:path*", destination: `${WP_ORIGIN}/:path*` },
      ],
    };
  },
};

export default nextConfig;

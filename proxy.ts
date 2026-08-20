import { NextRequest, NextResponse } from "next/server";

/**
 * Case-insensitivity shim.
 *
 * The live nginx/WordPress stack resolves page URLs case-insensitively
 * (/TEAM/ serves the same bytes as /team/). Next.js routing is
 * case-sensitive, so without this a previously-working /TEAM/ would 404.
 * We improve on live behavior by 301ing the case variant to the canonical
 * lowercase URL instead of serving duplicate content at 200.
 *
 * This also folds the legacy .html mapping into the SAME redirect so that a
 * case-variant old URL (e.g. /About.html) reaches its final URL in one hop —
 * lowercase → strip .html → trailing slash — never a chain.
 */

const HTML_TO_ROUTE: Record<string, string> = {
  "/index.html": "/",
  "/about.html": "/about/",
  "/accelerator.html": "/accelerator/",
  "/accelerator-application.html": "/accelerator-application/",
  "/blueprint.html": "/blueprint/",
  "/blueprint-application.html": "/blueprint-application/",
  "/blueprint-strategy.html": "/blueprint-strategy/",
  "/consult-calendar.html": "/consult-calendar/",
  "/get-started.html": "/get-started/",
  "/home-buying-blueprint.html": "/home-buying-blueprint/",
  "/mentorship.html": "/mentorship/",
  "/mentorship/apply.html": "/mentorship-apply/",
  "/mentorship/index.html": "/mentorship/",
  "/plans.html": "/plans/",
  "/privacy-policy.html": "/privacy-policy/",
  "/sponsorship.html": "/sponsorship/",
  "/sponsorship-apply.html": "/sponsorship-apply/",
  "/team.html": "/team/",
  "/terms-and-conditions.html": "/terms-and-conditions/",
  "/transformations.html": "/transformations/",
};

/** Routes owned by this app (everything else falls through to WordPress). */
const OWNED_ROUTES = new Set([
  "/",
  "/about/",
  "/accelerator/",
  "/accelerator-application/",
  "/blueprint/",
  "/blueprint-application/",
  "/blueprint-strategy/",
  "/consult-calendar/",
  "/get-started/",
  "/home-buying-blueprint/",
  "/mentorship/",
  "/mentorship-apply/",
  "/plans/",
  "/privacy-policy/",
  "/sponsorship/",
  "/sponsorship-apply/",
  "/team/",
  "/terms-and-conditions/",
  "/transformations/",
  "/category/credit-insights/",
]);

function finalUrlFor(pathname: string): string | null {
  let p = pathname.toLowerCase();

  // tolerate a stray trailing slash on a .html path (/about.html/)
  if (p.endsWith(".html/")) p = p.slice(0, -1);

  if (p.endsWith(".html")) {
    const mapped = HTML_TO_ROUTE[p];
    if (mapped) return mapped;
    // generic legacy /dir/index.html → /dir/
    if (p.endsWith("/index.html")) return p.slice(0, -"index.html".length);
    // unknown .html page → clean trailing-slash URL
    return `${p.slice(0, -".html".length)}/`;
  }

  const withSlash = p.endsWith("/") ? p : `${p}/`;
  if (p === "/mentorship/apply" || withSlash === "/mentorship/apply/") {
    return "/mentorship-apply/";
  }
  if (OWNED_ROUTES.has(withSlash) || OWNED_ROUTES.has(p)) {
    return withSlash === "//" ? "/" : withSlash;
  }
  return null; // not ours — leave untouched for the WordPress fallback proxy
}

/*
 * Single-segment URLs that must stay with WordPress. app/[slug] (the blog
 * post route) matches ANY unhandled single segment BEFORE the fallback
 * rewrites can run, so these are rewritten to WP here in the proxy, which
 * runs before route matching. Multi-segment WP paths (/category/mortgage-*,
 * /author/*, …) never match [slug] and keep using the fallback rewrites.
 */
// `||` (not `??`) so an empty WP_ORIGIN env var also falls back
const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";
const WP_KEEP = new Set(["/blog/", "/feed/", "/comments/"]);
/** dotted root paths Next itself serves — everything else dotted goes to WP */
const OWNED_FILES = new Set(["/robots.txt", "/page-sitemap.xml"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only page-shaped URLs: skip Next internals and real files (other than .html)
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/wp-") ||
    (/\.[a-zA-Z0-9]+\/?$/.test(pathname) && !/\.html\/?$/i.test(pathname))
  ) {
    const single = /^\/[^/]+\/?$/.test(pathname);
    if (single && /\./.test(pathname) && !OWNED_FILES.has(pathname) && !pathname.startsWith("/_next/")) {
      // root-level file (sitemap_index.xml, post-sitemap.xml, favicon.ico, …)
      // — WordPress serves these; [slug] must not swallow them into a 404
      return NextResponse.rewrite(new URL(pathname + request.nextUrl.search, WP_ORIGIN));
    }
    return NextResponse.next();
  }

  const withTrailingSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (WP_KEEP.has(withTrailingSlash.toLowerCase())) {
    return NextResponse.rewrite(new URL(pathname + request.nextUrl.search, WP_ORIGIN));
  }

  const hasUpper = /[A-Z]/.test(pathname);
  const isHtml = /\.html\/?$/i.test(pathname);
  if (!hasUpper && !isHtml) return NextResponse.next();

  // Exact-lowercase .html URLs are already 308'd by next.config.ts redirects
  // (which run before this proxy); anything reaching here needs normalizing.
  const target = finalUrlFor(pathname);
  if (target && target !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|assets/|wp-content/|wp-includes/).*)"],
};

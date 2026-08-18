/**
 * page-sitemap.xml — served by Next because the pages themselves now live
 * here. Byte-compatible with the Rank Math format (same stylesheet ref, same
 * <loc> + <lastmod> shape, no <priority>/<changefreq>, matching live).
 *
 * sitemap_index.xml and the post/category/author sitemaps stay with
 * WordPress via the fallback rewrite, and the index's page-sitemap.xml entry
 * resolves to THIS route. lastmod values are the live production values
 * captured at migration time (2026-08-17); bump an entry when its page's
 * content meaningfully changes.
 */
const ENTRIES: Array<[loc: string, lastmod: string]> = [
  ["https://creditdanny.com/", "2026-08-12T15:33:01+00:00"],
  ["https://creditdanny.com/plans/", "2026-08-14T00:35:28+00:00"],
  ["https://creditdanny.com/blueprint-strategy/", "2026-08-13T04:24:47+00:00"],
  ["https://creditdanny.com/home-buying-blueprint/", "2026-08-13T01:03:06+00:00"],
  ["https://creditdanny.com/sponsorship/", "2026-08-12T15:33:55+00:00"],
  ["https://creditdanny.com/accelerator/", "2026-08-12T15:33:39+00:00"],
  ["https://creditdanny.com/blueprint/", "2026-08-12T15:33:26+00:00"],
  ["https://creditdanny.com/transformations/", "2026-08-12T15:33:12+00:00"],
  ["https://creditdanny.com/about/", "2026-08-12T15:33:07+00:00"],
  ["https://creditdanny.com/mentorship/", "2026-08-06T03:04:24+00:00"],
];

export const dynamic = "force-static";

export function GET() {
  const urls = ENTRIES.map(
    ([loc, lastmod]) => `\t<url>\n\t\t<loc>${loc}</loc>\n\t\t<lastmod>${lastmod}</lastmod>\n\t</url>\n`
  ).join("");
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<?xml-stylesheet type="text/xsl" href="//creditdanny.com/main-sitemap.xsl"?>\n` +
    `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls +
    `</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "text/xml; charset=UTF-8" },
  });
}

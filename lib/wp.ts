/**
 * WordPress REST API client.
 *
 * Published posts are PUBLIC on the WP REST API — no credentials required
 * (verified against the live site). If the API is ever locked down, create an
 * Application Password in wp-admin (Users → Profile → Application Passwords —
 * NOT the real admin password) and set WP_APP_USER / WP_APP_PASSWORD in
 * .env.local (see .env.example). Never commit credentials.
 *
 * Pages consuming this revalidate hourly (ISR): new posts published in
 * WordPress appear without a redeploy.
 */

const WP_ORIGIN = process.env.WP_ORIGIN ?? "https://creditdanny.com";
export const WP_REVALIDATE_SECONDS = 3600;

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      media_details?: {
        sizes?: Record<string, { source_url: string }>;
      };
    }>;
  };
};

export type WpCategory = {
  id: number;
  count: number;
  name: string;
  slug: string;
};

function authHeaders(): Record<string, string> {
  const user = process.env.WP_APP_USER;
  const pass = process.env.WP_APP_PASSWORD;
  if (!user || !pass) return {};
  return { Authorization: `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}` };
}

async function wpFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${WP_ORIGIN}/wp-json/wp/v2${path}`, {
    headers: { Accept: "application/json", ...authHeaders() },
    next: { revalidate: WP_REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`WP REST ${res.status} for ${path}`);
  return res.json() as Promise<T>;
}

export async function getCategoryBySlug(slug: string): Promise<WpCategory> {
  const cats = await wpFetch<WpCategory[]>(`/categories?slug=${encodeURIComponent(slug)}&_fields=id,count,name,slug`);
  if (!cats.length) throw new Error(`WP category not found: ${slug}`);
  return cats[0];
}

export async function getCategoryPosts(categoryId: number): Promise<WpPost[]> {
  // per_page max is 100; the site has ~42 posts in its largest category.
  // If it ever exceeds 100, follow X-WP-TotalPages here.
  return wpFetch<WpPost[]>(
    `/posts?categories=${categoryId}&per_page=100&orderby=date&order=desc&_embed=wp:featuredmedia`
  );
}

/* ------------------------- presentation helpers ------------------------- */

const ENTITIES: Record<string, string> = {
  "&hellip;": "…", "&amp;": "&", "&#038;": "&", "&#8217;": "’", "&#8216;": "‘",
  "&#8220;": "“", "&#8221;": "”", "&#8211;": "–", "&#8212;": "—", "&nbsp;": " ",
  "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'",
};

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/gi, (e) => ENTITIES[e] ?? e)
    .replace(/\s+/g, " ")
    .trim();
}

export function readingMinutes(contentHtml: string): number {
  const words = stripHtml(contentHtml).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

export function postPath(post: WpPost): string {
  try {
    return new URL(post.link).pathname;
  } catch {
    return `/${post.slug}/`;
  }
}

/** Featured image URL, root-relative so it proxies through this domain. */
export function featuredImage(post: WpPost, size: "large" | "medium_large"): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  const url = media.media_details?.sizes?.[size]?.source_url ?? media.source_url;
  if (!url) return null;
  return url.replace(/^https:\/\/(www\.)?creditdanny\.com/, "");
}

export function longDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function shortDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

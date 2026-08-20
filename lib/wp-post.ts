/**
 * Blog post pages, served by Next with WordPress as the content AND SEO
 * source of truth.
 *
 * The REST API does not expose Rank Math's per-post SEO (custom titles,
 * descriptions, JSON-LD), so each post's WP-rendered page is fetched
 * server-side (ISR, hourly) and its head + article region are extracted
 * verbatim:
 *   - head: title, description/robots, canonical, og:/article:/twitter:
 *     metas, icons, JSON-LD — character-identical to what WP serves today
 *   - body: the #cdb article region + the pre-footer CTA section, exactly
 *     as the theme renders them (design identical by construction)
 * Our Next shell supplies the header/menu/footer chrome and analytics.
 *
 * Editing a post in wp-admin updates the page within the hour; publishing a
 * new post works on first visit (dynamicParams) with no redeploy.
 */
import { parse, serializeOuter } from "parse5";

// `||` (not `??`) so an empty WP_ORIGIN env var also falls back
const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";
export const POST_REVALIDATE_SECONDS = 3600;

/* --------------------------------- types -------------------------------- */

export type HeadTag = {
  tag: "title" | "meta" | "link";
  text?: string;
  attrs: Record<string, string>;
};

export type ScrapedPost = {
  headTags: HeadTag[];
  jsonLd: string[];
  /** the theme's inline <style> block carrying the .cdb design rules */
  styleCss: string;
  bodyClass: string;
  /** #cdb article region + pre-footer CTA section, internal URLs made root-relative */
  regionHtml: string;
};

/* ------------------------------ tree helpers ---------------------------- */

type P5Node = {
  nodeName: string;
  tagName?: string;
  value?: string;
  attrs?: Array<{ name: string; prefix?: string; value: string }>;
  childNodes?: P5Node[];
};

const isEl = (n: P5Node) => !!n.tagName;
const attr = (el: P5Node, name: string) => el.attrs?.find((a) => a.name === name)?.value;
const text = (el: P5Node) =>
  (el.childNodes || []).map((c) => (c.nodeName === "#text" ? c.value : "")).join("");

function findOne(node: P5Node, pred: (n: P5Node) => boolean): P5Node | null {
  if (pred(node)) return node;
  for (const c of node.childNodes || []) {
    const r = findOne(c, pred);
    if (r) return r;
  }
  return null;
}

/** Absolute own-domain URLs -> root-relative (posts, images, theme fonts). */
function relativize(s: string): string {
  return s.replace(/https?:\/\/(www\.)?creditdanny\.com\//gi, "/");
}

/* --------------------------------- fetch -------------------------------- */

export async function getAllPostSlugs(): Promise<string[]> {
  const res = await fetch(`${WP_ORIGIN}/wp-json/wp/v2/posts?per_page=100&_fields=slug`, {
    next: { revalidate: POST_REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`WP REST ${res.status} listing post slugs`);
  const posts = (await res.json()) as Array<{ slug: string }>;
  return posts.map((p) => p.slug);
}

const KEEP_META_NAMES = /^(description|robots|twitter:|ti-site-data|theme-color)/;
const KEEP_META_PROPS = /^(og:|article:)/;
const KEEP_LINK_RELS = new Set(["canonical", "icon", "apple-touch-icon"]);

export async function getScrapedPost(slug: string): Promise<ScrapedPost | null> {
  const res = await fetch(`${WP_ORIGIN}/${slug}/`, {
    headers: { "X-Forwarded-Proto": "https" },
    next: { revalidate: POST_REVALIDATE_SECONDS },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`WP ${res.status} for post ${slug}`);
  const html = await res.text();

  const doc = parse(html) as unknown as P5Node;
  const head = findOne(doc, (n) => n.tagName === "head");
  const body = findOne(doc, (n) => n.tagName === "body");
  if (!head || !body) return null;

  const cdb = findOne(body, (n) => isEl(n) && attr(n, "id") === "cdb");
  if (!cdb) return null; // not a cdb-templated post page

  /* ---- head ---- */
  const headTags: HeadTag[] = [];
  const jsonLd: string[] = [];
  let styleCss = "";

  for (const n of head.childNodes || []) {
    if (!isEl(n)) continue;
    if (n.tagName === "title") {
      headTags.push({ tag: "title", text: text(n), attrs: {} });
      continue;
    }
    if (n.tagName === "meta") {
      const name = attr(n, "name");
      const prop = attr(n, "property");
      if ((name && KEEP_META_NAMES.test(name)) || (prop && KEEP_META_PROPS.test(prop))) {
        const attrs: Record<string, string> = {};
        for (const a of n.attrs || []) attrs[a.name] = a.value;
        headTags.push({ tag: "meta", attrs });
      }
      continue;
    }
    if (n.tagName === "link") {
      const rel = attr(n, "rel");
      if (rel && KEEP_LINK_RELS.has(rel)) {
        const attrs: Record<string, string> = {};
        for (const a of n.attrs || []) attrs[a.name] = a.value;
        headTags.push({ tag: "link", attrs });
      }
      continue;
    }
    if (n.tagName === "script" && attr(n, "type") === "application/ld+json") {
      jsonLd.push(text(n));
      continue;
    }
    if (n.tagName === "style") {
      const css = text(n);
      if (css.includes(".cdb")) styleCss = relativize(css);
    }
  }

  /* ---- body region: #cdb + the pre-footer CTA <section> ---- */
  const parts: string[] = [serializeOuter(cdb as never)];
  const bodyKids = (body.childNodes || []).filter(isEl);
  const cdbIndex = bodyKids.indexOf(cdb);
  for (let i = cdbIndex + 1; i < bodyKids.length; i++) {
    const el = bodyKids[i];
    if (el.tagName === "section") parts.push(serializeOuter(el as never));
    else break; // stop at footer/scripts — our shell provides those
  }
  const regionHtml = relativize(parts.join("\n"));

  return {
    headTags,
    jsonLd,
    styleCss,
    bodyClass: attr(body, "class") || "",
    regionHtml,
  };
}

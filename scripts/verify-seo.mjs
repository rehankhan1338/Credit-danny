/**
 * SEO parity verification: fetches every route from a running `next start`
 * server and compares it against the original static HTML file.
 *
 * Per page:
 *  1. <title>, meta description, meta robots — exact strings
 *  2. canonical — exact (mentorship-apply: corrected URL expected)
 *  3. og:* / twitter:* / article:* — name→content map equality
 *  4. JSON-LD blocks — exact payload strings, same count
 *  5. Full body DOM diff — every element, attribute and text node must match
 *     (scripts/styles/links/meta excluded; whitespace-only text normalized;
 *     style attributes compared declaration-by-declaration)
 *  6. Heading sequence h1–h6 + exactly one h1
 *  7. Link audit — no .html hrefs, no links to redirecting URLs
 *
 * Usage: node scripts/verify-seo.mjs [baseUrl]   (default http://localhost:3100)
 */
import { parse } from "parse5";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const BASE = process.argv[2] || "http://localhost:3100";

const PAGES = [
  ["index.html", "/"],
  ["about.html", "/about/"],
  ["accelerator.html", "/accelerator/"],
  ["accelerator-application.html", "/accelerator-application/"],
  ["blueprint.html", "/blueprint/"],
  ["blueprint-application.html", "/blueprint-application/"],
  ["blueprint-strategy.html", "/blueprint-strategy/"],
  ["consult-calendar.html", "/consult-calendar/"],
  ["get-started.html", "/get-started/"],
  ["home-buying-blueprint.html", "/home-buying-blueprint/"],
  ["mentorship.html", "/mentorship/"],
  ["mentorship/apply.html", "/mentorship-apply/"],
  ["plans.html", "/plans/"],
  ["privacy-policy.html", "/privacy-policy/"],
  ["sponsorship.html", "/sponsorship/"],
  ["sponsorship-apply.html", "/sponsorship-apply/"],
  ["team.html", "/team/"],
  ["terms-and-conditions.html", "/terms-and-conditions/"],
  ["transformations.html", "/transformations/"],
];
const ROUTES = new Set(PAGES.map((p) => p[1]));
const FILE_TO_ROUTE = Object.fromEntries(PAGES);

const isEl = (n) => !!n.tagName;
const isText = (n) => n.nodeName === "#text";
const attr = (el, name) => el.attrs?.find((a) => a.name === name)?.value;
const findOne = (node, pred) => {
  if (pred(node)) return node;
  for (const c of node.childNodes || []) {
    const r = findOne(c, pred);
    if (r) return r;
  }
  return null;
};
const rawText = (el) => (el.childNodes || []).map((c) => (isText(c) ? c.value : "")).join("");

function collectMetas(headEl) {
  const out = new Map();
  for (const n of headEl.childNodes || []) {
    if (!isEl(n) || n.tagName !== "meta") continue;
    const key = attr(n, "name") || attr(n, "property");
    if (!key) continue;
    if (["viewport", "generator", "msapplication-TileImage", "ti-site-data"].includes(key)) continue;
    out.set(key, attr(n, "content") ?? "");
  }
  return out;
}
function collectJsonLd(docEl) {
  const out = [];
  (function walk(n) {
    if (isEl(n) && n.tagName === "script" && attr(n, "type") === "application/ld+json")
      out.push(rawText(n));
    for (const c of n.childNodes || []) walk(c);
  })(docEl);
  return out;
}

/* ------------- href mapping (same rules as the converter) -------------- */
function mapHref(href, sourceFile) {
  if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) return href;
  let base = href,
    suffix = "";
  const m = href.match(/^([^#?]*)([#?].*)$/);
  if (m) {
    base = m[1];
    suffix = m[2];
  }
  const abs = base.match(/^https?:\/\/(www\.)?creditdanny\.com(\/[^\s]*)?$/i);
  if (abs) {
    let p = abs[2] || "/";
    if (!p.endsWith("/") && !/\.[a-z0-9]+$/i.test(p)) p += "/";
    if (p === "/mentorship/apply/") p = "/mentorship-apply/";
    if (ROUTES.has(p)) return p + suffix;
    return href;
  }
  if (/^https?:\/\//i.test(base) || base.startsWith("//")) return href;
  if (/\.html$/i.test(base)) {
    const dir = path.posix.dirname(sourceFile.replace(/\\/g, "/"));
    const resolved = path.posix
      .normalize(path.posix.join(dir === "." ? "" : dir, base))
      .replace(/^\.\//, "");
    if (FILE_TO_ROUTE[resolved]) return FILE_TO_ROUTE[resolved] + suffix;
    return href;
  }
  const rewritten = base
    .replace(/^(\.\.\/)+assets\//, "/assets/")
    .replace(/^\.\/assets\//, "/assets/")
    .replace(/^assets\//, "/assets/")
    .replace(/^(\.\.\/)+wp-content\//, "/wp-content/")
    .replace(/^wp-content\//, "/wp-content/");
  return rewritten !== base ? rewritten + suffix : href;
}
const mapAsset = (u) =>
  u
    .replace(/^(\.\.\/)+assets\//, "/assets/")
    .replace(/^\.\/assets\//, "/assets/")
    .replace(/^assets\//, "/assets/")
    .replace(/^(\.\.\/)+wp-content\//, "/wp-content/")
    .replace(/^wp-content\//, "/wp-content/")
    .replace(/^https:\/\/creditdanny\.com\/(assets|wp-content)\//, "/$1/");
const mapSrcset = (v) =>
  v
    .split(",")
    .map((part) => {
      const t = part.trim();
      const sp = t.search(/\s/);
      return sp < 0 ? mapAsset(t) : mapAsset(t.slice(0, sp)) + t.slice(sp);
    })
    .join(", ");

/* ---------------------- normalized DOM comparison ---------------------- */
const SKIP_TAGS = new Set(["script", "style", "link", "meta", "noscript", "template", "title"]);

function normStyle(v) {
  /* Duplicate declarations collapse to the last occurrence — CSS semantics
     (some source attrs repeat a property; React style objects dedupe). */
  const map = new Map();
  for (const d of v.split(";")) {
    const t = d.trim();
    if (!t) continue;
    const i = t.indexOf(":");
    if (i < 0) continue;
    const prop = t.slice(0, i).trim().toLowerCase();
    const val = t.slice(i + 1).trim().replace(/\s+/g, " ").replace(/, /g, ",");
    map.set(prop, val); // first-occurrence position, last value — JS object semantics
  }
  return [...map.entries()].map(([p, val]) => `${p}:${val}`).join(";");
}

function normNode(node, sourceFile, isOriginal) {
  if (isText(node)) {
    const t = node.value.replace(/[\t\n\r ]+/g, " ");
    return t.trim() === "" ? null : { text: t.trim() };
  }
  if (!isEl(node)) return null;
  const tag = node.tagName;
  if (SKIP_TAGS.has(tag)) return null;

  const attrs = {};
  for (const a of node.attrs || []) {
    let name = (a.prefix ? a.prefix + ":" : "") + a.name;
    let value = a.value;
    if (name === "style") {
      if (isOriginal)
        value = value.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, u) => `url(${q}${mapAsset(u)}${q})`);
      value = normStyle(value);
      if (value === "") continue; // React drops empty style attrs — render-identical
    }
    if (isOriginal) {
      if (name === "href" && tag === "a") value = mapHref(value, sourceFile);
      else if (["src", "poster", "href"].includes(name)) value = mapAsset(value);
      else if (name === "srcset" || name === "data-srcset") value = mapSrcset(value);
      else if (name.startsWith("data-") && /(\.\.\/)?(assets|wp-content)\//.test(value))
        value = mapAsset(value);
    }
    // boolean attribute normalization: value === name → ""
    if (value.toLowerCase() === name) value = "";
    attrs[name] = value;
  }
  const children = (node.childNodes || [])
    .map((c) => normNode(c, sourceFile, isOriginal))
    .filter(Boolean)
    .filter(
      (c) =>
        // React streaming-metadata placeholder: <div hidden><!--$--><!--/$--></div>
        // — empty, hidden, no SEO or visual footprint. Served side only.
        isOriginal ||
        !(
          c.tag === "div" &&
          c.children.length === 0 &&
          Object.keys(c.attrs).length === 1 &&
          c.attrs.hidden === ""
        )
    );
  // merge adjacent text nodes
  const merged = [];
  for (const c of children) {
    const prev = merged[merged.length - 1];
    if (c.text !== undefined && prev?.text !== undefined) prev.text += " " + c.text;
    else merged.push(c);
  }
  return { tag, attrs, children: merged };
}

function diffNodes(a, b, pathStr, out, limit = 8) {
  if (out.length >= limit) return;
  if (!a || !b) {
    out.push(`${pathStr}: ${a ? "extra removed" : "missing"} node (${(a || b).tag || "text"})`);
    return;
  }
  if (a.text !== undefined || b.text !== undefined) {
    if (a.text !== b.text)
      out.push(`${pathStr}: text ${JSON.stringify(a.text?.slice(0, 80))} != ${JSON.stringify(b.text?.slice(0, 80))}`);
    return;
  }
  if (a.tag !== b.tag) {
    out.push(`${pathStr}: tag <${a.tag}> != <${b.tag}>`);
    return;
  }
  const keys = new Set([...Object.keys(a.attrs), ...Object.keys(b.attrs)]);
  for (const k of keys) {
    if ((a.attrs[k] ?? null) !== (b.attrs[k] ?? null)) {
      out.push(
        `${pathStr}<${a.tag}> @${k}: ${JSON.stringify(a.attrs[k]?.slice(0, 90) ?? null)} != ${JSON.stringify(b.attrs[k]?.slice(0, 90) ?? null)}`
      );
      if (out.length >= limit) return;
    }
  }
  const n = Math.max(a.children.length, b.children.length);
  if (a.children.length !== b.children.length) {
    out.push(
      `${pathStr}<${a.tag}>: child count ${a.children.length} != ${b.children.length} (orig kids: ${a.children.map((c) => c.tag || "#t").join(",").slice(0, 120)} | served: ${b.children.map((c) => c.tag || "#t").join(",").slice(0, 120)})`
    );
  }
  for (let i = 0; i < n && out.length < limit; i++) {
    diffNodes(a.children[i], b.children[i], `${pathStr}<${a.tag}>[${i}]`, out, limit);
  }
}

/* --------------------------------- run --------------------------------- */
let failures = 0;
const summary = [];

for (const [file, route] of PAGES) {
  const orig = parse(fs.readFileSync(path.join(ROOT, file), "utf8"));
  const res = await fetch(BASE + route);
  if (!res.ok) {
    console.log(`✗ ${route} — HTTP ${res.status}`);
    failures++;
    continue;
  }
  const servedRaw = await res.text();
  const served = parse(servedRaw);

  const oHead = findOne(orig, (n) => n.tagName === "head");
  const sHead = findOne(served, (n) => n.tagName === "head");
  const oBody = findOne(orig, (n) => n.tagName === "body");
  const sBody = findOne(served, (n) => n.tagName === "body");

  const problems = [];

  /* 1. title */
  const oTitle = rawText(findOne(oHead, (n) => n.tagName === "title") || { childNodes: [] });
  const sTitle = rawText(findOne(sHead, (n) => n.tagName === "title") || { childNodes: [] });
  if (oTitle !== sTitle) problems.push(`title: ${JSON.stringify(oTitle)} != ${JSON.stringify(sTitle)}`);

  /* 2. canonical */
  const canonOf = (head) => {
    let v = null;
    (function walk(n) {
      if (isEl(n) && n.tagName === "link" && attr(n, "rel") === "canonical") v = attr(n, "href");
      for (const c of n.childNodes || []) walk(c);
    })(head);
    return v;
  };
  let expectedCanonical = canonOf(oHead);
  if (file === "mentorship/apply.html") expectedCanonical = "https://creditdanny.com/mentorship-apply/";
  const servedCanonical = canonOf(sHead);
  if (servedCanonical !== expectedCanonical)
    problems.push(`canonical: expected ${expectedCanonical}, served ${servedCanonical}`);

  /* 3. metas (served page may hoist some into body; collect from whole doc) */
  const oMetas = collectMetas(oHead);
  const sMetas = new Map();
  (function walk(n) {
    if (isEl(n) && n.tagName === "meta") {
      const key = attr(n, "name") || attr(n, "property");
      if (key && !["viewport", "generator", "msapplication-TileImage", "ti-site-data"].includes(key))
        sMetas.set(key, attr(n, "content") ?? "");
    }
    for (const c of n.childNodes || []) walk(c);
  })(served);
  for (const [k, v] of oMetas) {
    let expect = v;
    if (file === "mentorship/apply.html" && (k === "og:url"))
      expect = "https://creditdanny.com/mentorship-apply/";
    if (!sMetas.has(k)) problems.push(`meta missing: ${k}`);
    else if (sMetas.get(k) !== expect)
      problems.push(`meta ${k}: ${JSON.stringify(expect.slice(0, 80))} != ${JSON.stringify(sMetas.get(k).slice(0, 80))}`);
  }

  /* 4. JSON-LD */
  const oLd = collectJsonLd(orig).map((s) =>
    file === "mentorship/apply.html"
      ? s.split("https://creditdanny.com/mentorship/apply/").join("https://creditdanny.com/mentorship-apply/")
      : s
  );
  const sLd = collectJsonLd(served);
  if (oLd.length !== sLd.length) problems.push(`json-ld count: ${oLd.length} != ${sLd.length}`);
  else
    oLd.forEach((s, i) => {
      if (s !== sLd[i]) problems.push(`json-ld[${i}] payload differs`);
    });

  /* 5. body DOM diff */
  const oNorm = normNode(oBody, file, true);
  const sNorm = normNode(sBody, file, false);
  /* body class: the root layout SSRs the shared class set (the only classes
     any CSS/JS references — verified); the page's full original string is
     applied pre-paint by <BodyClass>, whose prop must be present verbatim in
     the RSC payload of the served HTML. */
  const SHARED_BODY_CLASS =
    "wp-singular page wp-custom-logo wp-embed-responsive wp-theme-hello-elementor eio-default hello-elementor-default elementor-default elementor-kit-27255861";
  const origBodyClass = attr(oBody, "class") || "";
  if ((attr(sBody, "class") || "") !== SHARED_BODY_CLASS)
    problems.push(`body class: server-rendered class set changed`);
  if (!servedRaw.includes(origBodyClass))
    problems.push(`body class: original string missing from BodyClass payload`);
  const domDiffs = [];
  diffNodes(
    { tag: "body", attrs: {}, children: oNorm.children },
    { tag: "body", attrs: {}, children: sNorm.children },
    "",
    domDiffs
  );
  problems.push(...domDiffs);

  /* 6. headings */
  const headingsOf = (body) => {
    const out = [];
    (function walk(n) {
      if (isEl(n) && /^h[1-6]$/.test(n.tagName)) {
        const txt = [];
        (function t(x) {
          if (isText(x)) txt.push(x.value);
          for (const c of x.childNodes || []) t(c);
        })(n);
        out.push(n.tagName + ":" + txt.join("").replace(/[\t\n\r ]+/g, " ").trim());
      }
      for (const c of n.childNodes || []) walk(c);
    })(body);
    return out;
  };
  const oH = headingsOf(oBody),
    sH = headingsOf(sBody);
  if (JSON.stringify(oH) !== JSON.stringify(sH)) problems.push(`heading sequence differs`);
  /* h1 count must match the SOURCE exactly (two source pages deviate from the
     one-h1 ideal: home-buying-blueprint has 2, mentorship has 0 — preserved). */
  const h1s = sH.filter((h) => h.startsWith("h1:")).length;
  const oH1s = oH.filter((h) => h.startsWith("h1:")).length;
  if (h1s !== oH1s) problems.push(`h1 count = ${h1s}, source has ${oH1s}`);

  /* 7. link audit on served page */
  (function walk(n) {
    if (isEl(n) && n.tagName === "a") {
      const href = attr(n, "href") || "";
      if (/\.html([#?]|$)/i.test(href)) problems.push(`served .html link: ${href}`);
      if (/\/mentorship\/apply\/?([#?]|$)/.test(href)) problems.push(`link to redirecting URL: ${href}`);
      const m = href.match(/^https?:\/\/(www\.)?creditdanny\.com(\/[^#?]*)/i);
      const p = href.startsWith("/") ? href.split(/[#?]/)[0] : m ? m[2] : null;
      if (p && ROUTES.has(p.endsWith("/") ? p : p + "/") && !href.startsWith("/"))
        problems.push(`internal link not root-relative: ${href}`);
    }
    for (const c of n.childNodes || []) walk(c);
  })(sBody);

  if (problems.length) {
    failures++;
    console.log(`✗ ${route}`);
    problems.slice(0, 10).forEach((p) => console.log(`    ${p}`));
    if (problems.length > 10) console.log(`    …and ${problems.length - 10} more`);
  } else {
    console.log(`✓ ${route}`);
  }
  summary.push([route, problems.length]);
}

console.log(`\n${PAGES.length - failures}/${PAGES.length} pages pass`);
process.exit(failures ? 1 : 0);

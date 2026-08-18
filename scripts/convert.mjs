/**
 * One-time migration converter: static HTML export -> Next.js App Router TSX.
 *
 * Guarantees:
 *  - Head SEO data (title/description/robots/canonical/OG/Twitter/JSON-LD)
 *    extracted verbatim into `export const metadata` + hoisted JSX meta tags.
 *  - Body markup converted node-for-node into JSX (same tags, same attribute
 *    values, same text). Text nodes are emitted as JSON string literals so
 *    whitespace/entities survive JSX exactly.
 *  - Internal *.html links -> clean trailing-slash URLs via <Link>.
 *  - Relative asset refs -> root-absolute /assets/... (files did not move).
 *  - Identical header/footer/nav subtrees across pages -> shared components.
 *
 * Run: npm run convert
 */
import { parse } from "parse5";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = path.resolve(import.meta.dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const write = (p, c) => {
  const abs = path.join(ROOT, p);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, c);
  console.log("wrote", p);
};

/* ---------------------------------------------------------------- pages */

const PAGES = [
  { file: "index.html", route: "/", group: "home", comp: "HomePage" },
  { file: "about.html", route: "/about/", group: "about", comp: "AboutPage" },
  { file: "accelerator.html", route: "/accelerator/", group: "accelerator", comp: "AcceleratorPage" },
  { file: "accelerator-application.html", route: "/accelerator-application/", group: "accelerator-application", comp: "AcceleratorApplicationPage" },
  { file: "blueprint.html", route: "/blueprint/", group: "blueprint", comp: "BlueprintPage" },
  { file: "blueprint-application.html", route: "/blueprint-application/", group: "blueprint-application", comp: "BlueprintApplicationPage" },
  { file: "blueprint-strategy.html", route: "/blueprint-strategy/", group: "blueprint-strategy", comp: "BlueprintStrategyPage" },
  { file: "consult-calendar.html", route: "/consult-calendar/", group: "consult-calendar", comp: "ConsultCalendarPage" },
  { file: "get-started.html", route: "/get-started/", group: "get-started", comp: "GetStartedPage" },
  { file: "home-buying-blueprint.html", route: "/home-buying-blueprint/", group: "home-buying-blueprint", comp: "HomeBuyingBlueprintPage" },
  { file: "mentorship.html", route: "/mentorship/", group: "mentorship", comp: "MentorshipPage" },
  // Lives at mentorship/apply.html locally but its live URL is the flat
  // /mentorship-apply/ (the /mentorship/apply/ shape 301s there in prod).
  // Its stale canonical/og:url are corrected to the resolving URL.
  { file: "mentorship/apply.html", route: "/mentorship-apply/", group: "mentorship-apply", comp: "MentorshipApplyPage", canonicalOverride: "https://creditdanny.com/mentorship-apply/" },
  { file: "plans.html", route: "/plans/", group: "plans", comp: "PlansPage" },
  { file: "privacy-policy.html", route: "/privacy-policy/", group: "privacy-policy", comp: "PrivacyPolicyPage" },
  { file: "sponsorship.html", route: "/sponsorship/", group: "sponsorship", comp: "SponsorshipPage" },
  { file: "sponsorship-apply.html", route: "/sponsorship-apply/", group: "sponsorship-apply", comp: "SponsorshipApplyPage" },
  { file: "team.html", route: "/team/", group: "team", comp: "TeamPage" },
  { file: "terms-and-conditions.html", route: "/terms-and-conditions/", group: "terms-and-conditions", comp: "TermsPage" },
  { file: "transformations.html", route: "/transformations/", group: "transformations", comp: "TransformationsPage" },
];

const FILE_TO_ROUTE = Object.fromEntries(PAGES.map((p) => [p.file, p.route]));
const ROUTES = new Set(PAGES.map((p) => p.route));

// per-page vanilla JS ported by hand into components/effects/<Comp>Effects.tsx
const PAGE_JS_TO_EFFECT = {
  "assets/js/pages/index.js": "HomeEffects",
  "assets/js/pages/about.js": "AboutEffects",
  "assets/js/pages/accelerator.js": "AcceleratorEffects",
  "assets/js/pages/blueprint.js": "BlueprintEffects",
  "assets/js/pages/mentorship.js": "MentorshipEffects",
  "assets/js/pages/sponsorship.js": "SponsorshipEffects",
  "assets/js/pages/transformations.js": "TransformationsEffects",
};

/* ------------------------------------------------------------ attr maps */

const HTML_ATTR_MAP = {
  class: "className", for: "htmlFor", tabindex: "tabIndex",
  readonly: "readOnly", maxlength: "maxLength", minlength: "minLength",
  autoplay: "autoPlay", playsinline: "playsInline",
  allowfullscreen: "allowFullScreen", frameborder: "frameBorder",
  crossorigin: "crossOrigin", referrerpolicy: "referrerPolicy",
  srcset: "srcSet", autocomplete: "autoComplete", spellcheck: "spellCheck",
  contenteditable: "contentEditable", rowspan: "rowSpan", colspan: "colSpan",
  usemap: "useMap", accesskey: "accessKey", enctype: "encType",
  novalidate: "noValidate", formnovalidate: "formNoValidate",
  srclang: "srcLang", srcdoc: "srcDoc", datetime: "dateTime",
  fetchpriority: "fetchPriority", allowtransparency: "allowTransparency",
  autofocus: "autoFocus", inputmode: "inputMode", enterkeyhint: "enterKeyHint",
  itemprop: "itemProp", itemscope: "itemScope", itemtype: "itemType",
  itemid: "itemID", itemref: "itemRef", controlslist: "controlsList",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback", formaction: "formAction",
  hreflang: "hrefLang", marginheight: "marginHeight", marginwidth: "marginWidth",
  nomodule: "noModule",
};

const BOOLEAN_ATTRS = new Set([
  "async", "defer", "autoplay", "muted", "loop", "controls", "playsinline",
  "open", "hidden", "disabled", "required", "multiple", "novalidate",
  "allowfullscreen", "itemscope", "checked", "selected", "default",
  "reversed", "ismap", "nomodule", "autofocus", "allowtransparency",
]);

const INLINE_TAGS = new Set([
  "a", "span", "em", "strong", "b", "i", "u", "s", "small", "sup", "sub",
  "code", "label", "img", "svg", "br", "button", "abbr", "cite", "q", "time",
  "mark", "wbr", "picture", "source", "input", "select", "textarea",
  "image-slot", "wistia-player", "iframe", "video",
]);

const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
]);

const RAW_TEXT_PARENTS = new Set(["pre", "textarea", "script", "style", "title"]);

function svgAttrToJsx(name) {
  if (name.startsWith("data-") || name.startsWith("aria-")) return name;
  if (name === "class") return "className";
  if (name === "tabindex") return "tabIndex";
  if (!name.includes("-") && !name.includes(":")) return name; // viewBox etc. already adjusted by parse5
  if (name === "xml:space") return "xmlSpace";
  if (name === "xml:lang") return "xmlLang";
  if (name === "xlink:href") return "xlinkHref";
  if (name === "xmlns:xlink") return "xmlnsXlink";
  return name.replace(/[-:]([a-z])/g, (_, c) => c.toUpperCase());
}

function cssPropToJsx(prop) {
  if (prop.startsWith("--")) return prop; // custom property: keep verbatim
  let p = prop;
  if (p.startsWith("-ms-")) p = "ms-" + p.slice(4);
  else if (p.startsWith("-")) p = p.slice(1).charAt(0).toUpperCase() === p.slice(1).charAt(0) ? p.slice(1) : p.slice(1, 2).toUpperCase() + p.slice(2);
  // vendor: -webkit-x -> Webkit-x handled above; now camelCase the rest
  return p.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function splitDecls(style) {
  const out = [];
  let cur = "", depth = 0, quote = null;
  for (const ch of style) {
    if (quote) { cur += ch; if (ch === quote) quote = null; continue; }
    if (ch === "'" || ch === '"') { quote = ch; cur += ch; continue; }
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

function styleToJsxObject(style) {
  const obj = {};
  for (const decl of splitDecls(style)) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const rawProp = decl.slice(0, i).trim();
    let value = decl.slice(i + 1).trim();
    if (!rawProp) continue;
    value = rewriteCssUrls(value);
    obj[cssPropToJsx(rawProp)] = value;
  }
  const entries = Object.entries(obj)
    .map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`)
    .join(", ");
  return `{ ${entries} }`;
}

/* ------------------------------------------------------- url rewriting */

function rewriteAssetUrl(u) {
  return u
    .replace(/^(\.\.\/)+assets\//, "/assets/")
    .replace(/^\.\/assets\//, "/assets/")
    .replace(/^assets\//, "/assets/")
    .replace(/^(\.\.\/)+wp-content\//, "/wp-content/")
    .replace(/^\.\/wp-content\//, "/wp-content/")
    .replace(/^wp-content\//, "/wp-content/")
    .replace(/^https:\/\/creditdanny\.com\/(assets|wp-content)\//, "/$1/");
}

function rewriteCssUrls(v) {
  return v.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, u) => {
    const r = rewriteAssetUrl(u);
    return `url(${q}${r}${q})`;
  });
}

function rewriteSrcset(v) {
  return v
    .split(",")
    .map((part) => {
      const t = part.trim();
      const sp = t.search(/\s/);
      const url = sp < 0 ? t : t.slice(0, sp);
      const desc = sp < 0 ? "" : t.slice(sp);
      return rewriteAssetUrl(url) + desc;
    })
    .join(", ");
}

/**
 * Map an href from a given source file to its new value.
 * Returns { href, isRoute } — isRoute means it targets one of our 19 routes
 * (rendered with <Link>); everything else stays a plain <a>.
 */
function mapHref(href, sourceFile) {
  if (!href) return { href, isRoute: false };
  if (/^(mailto:|tel:|javascript:|#)/i.test(href)) return { href, isRoute: false };

  let base = href, suffix = "";
  const m = href.match(/^([^#?]*)([#?].*)$/);
  if (m) { base = m[1]; suffix = m[2]; }

  // absolute internal
  const abs = base.match(/^https?:\/\/(www\.)?creditdanny\.com(\/[^\s]*)?$/i);
  if (abs) {
    let p = abs[2] || "/";
    if (!p.endsWith("/") && !/\.[a-z0-9]+$/i.test(p)) p += "/";
    if (p === "/mentorship/apply/") p = "/mentorship-apply/";
    if (ROUTES.has(p)) return { href: p + suffix, isRoute: true };
    if (/\.html$/i.test(p)) {
      const rel = p.replace(/^\//, "");
      if (FILE_TO_ROUTE[rel]) return { href: FILE_TO_ROUTE[rel] + suffix, isRoute: true };
    }
    return { href, isRoute: false }; // proxied WP URL (blog etc.) — verbatim
  }
  if (/^https?:\/\//i.test(base) || base.startsWith("//")) return { href, isRoute: false };

  // relative *.html -> route
  if (/\.html$/i.test(base)) {
    const dir = path.posix.dirname(sourceFile.replace(/\\/g, "/"));
    const resolved = path.posix
      .normalize(path.posix.join(dir === "." ? "" : dir, base))
      .replace(/^\.\//, "");
    if (FILE_TO_ROUTE[resolved]) return { href: FILE_TO_ROUTE[resolved] + suffix, isRoute: true };
    console.warn(`  !! unmapped .html link in ${sourceFile}: ${href}`);
    return { href, isRoute: false };
  }

  // relative asset
  const rewritten = rewriteAssetUrl(base);
  if (rewritten !== base) return { href: rewritten + suffix, isRoute: false };
  return { href, isRoute: false };
}

/* ----------------------------------------------------------- tree utils */

const isElement = (n) => !!n.tagName;
const isText = (n) => n.nodeName === "#text";
const getAttr = (el, name) => el.attrs?.find((a) => a.name === name)?.value;

function findOne(node, pred) {
  if (pred(node)) return node;
  for (const c of node.childNodes || []) {
    const r = findOne(c, pred);
    if (r) return r;
  }
  return null;
}

function rawText(el) {
  return (el.childNodes || []).map((c) => (isText(c) ? c.value : "")).join("");
}

/* -------------------------------------------------------- JSX emission */

const customElements = new Set();

function attrToJsx(attr, tag, inSvg, ctx) {
  let { name, value } = attr;
  const full = attr.prefix ? `${attr.prefix}:${name}` : name;

  if (full === "style") return `style={${styleToJsxObject(value)}}`;

  // URL-bearing attributes
  if (["src", "poster", "data-src", "data-poster", "href"].includes(full) && tag !== "a") {
    value = rewriteAssetUrl(value);
  }
  if (full === "srcset" || full === "data-srcset") value = rewriteSrcset(value);
  if (full.startsWith("data-") && /(\.\.\/)?(assets|wp-content)\//.test(value)) {
    value = rewriteAssetUrl(value);
  }

  let jsxName;
  if (full.startsWith("data-") || full.startsWith("aria-")) jsxName = full;
  else if (tag.includes("-")) jsxName = full; // custom elements: verbatim attributes
  else if (inSvg) jsxName = svgAttrToJsx(full);
  else jsxName = HTML_ATTR_MAP[full] || full;

  if (BOOLEAN_ATTRS.has(full) && !tag.includes("-")) {
    if (value === "" || value.toLowerCase() === full) return jsxName;
    // keep explicit value if it's something odd
  }
  // React types these as number-only
  const NUMERIC = ["tabIndex", "rowSpan", "colSpan", "maxLength", "minLength", "start", "size", "span", "cols", "rows"];
  if (NUMERIC.includes(jsxName) && /^-?\d+$/.test(value)) return `${jsxName}={${value}}`;
  const simple = /^[^"\\\n\r{}<>&]*$/.test(value) && !value.includes("'");
  return simple ? `${jsxName}="${value}"` : `${jsxName}={${JSON.stringify(value)}}`;
}

function textIsWs(t) {
  return /^[\s ]*$/.test(t) && !/ /.test(t); // nbsp is content, not ws
}

function emitNode(node, sourceFile, depth, inSvg, ctx, parentTag) {
  const pad = "  ".repeat(Math.min(depth, 20));

  if (isText(node)) {
    const t = node.value;
    if (RAW_TEXT_PARENTS.has(parentTag)) return `${pad}{${JSON.stringify(t)}}`;
    if (textIsWs(t)) {
      if (!t.includes("\n")) return `${pad}{" "}`;
      // newline whitespace: render-equivalent single space in inline context,
      // nothing between blocks
      return null; // caller decides using sibling info
    }
    return `${pad}{${JSON.stringify(t)}}`;
  }
  if (node.nodeName === "#comment") return "";
  if (!isElement(node)) return "";

  const tag = node.tagName;
  const svg = inSvg || tag === "svg";
  if (tag.includes("-")) customElements.add(tag);

  /* scripts.
     Executable third-party scripts go through next/script (afterInteractive):
     several of them mutate the live DOM (Meta Pixel insertBefore, Wistia
     style/custom-element setup, GHL form embeds, Trustindex widgets), and
     executing during parse raced React's whole-document hydration into
     intermittent #418 failures. afterInteractive runs them immediately after
     hydration — the documented Next pattern for analytics/embeds.
     Exceptions kept as raw SSR'd <script>:
       - JSON-LD (inert data),
       - tiny pre-paint JS-detection one-liners that only toggle a class on
         <html> (reveal CSS depends on them running before first paint;
         Shell's <html> carries suppressHydrationWarning for this). */
  if (tag === "script") {
    const src = getAttr(node, "src");
    if (src) {
      const norm = src.replace(/^(\.\.\/)+/, "").replace(/^\.\//, "");
      if (norm === "assets/js/main.js") return ""; // ported to Behaviors
      if (norm === "assets/js/lottie.min.js" || norm === "assets/js/lottie-data.js") {
        ctx.needsLottie = true;
        return ""; // loaded by the Lottie behavior component
      }
      if (PAGE_JS_TO_EFFECT[norm]) {
        ctx.effects.push(PAGE_JS_TO_EFFECT[norm]);
        return "";
      }
      /* Trustindex widget loaders are POSITION-ANCHORED (the widget renders
         where the script tag sits); they must not go through next/script,
         which would execute them from <head> and dump the widget at the top
         of the page. The generic ver=1 library (legal pages' head) has no
         widget id and stays on next/script. */
      if (/cdn\.trustindex\.io\/loader\.js\?(?!ver=)/.test(src)) {
        ctx.usesTrustindex = true;
        return `${pad}<TrustindexWidget src=${JSON.stringify(src)} />`;
      }
      ctx.usesNextScript = true;
      const attrs = node.attrs
        .filter((a) => !["async", "defer"].includes(a.name)) // managed by next/script
        .map((a) => attrToJsx(a, tag, false, ctx))
        .join(" ");
      return `${pad}<Script ${attrs}${attrs ? " " : ""}strategy="afterInteractive" />`;
    }
    const content = rawText(node);
    if (content.includes("sa-dynamic-optimization")) {
      // OTTO DOM-rewriter: injected post-hydration by <OttoSeo /> to avoid
      // racing React hydration (same script, same uuid).
      ctx.usesOtto = true;
      return "";
    }
    const type = getAttr(node, "type");
    const attrs = node.attrs.map((a) => attrToJsx(a, tag, false, ctx)).join(" ");
    if (type === "application/ld+json") {
      return `${pad}<script ${attrs} dangerouslySetInnerHTML={{ __html: ${JSON.stringify(content)} }} />`;
    }
    /* JS-detection class on <html> (bp-js/ca-js/sp-js/pl-js/hb-js). Raw
       page-tree scripts never execute on client navigation, so these become
       <HtmlClass> + the root-layout JsDetect script (see HtmlClass.tsx).
       The hb variant also carries reveal/sticky logic that is a verbatim
       duplicate of main.js simpleReveal('.hb-reveal')/stickyStrip('.hb-sticky')
       — already ported in Behaviors — so only its class survives. */
    const jsDetect =
      content.includes("documentElement") &&
      content.match(/(?:classList\.add\('([a-z]+-js)'\)|className\s*\+=\s*' ([a-z]+-js)')/);
    if (jsDetect) {
      ctx.htmlClass = jsDetect[1] || jsDetect[2];
      return "";
    }
    ctx.usesNextScript = true;
    const hash = crypto.createHash("md5").update(content).digest("hex").slice(0, 8);
    return `${pad}<Script id="cd-inline-${hash}" ${attrs}${attrs ? " " : ""}strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(content)} }} />`;
  }

  if (tag === "noscript") {
    // serialize children raw
    const inner = (node.childNodes || []).map(serializeRaw).join("");
    return `${pad}<noscript dangerouslySetInnerHTML={{ __html: ${JSON.stringify(inner)} }} />`;
  }

  /* anchors: internal page links become <Link> */
  let jsxTag = tag;
  let attrs = [...(node.attrs || [])];
  if (tag === "a") {
    const hrefAttr = attrs.find((a) => a.name === "href");
    if (hrefAttr) {
      const { href, isRoute } = mapHref(hrefAttr.value, sourceFile);
      hrefAttr.value = href;
      if (isRoute) { jsxTag = "Link"; ctx.usesLink = true; }
    }
  }

  const attrStr = attrs
    .map((a) => attrToJsx(a, tag, svg && tag !== "svg" ? true : svg, ctx))
    .filter(Boolean)
    .join(" ");
  const open = attrStr ? `<${jsxTag} ${attrStr}` : `<${jsxTag}`;

  const kids = node.childNodes || [];
  if (!kids.length || VOID_TAGS.has(tag)) return `${pad}${open} />`;

  const childLines = [];
  for (let i = 0; i < kids.length; i++) {
    const child = kids[i];
    let line = emitNode(child, sourceFile, depth + 1, svg, ctx, tag);
    if (line === null) {
      // whitespace-with-newline text node: keep a space if an inline element
      // is adjacent (HTML collapses runs of whitespace to one space)
      const prev = kids[i - 1], next = kids[i + 1];
      const inlineAdj = [prev, next].some(
        (s) => s && isElement(s) && INLINE_TAGS.has(s.tagName)
      );
      const textAdj = [prev, next].some((s) => s && isText(s) && !textIsWs(s.value));
      line = inlineAdj || textAdj ? `${"  ".repeat(Math.min(depth + 1, 20))}{" "}` : "";
    }
    if (line) childLines.push(line);
  }
  if (!childLines.length) return `${pad}${open} />`;
  return `${pad}${open}>\n${childLines.join("\n")}\n${pad}</${jsxTag}>`;
}

// raw serializer for noscript innerHTML
function serializeRaw(node) {
  if (isText(node)) return node.value;
  if (node.nodeName === "#comment") return `<!--${node.data}-->`;
  if (!isElement(node)) return "";
  const attrs = (node.attrs || [])
    .map((a) => ` ${a.prefix ? a.prefix + ":" : ""}${a.name}="${a.value.replace(/"/g, "&quot;")}"`)
    .join("");
  const open = `<${node.tagName}${attrs}>`;
  if (VOID_TAGS.has(node.tagName)) return open;
  return `${open}${(node.childNodes || []).map(serializeRaw).join("")}</${node.tagName}>`;
}

/* ------------------------------------------------- shared block hashing */

function stableSerialize(node) {
  if (isText(node)) return JSON.stringify(node.value);
  if (node.nodeName === "#comment") return "";
  if (!isElement(node)) return "";
  const attrs = (node.attrs || [])
    .map((a) => `${a.prefix || ""}:${a.name}=${a.value}`)
    .sort()
    .join("|");
  return `<${node.tagName} ${attrs}>${(node.childNodes || [])
    .map(stableSerialize)
    .join("")}</${node.tagName}>`;
}

/* --------------------------------------------------------- head parsing */

function parseHead(headEl, page) {
  const meta = {
    title: null, description: null, robots: null, canonical: null,
    themeColor: null, og: {}, ogImages: [], twitter: {}, article: {},
    icons: [], apple: [], rawHead: [], headScripts: [], jsonLd: [],
    pageCss: null, usesLegacyElementor: false,
  };
  const GA_HOST = "googletagmanager.com";
  const CLICKY = "getclicky.com";

  for (const node of headEl.childNodes || []) {
    if (!isElement(node)) continue;
    const tag = node.tagName;

    if (tag === "title") { meta.title = rawText(node); continue; }

    if (tag === "meta") {
      const name = getAttr(node, "name");
      const prop = getAttr(node, "property");
      const content = getAttr(node, "content") ?? "";
      if (getAttr(node, "charset") !== undefined) continue; // Next emits
      if (name === "viewport") {
        if (content !== "width=device-width, initial-scale=1")
          console.warn(`  !! nonstandard viewport on ${page.file}: ${content}`);
        continue; // Next default matches
      }
      if (name === "description") { meta.description = content; continue; }
      if (name === "robots") { meta.robots = content; continue; }
      if (name === "theme-color") { meta.themeColor = content; continue; }
      if (name === "generator") continue;
      if (prop && prop.startsWith("og:image")) {
        if (prop === "og:image") meta.ogImages.push({ url: content });
        else {
          const img = meta.ogImages[meta.ogImages.length - 1];
          if (img) {
            const key = prop.replace("og:image:", "");
            const map = { secure_url: "secureUrl", width: "width", height: "height", alt: "alt", type: "type" };
            if (map[key]) img[map[key]] = /^(width|height)$/.test(key) ? Number(content) : content;
            else meta.rawHead.push({ property: prop, content });
          }
        }
        continue;
      }
      if (prop && prop.startsWith("og:")) {
        const key = prop.slice(3);
        const known = { locale: "locale", type: "type", title: "title", description: "description", url: "url", site_name: "siteName" };
        if (known[key]) meta.og[known[key]] = content;
        else meta.rawHead.push({ property: prop, content }); // og:updated_time etc.
        continue;
      }
      if (prop && prop.startsWith("article:")) {
        meta.article[prop] = content;
        continue;
      }
      if (name && name.startsWith("twitter:")) {
        const key = name.slice(8);
        const known = { card: "card", title: "title", description: "description", image: "image" };
        if (known[key]) meta.twitter[known[key]] = content;
        else meta.rawHead.push({ name, content }); // twitter:label1/data1
        continue;
      }
      // ti-site-data and anything else: verbatim
      meta.rawHead.push(name ? { name, content } : { property: prop, content });
      continue;
    }

    if (tag === "link") {
      const rel = getAttr(node, "rel");
      const href = getAttr(node, "href") || "";
      if (rel === "canonical") { meta.canonical = href; continue; }
      if (rel === "stylesheet") {
        const norm = href.replace(/^(\.\.\/)+/, "").replace(/^\.\//, "");
        if (norm.endsWith("google-fonts.css") || norm.endsWith("/style.css")) continue; // Shell
        if (norm.endsWith("legacy-elementor.css")) { meta.usesLegacyElementor = true; continue; }
        const m = norm.match(/assets\/css\/pages\/([a-z0-9-]+)\.css$/);
        if (m) { meta.pageCss = m[1]; continue; }
        console.warn(`  !! unexpected stylesheet in ${page.file}: ${href}`);
        continue;
      }
      if (rel === "icon") { meta.icons.push({ url: rewriteAssetUrl(href), sizes: getAttr(node, "sizes") }); continue; }
      if (rel === "apple-touch-icon") { meta.apple.push({ url: rewriteAssetUrl(href) }); continue; }
      if (rel === "profile" || rel === "pingback" || rel === "EditURI") continue; // WP plumbing, dropped
      console.warn(`  !! unhandled head link rel=${rel} in ${page.file}`);
      continue;
    }

    if (tag === "script") {
      const src = getAttr(node, "src");
      const type = getAttr(node, "type");
      if (type === "application/ld+json") {
        meta.jsonLd.push({ className: getAttr(node, "class"), body: rawText(node) });
        continue;
      }
      if (src && (src.includes(GA_HOST) || src.includes(CLICKY))) continue; // AnalyticsScripts
      const body = src ? null : rawText(node);
      if (body && (body.includes("dataLayer") || body.includes("clicky_site_ids") || body.includes("fbq("))) continue; // AnalyticsScripts
      meta.headScripts.push(node);
      continue;
    }

    if (tag === "style") console.warn(`  !! head <style> in ${page.file} — not ported`);
  }
  return meta;
}

/* -------------------------------------------------- metadata TS emission */

function metadataLiteral(meta, page) {
  const canonical = page.canonicalOverride || meta.canonical;
  const og = { ...meta.og };
  if (page.canonicalOverride && og.url) og.url = page.canonicalOverride;

  const o = {};
  if (meta.title != null) o.title = meta.title;
  if (meta.description != null) o.description = meta.description;
  if (meta.robots != null) o.robots = meta.robots;
  if (canonical) o.alternates = { canonical };

  const ogOut = {};
  for (const k of ["locale", "type", "title", "description", "url", "siteName"])
    if (og[k] != null) ogOut[k] = og[k];
  if (meta.ogImages.length) ogOut.images = meta.ogImages;
  if (og.type === "article") {
    if (meta.article["article:published_time"]) ogOut.publishedTime = meta.article["article:published_time"];
    if (meta.article["article:modified_time"]) ogOut.modifiedTime = meta.article["article:modified_time"];
  }
  if (Object.keys(ogOut).length) o.openGraph = ogOut;

  const tw = {};
  for (const k of ["card", "title", "description"]) if (meta.twitter[k] != null) tw[k] = meta.twitter[k];
  if (meta.twitter.image) tw.images = [meta.twitter.image];
  if (Object.keys(tw).length) o.twitter = tw;

  if (meta.icons.length || meta.apple.length) {
    o.icons = {};
    if (meta.icons.length) o.icons.icon = meta.icons.map((i) => (i.sizes ? { url: i.url, sizes: i.sizes } : { url: i.url }));
    if (meta.apple.length) o.icons.apple = meta.apple;
  }
  return JSON.stringify(o, null, 2);
}

function rawHeadJsx(meta, page) {
  const lines = [];
  // article:* tags that couldn't be typed (og:type !== article)
  if (meta.og.type !== "article") {
    for (const [prop, content] of Object.entries(meta.article))
      lines.push(`      <meta property=${JSON.stringify(prop)} content=${JSON.stringify(content)} />`);
  }
  for (const t of meta.rawHead) {
    const key = t.name ? `name=${JSON.stringify(t.name)}` : `property=${JSON.stringify(t.property)}`;
    lines.push(`      <meta ${key} content=${JSON.stringify(t.content)} />`);
  }
  return lines;
}

/* ---------------------------------------------------------------- main */

const sharedCandidates = new Map(); // hash -> {node, pages:[], name}
const pageData = [];
const jsDetectMap = {}; // route -> html js-detect class (bp-js, ca-js, ...)

for (const page of PAGES) {
  console.log("parsing", page.file);
  const html = read(page.file);
  const doc = parse(html);
  const htmlEl = findOne(doc, (n) => n.tagName === "html");
  const headEl = findOne(htmlEl, (n) => n.tagName === "head");
  const bodyEl = findOne(htmlEl, (n) => n.tagName === "body");

  const meta = parseHead(headEl, page);
  const bodyClass = getAttr(bodyEl, "class") || "";
  const extraBodyAttrs = (bodyEl.attrs || []).filter((a) => a.name !== "class");
  if (extraBodyAttrs.length)
    console.warn(`  !! extra body attrs on ${page.file}:`, extraBodyAttrs.map((a) => a.name).join(","));

  // fix stale canonical inside ti-site-data? left verbatim (analytics only)

  // shared-block candidates: header/footer/nav elements & known topbar ids
  const candidates = [];
  (function scan(node, depth) {
    if (!isElement(node)) return;
    const id = getAttr(node, "id");
    const isCand =
      ["header", "footer", "nav"].includes(node.tagName) ||
      ["top", "mv-topbar", "cd-topbar", "hb-top"].includes(id);
    if (isCand) { candidates.push(node); return; } // top-most only
    for (const c of node.childNodes || []) scan(c, depth + 1);
  })(bodyEl, 0);

  for (const cand of candidates) {
    const hash = crypto.createHash("md5").update(stableSerialize(cand)).digest("hex");
    if (!sharedCandidates.has(hash)) sharedCandidates.set(hash, { node: cand, pages: [], sourceFile: page.file });
    sharedCandidates.get(hash).pages.push(page.file);
    cand.__hash = hash;
  }

  pageData.push({ page, meta, bodyClass, bodyEl, html });
}

/* name shared blocks that appear on 2+ pages */
const sharedByHash = new Map();
const usedNames = new Set();
for (const [hash, info] of sharedCandidates) {
  if (info.pages.length < 2) continue;
  const el = info.node;
  const id = getAttr(el, "id");
  const cls = (getAttr(el, "class") || "").split(/\s+/)[0] || "";
  let base =
    (id ? `${el.tagName}-${id}` : cls ? `${el.tagName}-${cls}` : el.tagName)
      .replace(/[^a-z0-9]+/gi, " ")
      .trim()
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("");
  let name = `Shared${base}`;
  let i = 2;
  while (usedNames.has(name)) name = `Shared${base}${i++}`;
  usedNames.add(name);
  sharedByHash.set(hash, { name, node: el, sourceFile: info.sourceFile, pages: info.pages });
}

/* emit shared components */
for (const { name, node, sourceFile } of sharedByHash.values()) {
  const ctx = { usesLink: false, effects: [], needsLottie: false };
  const jsx = emitNode(node, sourceFile, 2, false, ctx, "body");
  const importLines = [];
  if (ctx.usesLink) importLines.push(`import Link from "next/link";`);
  if (ctx.usesNextScript) importLines.push(`import Script from "next/script";`);
  if (ctx.usesTrustindex) importLines.push(`import TrustindexWidget from "@/components/TrustindexWidget";`);
  const imports = importLines.length ? importLines.join("\n") + "\n\n" : "";
  write(
    `components/shared/${name}.tsx`,
    `${imports}export default function ${name}() {\n  return (\n${jsx}\n  );\n}\n`
  );
}

/* emit pages */
const groupBodyClass = {};
for (const { page, meta, bodyClass, bodyEl } of pageData) {
  const ctx = { usesLink: false, effects: [], needsLottie: false, videoMuted: false };
  const usedShared = new Set();

  const lines = [];
  for (let i = 0; i < (bodyEl.childNodes || []).length; i++) {
    const child = bodyEl.childNodes[i];
    if (isElement(child) && child.__hash && sharedByHash.has(child.__hash)) {
      const { name } = sharedByHash.get(child.__hash);
      usedShared.add(name);
      lines.push(`      <${name} />`);
      continue;
    }
    // nested shared candidates (not direct body children)
    const replaced = replaceSharedDeep(child, page.file, ctx, usedShared, 3);
    if (replaced) lines.push(replaced);
  }

  const headExtra = rawHeadJsx(meta, page);
  const headScriptLines = meta.headScripts.map((n) => emitNode(n, page.file, 3, false, ctx, "head"));
  /* mentorship-apply: the source page's canonical points at a URL that 301s;
     JSON-LD @id/url/breadcrumb entries are updated to the resolving URL,
     matching the corrected canonical/og:url. */
  if (page.canonicalOverride && meta.canonical && meta.canonical !== page.canonicalOverride) {
    for (const j of meta.jsonLd) j.body = j.body.split(meta.canonical).join(page.canonicalOverride);
  }
  const jsonLdLines = meta.jsonLd.map(
    (j) =>
      `      <script type="application/ld+json"${j.className ? ` className=${JSON.stringify(j.className)}` : ""} dangerouslySetInnerHTML={{ __html: ${JSON.stringify(j.body)} }} />`
  );

  const importLines = [`import type { Metadata } from "next";`];
  importLines.push(`import BodyClass from "@/components/BodyClass";`);
  if (ctx.usesLink) importLines.push(`import Link from "next/link";`);
  if (ctx.usesNextScript) importLines.push(`import Script from "next/script";`);
  if (meta.pageCss) importLines.push(`import "@/public/assets/css/pages/${meta.pageCss}.css";`);
  /* legacy-elementor.css contains export-mangled selectors (unbalanced
     parens) that Lightning CSS refuses to parse but browsers error-recover
     through. It is served byte-identical via a plain <link> so every browser
     applies exactly what it applies on the current static site. */
  for (const s of usedShared) importLines.push(`import ${s} from "@/components/shared/${s}";`);
  const effects = [...new Set(ctx.effects)];
  for (const e of effects) importLines.push(`import ${e} from "@/components/effects/${e}";`);
  if (ctx.needsLottie) importLines.push(`import LottiePlayers from "@/components/behaviors/LottiePlayers";`);
  if (ctx.usesOtto) importLines.push(`import OttoSeo from "@/components/OttoSeo";`);
  if (ctx.usesTrustindex) importLines.push(`import TrustindexWidget from "@/components/TrustindexWidget";`);
  if (ctx.htmlClass) importLines.push(`import HtmlClass from "@/components/HtmlClass";`);

  const viewportLine = meta.themeColor
    ? `\nexport const viewport = {\n  themeColor: ${JSON.stringify(meta.themeColor)},\n};\n`
    : "";

  const body = [
    `      <BodyClass className=${JSON.stringify(bodyClass)} />`,
    ...(ctx.htmlClass ? [`      <HtmlClass className=${JSON.stringify(ctx.htmlClass)} />`] : []),
    ...(meta.usesLegacyElementor
      ? [`      <link rel="stylesheet" href="/assets/css/legacy-elementor.css" />`]
      : []),
    ...headExtra,
    ...jsonLdLines,
    ...headScriptLines,
    ...lines,
    ...effects.map((e) => `      <${e} />`),
    ...(ctx.needsLottie ? [`      <LottiePlayers />`] : []),
    ...(ctx.usesOtto ? [`      <OttoSeo />`] : []),
  ].join("\n");

  const src = `${importLines.join("\n")}

export const metadata: Metadata = ${metadataLiteral(meta, page)};
${viewportLine}
export default function ${page.comp}() {
  return (
    <>
${body}
    </>
  );
}
`;
  /* Flat routes under a single root layout: separate root layouts would force
     a full page load on every navigation; the per-page body class is handled
     by <BodyClass> instead. */
  const routeDir = page.route === "/" ? "app" : `app${page.route.slice(0, -1)}`;
  write(`${routeDir}/page.tsx`, src);
  groupBodyClass[page.group] = bodyClass;
  if (ctx.htmlClass) jsDetectMap[page.route] = ctx.htmlClass;
}

/* Root-layout JS-detection script: adds the page's -js class to <html>
   DURING PARSE on initial loads (pre-paint — the sticky-bar/reveal CSS
   depends on it), and because the root layout is never re-rendered on client
   navigation, React never client-renders this script tag (no dev error).
   Client navigations are handled by each page's <HtmlClass>. */
write(
  "components/JsDetect.tsx",
  `/* GENERATED by scripts/convert.mjs — do not edit by hand. */
const MAP: Record<string, string> = ${JSON.stringify(jsDetectMap, null, 2)};

const CODE =
  "(function(){var m=" +
  JSON.stringify(MAP) +
  ";var p=location.pathname.toLowerCase();if(p.charAt(p.length-1)!=='/')p+='/';var c=m[p];if(c&&('IntersectionObserver' in window))document.documentElement.classList.add(c);})();";

export default function JsDetect() {
  return <script dangerouslySetInnerHTML={{ __html: CODE }} />;
}
`
);

write(
  "app/layout.tsx",
  `import Shell from "@/components/Shell";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}
`
);

function replaceSharedDeep(node, sourceFile, ctx, usedShared, depth) {
  if (isElement(node) && node.__hash && sharedByHash.has(node.__hash)) {
    const { name } = sharedByHash.get(node.__hash);
    usedShared.add(name);
    return `${"  ".repeat(Math.min(depth, 20))}<${name} />`;
  }
  if (isElement(node) && node.childNodes?.some((c) => hasSharedDeep(c))) {
    // rebuild element with children replaced
    const tag = node.tagName;
    const attrStr = (node.attrs || [])
      .map((a) => attrToJsx(a, tag, tag === "svg", ctx))
      .filter(Boolean)
      .join(" ");
    const pad = "  ".repeat(Math.min(depth, 20));
    const open = attrStr ? `<${tag} ${attrStr}` : `<${tag}`;
    const kidLines = [];
    for (const c of node.childNodes || []) {
      const r = replaceSharedDeep(c, sourceFile, ctx, usedShared, depth + 1);
      if (r) kidLines.push(r);
    }
    return `${pad}${open}>\n${kidLines.join("\n")}\n${pad}</${tag}>`;
  }
  const out = emitNode(node, sourceFile, depth, false, ctx, "body");
  return out === null ? "" : out;
}
function hasSharedDeep(node) {
  if (isElement(node) && node.__hash && sharedByHash.has(node.__hash)) return true;
  return (node.childNodes || []).some(hasSharedDeep);
}

/* custom element TS declarations */
write(
  "types/custom-elements.d.ts",
  `import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
${[...customElements]
  .sort()
  .map(
    (t) =>
      `      "${t}": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, unknown>;`
  )
  .join("\n")}
    }
  }
}
`
);

console.log("\nShared components:", [...sharedByHash.values()].map((s) => `${s.name} (${s.pages.length} pages)`).join(", ") || "none");
console.log("Custom elements:", [...customElements].join(", "));
console.log("done");

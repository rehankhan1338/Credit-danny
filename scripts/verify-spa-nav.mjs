/**
 * Client-side navigation test: proves link clicks do NOT reload the page.
 *
 * Loads the home page in headless Chrome, plants window.__navMarker, then
 * clicks real internal links. After each click:
 *   - window.__navMarker must survive (a full reload would wipe it)
 *   - location.pathname and document.title must be the new page's
 *   - the new page's body class (applied by BodyClass) must be present
 *
 * Usage: node scripts/verify-spa-nav.mjs [baseUrl]
 */
import { spawn } from "node:child_process";

const BASE = process.argv[2] || "http://localhost:3100";
const CHROME =
  process.env.CHROME || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9226;

// [link href, title fragment, body class fragment, html class expected, html classes that must be GONE]
const HOPS = [
  ["/about/", "About Credit Danny", "cd-about", null, []],
  ["/blueprint/", "Blueprint", "cd-blueprint", "bp-js", []],
  ["/plans/", "Our Plans", "cd-plans", "pl-js", ["bp-js"]],
  ["/team/", "Meet the Team", "cd-team", null, ["pl-js"]],
  ["/", "Credit Restoration Experts", "cd-home", null, []],
];

const chrome = spawn(CHROME, [
  `--remote-debugging-port=${PORT}`,
  "--headless=new", "--disable-gpu", "--no-first-run",
  "--user-data-dir=" + process.env.TEMP + "\\cd-spa-profile",
  "about:blank",
]);
chrome.on("error", (e) => { console.error("chrome failed:", e.message); process.exit(2); });
await new Promise((r) => setTimeout(r, 2500));

const res = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" });
const tab = await res.json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((a, b) => { ws.onopen = a; ws.onerror = b; });

let id = 0;
const pending = new Map();
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
};
const send = (method, params = {}) =>
  new Promise((resolve) => { const i = ++id; pending.set(i, resolve); ws.send(JSON.stringify({ id: i, method, params })); });
const evaluate = async (expr) => {
  const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true });
  return r?.result?.value;
};

await send("Page.enable");
await send("Runtime.enable");
await send("Page.navigate", { url: BASE + "/" });
await new Promise((r) => setTimeout(r, 5000)); // load + hydrate
await evaluate("window.__navMarker = 'alive'");

/* the reviews-at-top regression: no Trustindex widget may render outside its
   in-page anchor, and nothing widget-like may precede the page content */
async function checkNoTopWidget() {
  return evaluate(`(() => {
    const stray = document.querySelector("body > [class*='ti-'], body > [id*='trustindex']");
    return stray ? stray.outerHTML.slice(0, 120) : null;
  })()`);
}

let failures = 0;
for (const [href, titleFrag, bodyFrag, htmlClass, goneClasses] of HOPS) {
  const clicked = await evaluate(`(() => {
    const links = Array.from(document.querySelectorAll('a[href="${href}"]'));
    const a = links.find((x) => !x.closest("[data-menu-panel]")) || links[0];
    if (!a) return false;
    a.click();
    return true;
  })()`);
  await new Promise((r) => setTimeout(r, 3000)); // client transition + BodyClass
  const state = await evaluate(`({
    marker: window.__navMarker,
    path: location.pathname,
    title: document.title,
    bodyClass: document.body.className,
    htmlClass: document.documentElement.className,
  })`);
  const problems = [];
  if (!clicked) problems.push("link not found on page");
  else {
    if (state.marker !== "alive") problems.push("FULL RELOAD detected (marker lost)");
    if (state.path !== href) problems.push(`landed on ${state.path}`);
    if (!state.title.includes(titleFrag)) problems.push(`title: ${JSON.stringify(state.title)}`);
    if (!state.bodyClass.includes(bodyFrag)) problems.push(`body class not applied: ${state.bodyClass.slice(0, 60)}`);
    if (htmlClass && !state.htmlClass.includes(htmlClass))
      problems.push(`html class ${htmlClass} missing (got: ${state.htmlClass || "(none)"})`);
    for (const gone of goneClasses)
      if (state.htmlClass.includes(gone)) problems.push(`stale html class leaked: ${gone}`);
    const stray = await checkNoTopWidget();
    if (stray) problems.push(`Trustindex widget outside its anchor: ${stray}`);
  }
  if (problems.length) { failures++; console.log(`✗ click → ${href}: ${problems.join("; ")}`); }
  else console.log(`✓ click → ${href} — client-side, no reload, title + body class updated`);
}

chrome.kill();
console.log(failures ? `\n${failures} FAILURES` : "\nSPA navigation verified: no page reloads");
process.exit(failures ? 1 : 0);

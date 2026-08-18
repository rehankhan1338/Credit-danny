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

// [link href to click, expected title fragment, expected body class fragment]
const HOPS = [
  ["/about/", "About Credit Danny", "cd-about"],
  ["/plans/", "Our Plans", "cd-plans"],
  ["/team/", "Meet the Team", "cd-team"],
  ["/", "Credit Restoration Experts", "cd-home"],
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

let failures = 0;
for (const [href, titleFrag, bodyFrag] of HOPS) {
  const clicked = await evaluate(`(() => {
    const a = Array.from(document.querySelectorAll('a[href="${href}"]')).find(x => x.offsetParent !== null || true);
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
  })`);
  const problems = [];
  if (!clicked) problems.push("link not found on page");
  else {
    if (state.marker !== "alive") problems.push("FULL RELOAD detected (marker lost)");
    if (state.path !== href) problems.push(`landed on ${state.path}`);
    if (!state.title.includes(titleFrag)) problems.push(`title: ${JSON.stringify(state.title)}`);
    if (!state.bodyClass.includes(bodyFrag)) problems.push(`body class not applied: ${state.bodyClass.slice(0, 60)}`);
  }
  if (problems.length) { failures++; console.log(`✗ click → ${href}: ${problems.join("; ")}`); }
  else console.log(`✓ click → ${href} — client-side, no reload, title + body class updated`);
}

chrome.kill();
console.log(failures ? `\n${failures} FAILURES` : "\nSPA navigation verified: no page reloads");
process.exit(failures ? 1 : 0);

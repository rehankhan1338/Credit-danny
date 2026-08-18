/**
 * Browser console sweep: loads every route in headless Chrome via CDP and
 * reports console errors/warnings and uncaught exceptions (hydration
 * mismatches surface here as React errors #418/#423/#425 or
 * "Hydration failed" messages).
 *
 * Usage: node scripts/verify-console.mjs [baseUrl]
 * Requires Chrome at the default Windows install path or CHROME env var.
 */
import { spawn } from "node:child_process";

const BASE = process.argv[2] || "http://localhost:3100";
const CHROME =
  process.env.CHROME || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9223;

const ROUTES = [
  "/", "/about/", "/accelerator/", "/accelerator-application/", "/blueprint/",
  "/blueprint-application/", "/blueprint-strategy/", "/consult-calendar/",
  "/get-started/", "/home-buying-blueprint/", "/mentorship/", "/mentorship-apply/",
  "/plans/", "/privacy-policy/", "/sponsorship/", "/sponsorship-apply/",
  "/team/", "/terms-and-conditions/", "/transformations/",
];

/* Third-party noise we don't own (ad blockers off, but remote scripts may
   still warn); everything is reported, only these are non-fatal. */
const THIRD_PARTY = /(wistia|getclicky|googletagmanager|facebook|fbevents|trustindex|msgsndr|link\.creditdanny|searchatlas|leadconnectorhq)/i;

const chrome = spawn(CHROME, [
  `--remote-debugging-port=${PORT}`,
  "--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
  "--user-data-dir=" + process.env.TEMP + "\\cd-cdp-profile",
  "about:blank",
]);
chrome.on("error", (e) => {
  console.error("chrome failed to start:", e.message);
  process.exit(2);
});
await new Promise((r) => setTimeout(r, 2500));

async function cdp(pathname) {
  const res = await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent("about:blank")}`, { method: "PUT" });
  const tab = await res.json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((res2, rej) => { ws.onopen = res2; ws.onerror = rej; });

  let id = 0;
  const send = (method, params = {}) => ws.send(JSON.stringify({ id: ++id, method, params }));
  const messages = [];
  ws.onmessage = (ev) => {
    const m = JSON.parse(ev.data);
    if (m.method === "Runtime.consoleAPICalled" && ["error", "warning"].includes(m.params.type)) {
      const text = m.params.args.map((a) => a.value ?? a.description ?? "").join(" ");
      messages.push({ kind: m.params.type, text });
    }
    if (m.method === "Runtime.exceptionThrown") {
      const d = m.params.exceptionDetails;
      messages.push({ kind: "exception", text: d.exception?.description || d.text, url: d.url });
    }
    if (m.method === "Log.entryAdded" && ["error", "warning"].includes(m.params.entry.level)) {
      messages.push({ kind: m.params.entry.level, text: m.params.entry.text, url: m.params.entry.url });
    }
  };
  send("Runtime.enable");
  send("Log.enable");
  send("Page.enable");
  send("Page.navigate", { url: BASE + pathname });
  await new Promise((r) => setTimeout(r, 6000)); // load + hydrate + first effects
  ws.close();
  await fetch(`http://127.0.0.1:${PORT}/json/close/${tab.id}`);
  return messages;
}

let failures = 0;
for (const route of ROUTES) {
  try {
    const msgs = await cdp(route);
    const own = msgs.filter(
      (m) =>
        !THIRD_PARTY.test((m.text || "") + (m.url || "")) &&
        // benign Chrome advisory triggered by Next's route prefetching:
        // resources are preloaded for the NEXT navigation, not this paint
        !/was preloaded using link preload but not used/i.test(m.text || "")
    );
    const hydration = msgs.filter((m) => /hydrat|minified react error #(418|423|425)/i.test(m.text || ""));
    if (own.length || hydration.length) {
      failures++;
      console.log(`✗ ${route}`);
      [...new Set([...own, ...hydration].map((m) => `    [${m.kind}] ${(m.text || "").slice(0, 200)}`))].slice(0, 6).forEach((l) => console.log(l));
    } else {
      console.log(`✓ ${route}${msgs.length ? `  (${msgs.length} third-party notice${msgs.length > 1 ? "s" : ""})` : ""}`);
    }
  } catch (e) {
    failures++;
    console.log(`✗ ${route} — CDP error: ${e.message}`);
  }
}

chrome.kill();
console.log(failures ? `\n${failures} pages with console problems` : "\nall pages console-clean");
process.exit(failures ? 1 : 0);

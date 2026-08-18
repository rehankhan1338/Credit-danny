/**
 * Redirect matrix verification against a running server.
 * Asserts: every legacy URL shape reaches a 200 in EXACTLY ONE permanent
 * redirect hop (308/301 — never 302/307), and final URLs serve 200 directly.
 *
 * Usage: node scripts/verify-redirects.mjs [baseUrl]
 */
const BASE = process.argv[2] || "http://localhost:3100";

const CASES = [
  // [path, expected final path, expected hops]
  ["/index.html", "/", 1],
  ["/about.html", "/about/", 1],
  ["/accelerator.html", "/accelerator/", 1],
  ["/accelerator-application.html", "/accelerator-application/", 1],
  ["/blueprint.html", "/blueprint/", 1],
  ["/blueprint-application.html", "/blueprint-application/", 1],
  ["/blueprint-strategy.html", "/blueprint-strategy/", 1],
  ["/consult-calendar.html", "/consult-calendar/", 1],
  ["/get-started.html", "/get-started/", 1],
  ["/home-buying-blueprint.html", "/home-buying-blueprint/", 1],
  ["/mentorship.html", "/mentorship/", 1],
  ["/mentorship/apply.html", "/mentorship-apply/", 1],
  ["/mentorship/index.html", "/mentorship/", 1],
  ["/plans.html", "/plans/", 1],
  ["/privacy-policy.html", "/privacy-policy/", 1],
  ["/sponsorship.html", "/sponsorship/", 1],
  ["/sponsorship-apply.html", "/sponsorship-apply/", 1],
  ["/team.html", "/team/", 1],
  ["/terms-and-conditions.html", "/terms-and-conditions/", 1],
  ["/transformations.html", "/transformations/", 1],
  // live legacy redirect preserved
  ["/mentorship/apply/", "/mentorship-apply/", 1],
  // double-variant (renamed page AND missing slash): the built-in
  // trailing-slash 308 fires before custom redirects, so this is 2 hops —
  // same as live production (nginx slash redirect + WP redirect).
  ["/mentorship/apply", "/mentorship-apply/", 2],
  // trailing-slash normalization (Next built-in)
  ["/about", "/about/", 1],
  ["/team", "/team/", 1],
  // case variants (live nginx serves these at 200; we canonicalize with one hop)
  ["/TEAM/", "/team/", 1],
  ["/About/", "/about/", 1],
  // double-variant (wrong case AND missing slash): built-in slash 308 first,
  // then the lowercasing proxy — 2 hops, same as live's slash+case handling.
  ["/ABOUT", "/about/", 2],
  ["/About.html", "/about/", 1],
  ["/MENTORSHIP/APPLY/", "/mentorship-apply/", 1],
  // direct 200s — zero hops
  ["/", "/", 0],
  ["/about/", "/about/", 0],
  ["/mentorship-apply/", "/mentorship-apply/", 0],
];

let failures = 0;
for (const [start, expectedFinal, expectedHops] of CASES) {
  let url = BASE + start;
  let hops = 0;
  let ok = true;
  let note = "";
  for (let i = 0; i < 5; i++) {
    const res = await fetch(url, { redirect: "manual" });
    if (res.status === 200) {
      const finalPath = new URL(url).pathname;
      if (finalPath !== expectedFinal) {
        ok = false;
        note = `landed on ${finalPath}, expected ${expectedFinal}`;
      } else if (hops !== expectedHops) {
        ok = false;
        note = `${hops} hops, expected ${expectedHops}`;
      }
      break;
    } else if (res.status === 301 || res.status === 308) {
      hops++;
      const loc = res.headers.get("location");
      url = new URL(loc, url).href;
    } else if (res.status === 302 || res.status === 307) {
      ok = false;
      note = `TEMPORARY redirect ${res.status} at ${url}`;
      break;
    } else {
      ok = false;
      note = `HTTP ${res.status} at ${url}`;
      break;
    }
    if (i === 4) {
      ok = false;
      note = "redirect loop";
    }
  }
  if (!ok) failures++;
  console.log(`${ok ? "✓" : "✗"} ${start.padEnd(28)} → ${expectedFinal.padEnd(26)} ${note}`);
}

/* infra endpoints */
for (const [p, expect] of [
  ["/robots.txt", 200],
  ["/page-sitemap.xml", 200],
]) {
  const res = await fetch(BASE + p, { redirect: "manual" });
  const ok = res.status === expect;
  if (!ok) failures++;
  console.log(`${ok ? "✓" : "✗"} ${p} → ${res.status}`);
}

console.log(failures ? `\n${failures} FAILURES` : "\nall redirect cases pass");
process.exit(failures ? 1 : 0);

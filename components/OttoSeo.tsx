"use client";

import { useEffect } from "react";

/**
 * SearchAtlas / OTTO dynamic-optimization embed — the exact script the
 * original site injected inline on every page (same src, uuid, id and
 * attributes). Injected AFTER hydration instead of during parse: OTTO
 * rewrites the DOM, and doing that mid-hydration made React throw
 * intermittent mismatch errors (#418). The script itself loads async over
 * the network either way, so its effective start time is unchanged.
 */
export default function OttoSeo() {
  useEffect(() => {
    if (document.getElementById("sa-dynamic-optimization")) return;
    const script = document.createElement("script");
    script.setAttribute("nowprocket", "");
    script.setAttribute("nitro-exclude", "");
    script.src = "https://seo-tools.leadconnectorhq.com/scripts/dynamic_optimization.js";
    script.dataset.uuid = "58cbacf0-317a-4dc6-8c30-0cb3b4922b96";
    script.id = "sa-dynamic-optimization";
    document.head.appendChild(script);
  }, []);

  return null;
}

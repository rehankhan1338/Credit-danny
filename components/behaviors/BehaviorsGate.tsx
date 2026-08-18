"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Behaviors from "./Behaviors";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Remounts the site-wide behaviour suite on every client-side navigation.
 * The behaviours scan the DOM for their hooks when they mount (exactly like
 * main.js did on DOMContentLoaded); with SPA navigation the page content is
 * replaced without a load event, so keying by pathname re-runs that scan
 * against the new page.
 *
 * Also fires the Meta Pixel PageView on route changes — GA4 (enhanced
 * measurement) and Clicky track history changes themselves, fbq does not.
 */
export default function BehaviorsGate() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false; // initial PageView already sent by the inline snippet
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return <Behaviors key={pathname} />;
}

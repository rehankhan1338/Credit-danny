"use client";

import { useEffect, useRef } from "react";

/**
 * Trustindex Google-reviews widget. The loader script is a POSITION-ANCHORED
 * embed: it renders its widget wherever its own <script> tag sits in the DOM.
 * Routed through next/script it executed from <head>, which dumped the review
 * grid at the very top of every page (and, being outside React's tree, it
 * survived client-side navigations).
 *
 * This component re-creates the original embed exactly where the script tag
 * sat in the source markup: a layout-neutral (display:contents) host that
 * injects the same script on mount — so the loader's document.currentScript
 * anchor resolves to the original position — and removes the widget on
 * unmount so it never leaks onto other pages.
 */
export default function TrustindexWidget({ src }: { src: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    s.async = true;
    el.appendChild(s);
    return () => {
      el.innerHTML = "";
    };
  }, [src]);

  return <div ref={host} data-ti-anchor="" style={{ display: "contents" }} />;
}

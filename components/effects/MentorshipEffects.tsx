"use client";

import { useEffect } from "react";

/**
 * Port of assets/js/pages/mentorship.js — a sweep-based cascade over
 * [data-screen-label] sections (a sweep, not an IntersectionObserver, so
 * content the viewport jumps over can never get stranded).
 */
export default function MentorshipEffects() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-screen-label]"));
    if (!sections.length) return;

    /* Grids cascade by their own items; everything else by section content block. */
    const GRIDS = ".mv-stat4,.mv-stat5,.mv-grid4,.mv-included,.mv-bullets,.mv-grid2,.mv-narrative,.mv-bento";

    function blocksFor(section: HTMLElement): HTMLElement[] {
      /* Unwrap single-child wrappers to reach the real content container. */
      let el: HTMLElement = section;
      while (el.children.length === 1 && (el.firstElementChild as HTMLElement).children.length)
        el = el.firstElementChild as HTMLElement;
      const out = Array.from(el.children) as HTMLElement[];
      /* Swap any grid for its items so cards cascade one by one. */
      let expanded: HTMLElement[] = [];
      out.forEach((node) => {
        const grid: HTMLElement | null =
          node.matches && node.matches(GRIDS) ? node : node.querySelector?.(GRIDS) ?? null;
        if (grid && grid.children.length > 1)
          expanded = expanded.concat(Array.from(grid.children) as HTMLElement[]);
        else expanded.push(node);
      });
      return expanded.filter((n) => {
        /* Skip decorative absolutely-positioned art and zero-size nodes. */
        const cs = getComputedStyle(n);
        if (cs.position === "absolute" || cs.position === "fixed") return false;
        return n.getBoundingClientRect().height > 0;
      });
    }

    let pending: HTMLElement[] = [];
    sections.forEach((section, si) => {
      /* The hero is above the fold; animating it would delay the headline. */
      if (si === 0) return;
      blocksFor(section).forEach((node, i) => {
        node.classList.add("cd-r");
        node.style.setProperty("--rd", String(Math.min(i, 8))); /* cap stagger */
        pending.push(node);
      });
    });

    function sweep() {
      const limit = window.innerHeight * 0.92;
      const still: HTMLElement[] = [];
      for (const n of pending) {
        if (n.getBoundingClientRect().top < limit) n.classList.add("is-in");
        else still.push(n);
      }
      pending = still;
      if (!pending.length) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        sweep();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    sweep(); /* reveal whatever is already in view */

    /* Last-resort guard: invisible content is worse than a missed animation. */
    const t = window.setTimeout(() => {
      pending.forEach((n) => n.classList.add("is-in"));
    }, 8000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  return null;
}

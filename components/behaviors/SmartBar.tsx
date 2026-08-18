"use client";

import { useEffect, useRef } from "react";

/**
 * Retracting sticky header (main.js module 2). Fully visible at the top of
 * the page; retracts on scroll down, returns on scroll up, with a 6px
 * deadband against trackpad flicker. Applied to whichever bar the page has:
 * #top (most pages), #mv-topbar (mentorship), #cd-topbar (mentorship-apply).
 */
export default function SmartBar({ barId }: { barId: string }) {
  const last = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const bar = document.getElementById(barId);
    if (!bar) return;
    const BASE = "0 4px 18px rgba(0,0,0,.45)";
    const DEEP = "0 10px 28px rgba(0,0,0,.55)";
    last.current = window.scrollY;

    function update() {
      const y = window.scrollY;
      const h = bar!.offsetHeight;
      if (y <= 80) {
        bar!.style.transform = "translateY(0)";
        bar!.style.boxShadow = BASE;
      } else {
        if (y > last.current + 6) bar!.style.transform = `translateY(-${h + 2}px)`;
        else if (y < last.current - 6) bar!.style.transform = "translateY(0)";
        bar!.style.boxShadow = DEEP;
      }
      last.current = y;
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    }

    /* An open menu must not leave the bar retracted behind it. */
    function onClick(e: MouseEvent) {
      const t = e.target as Element | null;
      if (t?.closest && t.closest("[data-menu-open]")) bar!.style.transform = "translateY(0)";
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [barId]);

  return null;
}

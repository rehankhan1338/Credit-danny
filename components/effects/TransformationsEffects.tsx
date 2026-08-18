"use client";

import { useEffect } from "react";
import { prefersReduce } from "@/components/behaviors/reduce";

type RevealEl = HTMLElement & { __delay?: number };

/**
 * Port of assets/js/pages/transformations.js — the transient reveal: the
 * runtime marks elements, shows them on intersection and clears the marker
 * afterwards, backed by the same sweep as the About page.
 */
export default function TransformationsEffects() {
  useEffect(() => {
    const reduce = prefersReduce();
    const SEL = 'h1,h2,h3,p,img,image-slot,a,li,div[style*="border-radius"]';
    let marked: RevealEl[] = [];
    if (!reduce && "IntersectionObserver" in window) {
      document.querySelectorAll("section").forEach((sec) => {
        const picked: RevealEl[] = [];
        sec.querySelectorAll<RevealEl>(SEL).forEach((el) => {
          if (el.closest("[data-reveal]")) return;
          if (el.getBoundingClientRect().height === 0) return;
          el.setAttribute("data-reveal", "");
          picked.push(el);
        });
        picked.forEach((el, i) => {
          el.__delay = Math.min(i * 55, 420);
        });
        marked = marked.concat(picked);
      });
      marked.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(22px)";
        el.style.willChange = "opacity, transform";
      });
      /* HIDDEN NOW, TRANSITION LATER: one forced reflow settles the hidden
         state for the whole page (see original notes). */
      void document.body.offsetHeight;
      marked.forEach((el) => {
        el.style.transition =
          `opacity .62s cubic-bezier(.22,.61,.36,1) ${el.__delay}ms,` +
          `transform .72s cubic-bezier(.22,.61,.36,1) ${el.__delay}ms`;
      });
    }
    const pending = new Set(marked);
    const show = (el: RevealEl) => {
      if (!pending.has(el)) return;
      pending.delete(el);
      el.style.opacity = "1";
      el.style.transform = "none";
      io.unobserve(el);
      setTimeout(() => {
        el.style.opacity = "";
        el.style.transform = "";
        el.style.transition = "";
        el.style.willChange = "";
        el.removeAttribute("data-reveal");
      }, 1600);
    };
    let io: Pick<IntersectionObserver, "unobserve" | "observe" | "disconnect"> = {
      unobserve() {},
      observe() {},
      disconnect() {},
    };
    const cleanups: Array<() => void> = [];
    if (marked.length) {
      io = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) show(e.target as RevealEl);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.02 }
      );
      marked.forEach((el) => io.observe(el));

      /* The sweep (see original notes). */
      let ticking = false;
      const sweep = () => {
        ticking = false;
        if (!pending.size) return;
        const h = window.innerHeight,
          doc = document.scrollingElement!;
        if (doc.scrollHeight - h - window.scrollY <= 4) Array.from(pending).forEach(show);
        Array.from(pending).forEach((el) => {
          if (el.getBoundingClientRect().top < h) show(el);
        });
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(sweep);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      let ticks = 0;
      const t = window.setInterval(() => {
        sweep();
        if (!pending.size || ++ticks > 150) window.clearInterval(t);
      }, 200);
      sweep();
      cleanups.push(() => {
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        window.clearInterval(t);
      });
    }
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

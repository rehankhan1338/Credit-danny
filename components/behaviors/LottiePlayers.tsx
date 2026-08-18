"use client";

import { useEffect } from "react";
import { prefersReduce } from "./reduce";

/**
 * [data-lottie] animation boxes (main.js module 6). lottie-web and the
 * inline animation data are the same local files the original loaded
 * (deferred); this component injects them and then runs the original init.
 * Only mounted on pages that loaded assets/js/lottie.min.js.
 */
const LOTTIE_ALWAYS_LOOP = false;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export default function LottiePlayers() {
  useEffect(() => {
    const boxes = Array.from(document.querySelectorAll<HTMLElement>("[data-lottie]"));
    if (!boxes.length) return;
    const reduce = prefersReduce();
    let cancelled = false;

    function start() {
      if (cancelled) return;
      boxes.forEach((el) => {
        if (el.dataset.lottieStarted) return;
        el.dataset.lottieStarted = "1";

        /* Reduced motion: play once, do not loop (see original notes).
           data-lottie-motion="always" opts a specific animation back in. */
        const force = LOTTIE_ALWAYS_LOOP || el.getAttribute("data-lottie-motion") === "always";
        const calm = reduce && !force;

        const fit = el.getAttribute("data-lottie-fit") || "meet";
        const src = el.getAttribute("data-lottie") || "";

        /* Prefer inline data over a fetch (see original notes on file:// and
           IIS .json MIME failures). */
        const key = src.split("/").pop() || "";
        const inline = window.CD_LOTTIE && window.CD_LOTTIE[key];

        const opts: Record<string, unknown> = {
          container: el,
          renderer: "svg",
          loop: !calm,
          autoplay: true,
          rendererSettings: { preserveAspectRatio: "xMidYMid " + fit },
        };
        if (inline) opts.animationData = inline;
        else opts.path = src.startsWith("assets/") ? "/" + src : src;

        const anim = window.lottie!.loadAnimation(opts);
        anim.addEventListener("data_failed", () => {
          console.error("[lottie] could not load", el.getAttribute("data-lottie"));
        });
        (el as HTMLElement & { __lottie?: unknown }).__lottie = anim;
      });
    }

    Promise.all([
      loadScript("/assets/js/lottie.min.js"),
      loadScript("/assets/js/lottie-data.js").catch(() => undefined), // optional, path: fallback covers it
    ])
      .then(() => {
        if (window.lottie) {
          start();
          return;
        }
        let n = 0;
        const t = window.setInterval(() => {
          if (window.lottie) {
            start();
            window.clearInterval(t);
          } else if (++n > 60) window.clearInterval(t);
        }, 100);
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

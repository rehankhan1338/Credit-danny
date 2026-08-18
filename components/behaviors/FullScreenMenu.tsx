"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Full-screen overlay nav (main.js module 3). Openers are [data-menu-open],
 * closers are [data-menu-close]; any link inside the panel closes it, as does
 * a backdrop click or Esc. The open state is mirrored onto <html> as
 * .cd-menu-open because the stylesheet keys off that class.
 */
export default function FullScreenMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("cd-menu-open", open);
  }, [open]);

  const onClick = useCallback((e: MouseEvent) => {
    const target = e.target as Element | null;
    if (!target?.closest) return;
    const panel = document.querySelector("[data-menu-panel]");
    if (!panel) return;

    const opener = target.closest("[data-menu-open]");
    if (opener) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    const closer = target.closest("[data-menu-close]");
    if (closer) {
      e.preventDefault();
      setOpen(false);
      return;
    }
    /* Any link INSIDE the panel closes it: the nav is mostly same-page
       anchors, so without this the panel stays over the section it just
       jumped to. Clicking the backdrop (the panel itself) also closes. */
    if (panel.contains(target)) {
      if (target.closest("a,button")) setOpen(false);
      else if (target === panel) setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!document.querySelector("[data-menu-panel]")) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClick]);

  return null;
}

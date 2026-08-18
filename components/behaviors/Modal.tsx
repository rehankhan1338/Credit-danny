"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Accessible dialog manager (main.js module 5, the Elementor popup
 * replacement). Opened by [data-open-modal="<id>"]; closed by
 * [data-modal-close], a backdrop click (the [data-modal] element itself,
 * never its inner panel), or Esc. Focus moves into the dialog on open and
 * returns to the opener on close; .cd-modal-open on <html> is the scroll
 * lock the stylesheet keys off.
 */
export default function Modal() {
  const [openId, setOpenId] = useState<string | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  /* apply/unapply DOM state whenever openId changes */
  useEffect(() => {
    const dialogs = Array.from(document.querySelectorAll<HTMLElement>("[data-modal]"));
    for (const dlg of dialogs) {
      const isOpen = openId !== null && dlg.getAttribute("data-modal") === openId;
      if (isOpen && dlg.hidden) {
        dlg.hidden = false;
        dlg.classList.add("is-open");
        const focusable = dlg.querySelector<HTMLElement>(
          "button,[href],input,select,textarea,iframe,[tabindex]"
        );
        if (focusable) focusable.focus();
      } else if (!isOpen && !dlg.hidden) {
        dlg.classList.remove("is-open");
        dlg.hidden = true;
      }
    }
    document.documentElement.classList.toggle("cd-modal-open", openId !== null);
    if (openId === null && lastFocus.current?.focus) lastFocus.current.focus();
  }, [openId]);

  useEffect(() => {
    if (!document.querySelector("[data-modal]")) return;

    function onClick(e: MouseEvent) {
      const t = e.target as Element | null;
      if (!t?.closest) return;
      const opener = t.closest("[data-open-modal]");
      if (opener) {
        e.preventDefault();
        lastFocus.current = document.activeElement as HTMLElement | null;
        setOpenId(opener.getAttribute("data-open-modal"));
        return;
      }
      const closer = t.closest("[data-modal-close]");
      if (closer) {
        e.preventDefault();
        setOpenId(null);
        return;
      }
      const dlg = t.closest("[data-modal]");
      if (dlg && e.target === dlg) setOpenId(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Esc") setOpenId(null);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}

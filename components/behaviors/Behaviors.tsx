"use client";

import { useEffect } from "react";
import { exposeReduce } from "./reduce";
import SmartBar from "./SmartBar";
import FullScreenMenu from "./FullScreenMenu";
import SmoothScroll from "./SmoothScroll";
import Modal from "./Modal";
import PannedSlots from "./PannedSlots";
import PlayMarks from "./PlayMarks";
import Counters from "./Counters";
import StickyStrip from "./StickyStrip";
import Reveal from "./Reveal";
import HeroSound from "./HeroSound";

/**
 * The site-wide behaviour suite — the React port of assets/js/main.js init().
 * Every module is a no-op when its markup is absent, so the same set mounts
 * on every page, exactly like the original file was loaded everywhere.
 * (LottiePlayers is the exception: it is mounted per-page by the pages that
 * originally loaded lottie.min.js.)
 */
export default function Behaviors() {
  /* window.CD.reduce for the per-page reveal cascades. */
  useEffect(() => {
    exposeReduce();
  }, []);

  return (
    <>
      <SmartBar barId="top" />
      <SmartBar barId="mv-topbar" />
      <SmartBar barId="cd-topbar" />
      <FullScreenMenu />
      <SmoothScroll />
      <Modal />
      <PannedSlots />
      <PlayMarks />
      <Counters />
      <HeroSound />
      <StickyStrip stripSel=".ca-sticky" startSel="#top" endSel=".ca-endcta" onClass="ca-on" />
      <StickyStrip stripSel=".sp-sticky" startSel="#top" endSel=".sp-endcta" onClass="sp-on" />
      <StickyStrip stripSel=".bp-sticky" startSel="#top" endSel=".bp-endcta" onClass="bp-on" />
      <StickyStrip stripSel=".hb-sticky" startSel="#hb-top" endSel="#apply" onClass="hb-on" />
      <Reveal sel=".pl-reveal" inClass="pl-in" rootMargin="0px 0px -12% 0px" threshold={0.08} />
      <Reveal sel=".hb-reveal" inClass="hb-in" rootMargin="0px 0px -8% 0px" threshold={0.05} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "@/public/assets/css/pages/home-buying-blueprint.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop2 from "@/components/shared/SharedHeaderTop2";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import OttoSeo from "@/components/OttoSeo";

export const metadata: Metadata = {
  "title": "The 90 Day Home Buying Blueprint | Credit Danny",
  "description": "A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/home-buying-blueprint/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "The 90 Day Home Buying Blueprint | Credit Danny",
    "description": "A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.",
    "url": "https://creditdanny.com/home-buying-blueprint/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "90 Day Home Buying Blueprint",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T18:01:04-07:00",
    "modifiedTime": "2026-08-12T18:03:06-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The 90 Day Home Buying Blueprint | Credit Danny",
    "description": "A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.",
    "images": [
      "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/img/heartfavicon-150x150.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/img/heartfavicon-300x300.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/img/heartfavicon-300x300.png"
      }
    ]
  }
};

export const viewport = {
  themeColor: "#000000",
};

export default function HomeBuyingBlueprintPage() {
  return (
    <>
      <meta property="og:updated_time" content="2026-08-12T18:03:06-07:00" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRmhvbWUtYnV5aW5nLWJsdWVwcmludCUyRiZhbXA7X3dwbm9uY2U9YmY4MjUxMzk0YiJ9" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/home-buying-blueprint/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/\",\"name\":\"90 Day Home Buying Blueprint\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/home-buying-blueprint/#webpage\",\"url\":\"https://creditdanny.com/home-buying-blueprint/\",\"name\":\"The 90 Day Home Buying Blueprint | Credit Danny\",\"datePublished\":\"2026-08-12T18:01:04-07:00\",\"dateModified\":\"2026-08-12T18:03:06-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"The 90 Day Home Buying Blueprint | Credit Danny\",\"datePublished\":\"2026-08-12T18:01:04-07:00\",\"dateModified\":\"2026-08-12T18:03:06-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"A structured 90-day system that takes you from denied to approved: a full credit file audit, a custom approval strategy, aggressive disputes, and lender positioning.\",\"name\":\"The 90 Day Home Buying Blueprint | Credit Danny\",\"@id\":\"https://creditdanny.com/home-buying-blueprint/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/home-buying-blueprint/#webpage\"}}]}" }} />
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/nxpt9nkef1.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/owpki24dog.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/crjkm2g3jr.js" type="module" strategy="afterInteractive" />
      <div id="menu" style={{ "position": "fixed", "inset": "0", "zIndex": "200", "background": "linear-gradient(180deg,#000 0%,#06243f 45%,#0b3a63 100%)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "flex-start", "padding": "38px 40px 46px", "overflowY": "auto", "animation": "cd-menu-iris .62s cubic-bezier(.76,0,.24,1) both" }} data-menu-panel="">
        <button type="button" aria-label="Close menu" style={{ "position": "absolute", "top": "32px", "right": "40px", "width": "52px", "height": "52px", "borderRadius": "10px", "background": "transparent", "border": "2px solid #0C70C3", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0", "transition": "background .2s ease,border-color .2s ease", "animation": "cd-menu-close .5s cubic-bezier(.34,1.56,.64,1) .34s both" }} className="cdm-h0">
          {" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
          {" "}
        </button>
        <Link href="/" aria-label="Credit Danny home">
          <img src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "width": "min(760px,72vw)", "height": "auto", "display": "block", "margin": "14px 0 54px", "animation": "cd-menu-mark .6s cubic-bezier(.22,1,.36,1) .16s both" }} />
        </Link>
        <SharedNavCdmNav />
        <div style={{ "display": "flex", "alignItems": "center", "gap": "34px", "marginTop": "54px", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) .92s both" }}>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/creditdanny" aria-label="Instagram" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.18a4.66 4.66 0 1 0 0 9.32 4.66 4.66 0 0 0 0-9.32Zm0 7.69a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06Zm5.93-7.87a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0Z" />
            </svg>
          </a>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://tiktok.com/@creditdanny" aria-label="TikTok" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.1-2.55V9.6a5.7 5.7 0 1 0 5.1 5.67V8.6a6.5 6.5 0 0 0 3.9 1.3V6.8a3.6 3.6 0 0 1-3.9-3.6V2Z" />
            </svg>
          </a>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/creditdanny" aria-label="X" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.3 3h3.1l-6.8 7.77L21.6 21h-6.2l-4.86-6.36L4.9 21H1.8l7.26-8.3L1.6 3h6.36l4.4 5.82L17.3 3Zm-1.09 16.1h1.72L7.3 4.8H5.46l10.75 14.3Z" />
            </svg>
          </a>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/creditdanny" aria-label="Facebook" style={{ "display": "inline-flex", "color": "#fff", "transition": "color .18s ease", "cursor": "pointer" }} className="cdm-h1">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
          {" "}
        </div>
      </div>
      <SharedHeaderTop2 />
      <div id="dc-root">
        <div className="sc-host" data-sc-name="source">
          <div style={{ "background": "rgb(5, 6, 8)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-body)", "overflowX": "hidden" }}>
            <section id="hb-mobile-top" style={{ "width": "100%", "position": "relative", "overflow": "hidden", "background": "#000000", "backgroundImage": "radial-gradient(ellipse 150% 90% at 50% 100%,#0C70C3 0%,#0b62ab 10%,#09508c 19%,#08406e 28%,#062846 38%,#03192a 50%,#010a12 64%,#000000 80%)", "fontFamily": "var(--font-body)" }}>
              <div style={{ "position": "absolute", "top": "0", "left": "0", "right": "0", "height": "400px", "backgroundImage": "url(/assets/img/Gemini_Generated_Image_souwresouwresouw.jpg)", "backgroundSize": "cover", "backgroundPosition": "72% center", "WebkitMaskImage": "linear-gradient(180deg,#000 0%,rgba(0,0,0,.85) 42%,rgba(0,0,0,.35) 72%,transparent 100%)", "maskImage": "linear-gradient(180deg,#000 0%,rgba(0,0,0,.85) 42%,rgba(0,0,0,.35) 72%,transparent 100%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "top": "0", "left": "0", "right": "0", "height": "400px", "background": "linear-gradient(180deg,rgba(3,10,20,.55) 0%,rgba(3,10,20,.2) 40%,rgba(5,6,8,.5) 100%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120,190,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(120,190,255,.05) 1px,transparent 1px),linear-gradient(rgba(120,190,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(120,190,255,.09) 1px,transparent 1px)", "backgroundSize": "20px 20px,20px 20px,100px 100px,100px 100px", "mixBlendMode": "screen" }} />
              <div style={{ "position": "relative", "padding": "210px 24px 0", "textAlign": "center", "animation": "cdRise .7s cubic-bezier(.4,0,.2,1) both" }}>
                <div className="hb-eyebrow" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "7px 14px", "border": "1px solid #ffffff", "borderRadius": "999px", "background": "rgba(25,25,25,.4)", "backdropFilter": "blur(24px)", "WebkitBackdropFilter": "blur(24px)", "marginBottom": "20px" }}>
                  {" "}
                  <span style={{ "width": "6px", "height": "6px", "flexShrink": "0", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "0 0 4px 1px rgba(0,173,238,.4),0 0 9px 2px rgba(0,173,238,.18)", "animation": "cdPulse 2.2s cubic-bezier(.4,0,.2,1) infinite" }} />
                  {" "}
                  <span style={{ "fontSize": "9px", "fontWeight": "700", "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"A Step-By-Step Path To Approval"}
                  </span>
                  {" "}
                </div>
                <h1 style={{ "margin": "0", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "lineHeight": ".86", "letterSpacing": "-.01em", "fontSize": "52px", "color": "#ffffff" }}>
                  {"\n      The 90 Day"}
                  <br />
                  <span style={{ "color": "var(--color-blue-600)" }}>
                    {"Home Buying"}
                    <br />
                    {"Blueprint"}
                  </span>
                  {" "}
                </h1>
                <p style={{ "margin": "20px 0 0", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "18px", "lineHeight": "1.16", "color": "#ffffff" }}>
                  {"Fix your credit, get approved, and move into your home with a proven step-by-step system"}
                  <br />
                  {"built for real results."}
                </p>
                <p style={{ "margin": "16px 0 0", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255,255,255,.82)", "textWrap": "pretty" }}>
                  {"You don’t need years to change your situation. With the right strategy, guidance, and execution, you can go from denied to approved in as little as 90 days."}
                </p>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "12px", "margin": "30px 0 40px" }}>
                  {" "}
                  <Link href="/blueprint-application/" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "18px", "letterSpacing": ".04em", "textTransform": "uppercase", "color": "#fff", "background": "#0b71c3", "border": "1px solid #ffffff", "padding": "15px 32px", "borderRadius": "14px", "display": "inline-flex", "boxShadow": "0 8px 28px rgba(11,113,195,.55),0 2px 10px rgba(11,113,195,.45)", "transition": "background 200ms cubic-bezier(.4,0,.2,1),color 200ms cubic-bezier(.4,0,.2,1),transform 200ms cubic-bezier(.4,0,.2,1)" }} style-hover="background:#ffffff;color:var(--color-blue-600);transform:translateY(-3px)">
                    {"Get Started Today"}
                  </Link>
                  {" "}
                  <span style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "rgba(255,255,255,.45)" }}>
                    {"No obligation. 100% confidential."}
                  </span>
                  {" "}
                </div>
              </div>
              <div style={{ "position": "relative", "borderTop": "1px solid rgba(255,255,255,.1)", "background": "rgba(0,0,0,.32)", "backdropFilter": "blur(8px)", "display": "grid", "gridTemplateColumns": "repeat(2,1fr)" }}>
                <div style={{ "padding": "24px 14px", "borderRight": "1px solid rgba(255,255,255,.1)", "borderBottom": "1px solid rgba(255,255,255,.1)", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3.2" y="4.6" width="17.6" height="16.2" rx="2.4" />
                      <path d="M3.2 9.4h17.6" />
                      <path d="M8 2.8v3.4" />
                      <path d="M16 2.8v3.4" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"90 Days"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Structured Timeline"}
                  </div>
                </div>
                <div style={{ "padding": "24px 14px", "borderBottom": "1px solid rgba(255,255,255,.1)", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8.8" />
                      <path d="M12 7.2V12l3.2 2" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"24 Hours"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Pre-Approval Turnaround"}
                  </div>
                </div>
                <div style={{ "padding": "24px 14px", "borderRight": "1px solid rgba(255,255,255,.1)", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.4 10.6 12 3.6l8.6 7" />
                      <path d="M5.6 12.4V20h12.8v-7.6" />
                      <path d="M10 20v-4.6h4V20" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"In-House"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Senior Loan Officer"}
                  </div>
                </div>
                <div style={{ "padding": "24px 14px", "textAlign": "center" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px" }}>
                    {" "}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3.4" />
                      <path d="M2.8 19c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6" />
                      <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.4" />
                      <path d="M18 13.9c2.1.7 3.6 2.5 3.6 5.1" />
                    </svg>
                    {" "}
                    <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "34px", "lineHeight": "1", "color": "#fff" }}>
                      {"10,000+"}
                    </div>
                  </div>
                  <div style={{ "marginTop": "6px", "fontSize": "10px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#ffffff" }}>
                    {"Clients Helped Nationwide"}
                  </div>
                </div>
              </div>
            </section>
            <section id="hb-top" style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)" }}>
              <div style={{ "position": "absolute", "top": "0px", "right": "0px", "bottom": "0px", "width": "74%", "backgroundImage": "url(/assets/img/Gemini_Generated_Image_souwresouwresouw.jpg)", "backgroundSize": "cover", "backgroundPosition": "right center", "maskImage": "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.35) 18%, rgb(0, 0, 0) 46%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "background": "linear-gradient(rgba(3, 10, 20, 0.35) 0%, rgba(3, 10, 20, 0) 22%, rgba(3, 10, 20, 0) 62%, rgba(5, 6, 8, 0.75) 100%)", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px", "mixBlendMode": "screen" }} />
              <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "64px 40px 0px", "display": "grid", "gridTemplateColumns": "1.05fr 0.95fr", "gap": "56px", "alignItems": "center" }}>
                <div style={{ "textAlign": "center", "paddingBottom": "120px", "animation": "0.7s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal both running cdRise" }}>
                  <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px", "border": "1px solid rgb(255, 255, 255)", "borderRadius": "999px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "marginBottom": "24px" }} className="hb-eyebrow">
                    {" "}
                    <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "rgba(0, 173, 238, 0.75) 0px 0px 6px 2px, rgba(0, 173, 238, 0.4) 0px 0px 14px 4px", "animation": "2.2s cubic-bezier(0.4, 0, 0.2, 1) 0s infinite normal none running cdPulse" }} />
                    {" "}
                    <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.28em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"A Step-By-Step Path To Mortgage Approval"}
                    </span>
                    {" "}
                  </div>
                  <h1 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "lineHeight": "0.86", "letterSpacing": "-0.01em", "fontSize": "clamp(52px, 6.4vw, 92px)", "color": "rgb(255, 255, 255)" }}>
                    {"\n        The 90 Day"}
                    <br />
                    <span style={{ "color": "var(--color-blue-600)" }}>
                      {"Home Buying"}
                      <br />
                      {"Blueprint"}
                    </span>
                    {" "}
                  </h1>
                  <p style={{ "margin": "28px auto 0px", "maxWidth": "100%", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "24px", "lineHeight": "1.14", "color": "rgb(255, 255, 255)" }}>
                    {"Fix your credit, get approved, and move into your home with a proven step-by-step system built for real results."}
                  </p>
                  <p style={{ "margin": "20px auto 0px", "maxWidth": "100%", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                    {"You don’t need years to change your situation. With the right strategy, guidance, and execution, you can go from denied to approved"}
                    <br />
                    {"in as little as 90 days."}
                  </p>
                  <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "marginTop": "38px" }}>
                    {" "}
                    <Link href="/blueprint-application/" className="scp0 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "18px 39px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                      {"Get Started Today"}
                    </Link>
                    {" "}
                    <span style={{ "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.45)" }}>
                      {"No obligation. 100% confidential."}
                    </span>
                    {" "}
                  </div>
                </div>
              </div>
              <div style={{ "position": "relative", "borderTop": "1px solid rgba(255, 255, 255, 0.1)", "background": "rgba(0, 0, 0, 0.32)", "backdropFilter": "blur(8px)" }}>
                <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)" }}>
                  <div style={{ "padding": "30px 20px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.2" y="4.6" width="17.6" height="16.2" rx="2.4" />
                        <path d="M3.2 9.4h17.6" />
                        <path d="M8 2.8v3.4" />
                        <path d="M16 2.8v3.4" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"90 Days"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Structured Timeline"}
                    </div>
                  </div>
                  <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8.8" />
                        <path d="M12 7.2V12l3.2 2" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"24 Hours"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Pre-Approval Turnaround"}
                    </div>
                  </div>
                  <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.4 10.6 12 3.6l8.6 7" />
                        <path d="M5.6 12.4V20h12.8v-7.6" />
                        <path d="M10 20v-4.6h4V20" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"In-House"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Senior Loan Officer"}
                    </div>
                  </div>
                  <div style={{ "padding": "30px 20px" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px" }}>
                      {" "}
                      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="8" r="3.4" />
                        <path d="M2.8 19c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6" />
                        <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.4" />
                        <path d="M18 13.9c2.1.7 3.6 2.5 3.6 5.1" />
                      </svg>
                      {" "}
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                        {"10,000+"}
                      </div>
                    </div>
                    <div style={{ "marginTop": "6px", "textAlign": "center", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                      {"Clients Helped Nationwide"}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="how" style={{ "padding": "70px 0px 60px", "background": "rgb(5, 6, 8)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "44px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px" }}>
                    {"Watch First"}
                  </div>
                  <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 66px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                    {"How Our "}
                    <span style={{ "color": "rgb(12, 112, 195)" }}>
                      {"90 Day Program"}
                    </span>
                    {" Works"}
                  </h2>
                </div>
                <div style={{ "position": "relative", "maxWidth": "960px", "margin": "0px auto", "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.55) 0px 40px 90px, rgba(12, 112, 195, 0.24) 0px 0px 60px 4px" }}>
                  {" "}
                  <wistia-player media-id="nxpt9nkef1" aspect="1.7777777777777777" class="hb-player" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%" }} />
                  {" "}
                </div>
              </div>
            </section>
            <section id="why" style={{ "padding": "20px 0px 70px", "background": "rgb(5, 6, 8)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "flex", "flexDirection": "column", "gap": "80px" }}>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                  <div style={{ "borderRadius": "25px", "height": "460px", "boxShadow": "rgba(12, 112, 195, 0.32) 0px 0px 70px 6px, rgba(0, 173, 238, 0.18) 0px 0px 24px 2px" }} className="hb-last">
                    {" "}
                    <img loading="lazy" decoding="async" src="/assets/img/slot-hb-denied.webp" alt="Four clients standing confidently against a wooden backdrop" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "borderRadius": "25px" }} />
                    {" "}
                  </div>
                  <div className="hb-first">
                    <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px" }}>
                      {"The Problem"}
                    </div>
                    <h2 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(32px, 3.8vw, 52px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }}>
                      {"The Real Reason You’re Not Getting Approved 💡"}
                    </h2>
                    <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                      {"Buying a home feels impossible when your credit is holding you back. Constant denials, high rates, and confusion about where to start leave most people stuck for years, wasting time and missing real opportunities."}
                    </p>
                  </div>
                </div>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                  <div style={{ "borderRadius": "25px", "height": "460px", "order": "2", "boxShadow": "rgba(12, 112, 195, 0.32) 0px 0px 70px 6px, rgba(0, 173, 238, 0.18) 0px 0px 24px 2px" }} className="hb-reveal">
                    {" "}
                    <img loading="lazy" decoding="async" src="/assets/img/slot-hb-path.webp" alt="Two clients back to back, smiling" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block", "borderRadius": "25px" }} />
                    {" "}
                  </div>
                  <div style={{ "order": "1" }}>
                    <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "18px" }}>
                      {"The Solution"}
                    </div>
                    <h2 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(32px, 3.8vw, 52px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                      {"A Clear Path to"}
                      <br />
                      {"Homeownership 🏡"}
                    </h2>
                    <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                      {"The 90 Day Home Buying Blueprint is a structured, step-by-step system designed to take you from where you are right now to homeownership in as little as 90 days."}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div className="sc-host-x" style={{ "display": "contents" }}>
              <div style={{ "background": "var(--color-blue-600)", "overflow": "hidden", "padding": "18px 0px" }}>
                <div style={{ "display": "flex", "gap": "24px", "width": "max-content", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "22px", "color": "rgb(255, 255, 255)", "textTransform": "uppercase", "animation": "18s linear 0s infinite normal none running dc-marquee" }}>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                  <span>
                    {"credit danny"}
                  </span>
                  <span>
                    {"★"}
                  </span>
                </div>
              </div>
            </div>
            <section id="path" style={{ "padding": "70px 0px", "background": "linear-gradient(rgb(5, 6, 8), rgb(7, 21, 39) 40%, rgb(5, 6, 8))" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "64px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"The System"}
                  </div>
                  <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 68px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"Your Path to Approval"}
                  </h2>
                </div>
                <div style={{ "position": "relative" }}>
                  <div style={{ "position": "absolute", "left": "0px", "right": "0px", "top": "27px", "height": "2px", "background": "linear-gradient(90deg,rgba(0,173,238,.15),var(--color-blue-400) 30%,var(--color-blue-400) 70%,#ffffff)" }} />
                  <div style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "repeat(4, minmax(0px, 1fr))", "gap": "32px" }}>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(5, 6, 8)", "border": "2px solid var(--color-blue-400)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-400)", "marginBottom": "28px" }} className="hb-reveal">
                        {"01"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "10px" }}>
                        {"Step 1"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Credit Analysis"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"We identify exactly what’s holding your credit back"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Full credit report breakdown"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Identify negative items"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Pinpoint score blockers"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Create custom action plan"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(5, 6, 8)", "border": "2px solid var(--color-blue-400)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-400)", "marginBottom": "28px" }} className="hb-reveal">
                        {"02"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "10px" }}>
                        {"Step 2"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Strategic Credit Repair"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"We take action to improve and optimize your profile"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Dispute inaccurate items"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Remove harmful accounts"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Optimize credit utilization"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Strengthen credit profile"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(5, 6, 8)", "border": "2px solid var(--color-blue-400)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-400)", "marginBottom": "28px" }} className="hb-reveal">
                        {"03"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "10px" }}>
                        {"Step 3"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Financial Preparation"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"We position you to meet lender requirements"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Improve debt-to-income ratio"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Guide on spending & usage"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Build lender-ready profile"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Prepare for pre-approval"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ "width": "56px", "height": "56px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "border": "2px solid rgb(255, 255, 255)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "var(--font-stat)", "fontSize": "28px", "lineHeight": "1", "color": "var(--color-blue-600)", "marginBottom": "28px", "boxShadow": "rgba(0, 173, 238, 0.35) 0px 0px 24px 4px" }} className="hb-reveal">
                        {"04"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "marginBottom": "10px" }}>
                        {"Step 4"}
                      </div>
                      <h3 style={{ "margin": "0px 0px 10px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                        {"Approval Home Buying"}
                      </h3>
                      <p style={{ "margin": "0px 0px 22px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.62)" }} className="hb-reveal">
                        {"You move forward with confidence and clarity"}
                      </p>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }}>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Connect with our in-house senior loan officer"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Get pre-approved confidently in as little as 24 hours"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Navigate the buying process"}
                          </span>
                        </div>
                        <div style={{ "display": "flex", "gap": "10px", "alignItems": "flex-start" }}>
                          <span style={{ "flexShrink": "0", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "rgb(255, 255, 255)", "marginTop": "8px" }} />
                          <span style={{ "fontSize": "15px", "lineHeight": "1.5", "color": "rgb(255, 255, 255)" }}>
                            {"Move into your new home"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "56px" }}>
                  {" "}
                  <Link href="/blueprint-application/" className="hb-reveal scp0 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "18px 39px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px" }}>
                    {"Get Approved in 90 Days or Less"}
                  </Link>
                  {" "}
                </div>
              </div>
            </section>
            <section id="process" style={{ "position": "relative", "padding": "70px 0px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(2, 16, 28) 28%, rgb(6, 40, 69) 58%, rgb(4, 24, 42) 82%, rgb(0, 0, 0) 100%)", "overflow": "hidden" }}>
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(0, 173, 238, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 173, 238, 0.07) 1px, transparent 1px)", "backgroundSize": "64px 64px", "maskImage": "linear-gradient(transparent 0%, rgb(0, 0, 0) 45%, rgb(0, 0, 0) 78%, transparent 100%)" }} />
              <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(390px, 1fr))", "gap": "60px", "alignItems": "center" }}>
                <div>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"Why This Process Works"}
                  </div>
                  <h2 style={{ "margin": "0px 0px 30px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 4vw, 56px)", "lineHeight": "0.96", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"Our Most Aggressive"}
                    <br />
                    {"Dispute Process"}
                  </h2>
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                    <div className="hb-reveal scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Structured 90-day timeline"}
                      </p>
                    </div>
                    <div className="hb-reveal scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Clear step-by-step system"}
                      </p>
                    </div>
                    <div className="hb-reveal scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"No confusion or guessing"}
                      </p>
                    </div>
                    <div className="hb-reveal scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Focused on approvals, not just scores"}
                      </p>
                    </div>
                    <div className="hb-reveal scp1" style={{ "display": "flex", "gap": "18px", "padding": "18px 22px", "borderRadius": "16px", "background": "rgba(255, 255, 255, 0.05)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(18px)", "boxShadow": "rgba(0, 0, 0, 0.28) 0px 6px 22px" }}>
                      {" "}
                      <span style={{ "flexShrink": "0", "width": "22px", "height": "22px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {" "}
                      <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                        {"Built for speed and results"}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ "display": "flex", "alignItems": "flex-end", "justifyContent": "center" }}>
                  {" "}
                  <img loading="lazy" decoding="async" src="/assets/img/danny-transparent-photo_2.webp" alt="Credit Danny" style={{ "width": "100%", "maxWidth": "520px", "height": "auto", "display": "block", "filter": "drop-shadow(rgba(0, 0, 0, 0.55) 0px 30px 60px)" }} className="hb-reveal" />
                  {" "}
                </div>
              </div>
            </section>
            <section id="breakdowns" style={{ "padding": "70px 0px", "background": "rgb(0, 0, 0)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"In-Depth Breakdowns"}
                  </div>
                  <h2 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 66px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"Why We Built This Program"}
                  </h2>
                  <p style={{ "margin": "0px auto", "maxWidth": "760px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                    {"These in-depth breakdowns reveal exactly how our system works, from fixing your credit profile to positioning you for lender approval in just 90 days."}
                  </p>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "72px" }}>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                    <div className="hb-last">
                      <h3 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(28px, 3.05vw, 43px)", "lineHeight": "0.98", "color": "rgb(255, 255, 255)", "whiteSpace": "nowrap" }} className="hb-reveal">
                        {"Why Most Applications Get Denied 💡"}
                      </h3>
                      <p style={{ "margin": "0px", "maxWidth": "520px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                        {"It’s not just about your score. Lenders look at how your entire profile is structured, and small mistakes can cost you big opportunities. Here’s what’s really going wrong."}
                      </p>
                    </div>
                    <div style={{ "position": "relative", "borderRadius": "20px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 30px 70px, rgba(12, 112, 195, 0.2) 0px 0px 50px 4px" }} className="hb-reveal hb-first">
                      {" "}
                      <wistia-player media-id="crjkm2g3jr" aspect="1.7777777777777777" class="hb-player" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%" }} />
                      {" "}
                    </div>
                  </div>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))", "gap": "64px", "alignItems": "center" }}>
                    <div style={{ "order": "1", "position": "relative", "borderRadius": "20px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.5) 0px 30px 70px, rgba(12, 112, 195, 0.2) 0px 0px 50px 4px" }} className="hb-reveal">
                      {" "}
                      <wistia-player media-id="owpki24dog" aspect="1.7777777777777777" class="hb-player" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%" }} />
                      {" "}
                    </div>
                    <div style={{ "order": "2" }}>
                      <h3 style={{ "margin": "0px 0px 20px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(28px, 3.05vw, 43px)", "lineHeight": "0.98", "color": "rgb(255, 255, 255)", "whiteSpace": "nowrap" }} className="hb-reveal">
                        {"How We Turn It Around in 90 Days 🗓️"}
                      </h3>
                      <p style={{ "margin": "0px", "maxWidth": "520px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }} className="hb-reveal">
                        {"From credit optimization to approval readiness, this is the exact process we use to help clients move forward with confidence and clarity."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="next" style={{ "padding": "70px 0px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(3, 16, 29) 45%, rgb(4, 18, 31) 62%, rgb(0, 0, 0) 100%)" }}>
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }}>
                <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
                  <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                    {"Your First 90 Days"}
                  </div>
                  <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 66px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                    {"What Happens Next"}
                  </h2>
                </div>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(2, minmax(0px, 1fr))", "gap": "28px" }}>
                  <div className="hb-reveal scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4.4 4.4V21H6z" />
                        <path d="M14 3v4.6h4.4" />
                        <circle cx="11" cy="13.4" r="2.9" />
                        <path d="M13.2 15.6 15.6 18" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"We Break Down Your Entire Credit File"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"We don’t “review”. We audit everything line by line to identify EXACTLY what’s holding you back from approval."}
                      </p>
                    </div>
                  </div>
                  <div className="hb-reveal scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.4 6.4 9 3.6l6 2.8 5.6-2.8v14l-5.6 2.8-6-2.8-5.6 2.8z" />
                        <path d="M9 3.6v14" />
                        <path d="M15 6.4v14" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"We Build Your 90-Day Approval Strategy"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"You get a custom game plan designed to position you for a mortgage: what to remove, what to fix, and what to add."}
                      </p>
                    </div>
                  </div>
                  <div className="hb-reveal scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13.6 2.6 5 13.4h5.6L9.6 21.4 19 10.2h-5.9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"We Execute & Clean Your Profile FAST"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"Our team goes to work on disputes, deletions, and optimization, while guiding you on exactly what to do (and NOT do)."}
                      </p>
                    </div>
                  </div>
                  <div className="hb-reveal scp2" style={{ "display": "flex", "gap": "26px", "alignItems": "center", "padding": "32px 30px", "borderRadius": "24px", "border": "1px solid rgba(255, 255, 255, 0.12)", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)" }}>
                    <div style={{ "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.4 10.6 12 3.6l8.6 7" />
                        <path d="M5.6 12.4V20h12.8v-7.6" />
                        <path d="M9.4 16.2l1.9 1.9 3.6-3.8" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                        {"You Get Positioned for Home Approval"}
                      </h3>
                      <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.72", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                        {"Once your profile is dialed in, we align you with lenders and put you in position to get APPROVED."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="apply" style={{ "position": "relative", "padding": "120px 0px", "background": "linear-gradient(200deg, rgb(5, 6, 8) 15%, rgb(6, 42, 77) 70%, rgb(12, 112, 195) 140%)", "overflow": "hidden" }}>
              <div style={{ "position": "absolute", "inset": "0px", "backgroundImage": "url(/assets/img/Group-1261155628-2.jpg)", "backgroundSize": "cover", "backgroundPosition": "center center", "opacity": "0.62", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "background": "linear-gradient(rgba(5, 6, 8, 0.42), rgba(5, 6, 8, 0.12) 45%, rgba(5, 6, 8, 0.48))", "pointerEvents": "none" }} />
              <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "backgroundImage": "linear-gradient(rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(120, 190, 255, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 190, 255, 0.09) 1px, transparent 1px)", "backgroundSize": "24px 24px, 24px 24px, 120px 120px, 120px 120px", "mixBlendMode": "screen" }} />
              <div style={{ "position": "relative", "maxWidth": "860px", "margin": "0px auto", "padding": "0px 40px", "textAlign": "center" }}>
                <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "22px" }}>
                  {"Take Action Today"}
                </div>
                <h2 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(44px, 5.6vw, 84px)", "lineHeight": "0.9", "color": "rgb(255, 255, 255)" }} className="hb-reveal">
                  {"Ready to Become"}
                  <br />
                  {"a Homeowner?"}
                </h2>
                <p style={{ "margin": "0px 0px 38px", "fontSize": "18px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.78)" }} className="hb-reveal">
                  {"Your next 90 days can change everything if you take action today."}
                </p>
                {" "}
                <Link href="/blueprint-application/" className="hb-reveal scp0 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "18px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "15px 32px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px" }}>
                  {"Apply Now"}
                </Link>
                {" "}
              </div>
            </section>
            <div style={{ "position": "fixed", "left": "0px", "right": "0px", "bottom": "0px", "zIndex": "70", "background": "rgba(5, 6, 8, 0.92)", "backdropFilter": "blur(18px)", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }} className="hb-sticky">
              <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "14px 40px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap" }}>
                <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "color": "rgb(255, 255, 255)" }}>
                  {"The 90 Day "}
                  <span style={{ "color": "rgb(12, 112, 195)" }}>
                    {"Home Buying Blueprint"}
                  </span>
                </div>
                {" "}
                <Link href="/blueprint-application/" className="scp3 hb-cta" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "16px", "letterSpacing": "0.05em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "12px 27px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {"Get Started"}
                </Link>
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section data-screen-label="Footer" style={{ "position": "relative", "background": "radial-gradient(120% 90% at 82% 50%, rgba(12, 112, 195, 0.32), rgba(0, 0, 0, 0) 62%), rgb(0, 0, 0)", "padding": "80px 40px", "borderTop": "1px solid rgba(255, 255, 255, 0.09)" }} className="cd-pad">
        <div style={{ "maxWidth": "1180px", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "minmax(340px, 1fr) auto", "gap": "72px", "alignItems": "center" }} className="cd-endcta-grid">
          <div style={{ "display": "flex", "flexDirection": "column", "gap": "0px" }}>
            {" "}
            <a href="#top" style={{ "alignSelf": "flex-start" }}>
              <img loading="lazy" decoding="async" src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "height": "44px", "width": "auto", "display": "block" }} />
            </a>
            {" "}
            <div style={{ "height": "1px", "background": "rgba(255, 255, 255, 0.16)", "margin": "26px 0px", "maxWidth": "420px" }} />
            <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.72)", "maxWidth": "460px", "textWrap": "pretty" }}>
              {"Real strategies. Real results. Real freedom. Follow Danny for expert credit tips, client wins, and powerful financial insights every day."}
            </p>
            {" "}
            <span style={{ "margin": "34px 0px 16px", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.45)" }}>
              {"Follow Danny"}
            </span>
            {" "}
            <div style={{ "display": "flex", "gap": "12px", "flexWrap": "wrap" }}>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/creditdanny" className="cd-hov-social" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "boxSizing": "border-box", "height": "48px", "padding": "0px 22px", "borderRadius": "10px", "border": "1px solid rgba(255, 255, 255, 0.28)", "color": "rgb(255, 255, 255)", "fontSize": "14px", "fontWeight": "600", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.18a4.66 4.66 0 1 0 0 9.32 4.66 4.66 0 0 0 0-9.32Zm0 7.69a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06Zm5.93-7.87a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0Z" />
                </svg>
                {"Instagram"}
              </a>
              {" "}
              <a target="_blank" rel="noopener noreferrer" href="https://tiktok.com/@creditdanny" className="cd-hov-social" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "boxSizing": "border-box", "height": "48px", "padding": "0px 22px", "borderRadius": "10px", "border": "1px solid rgba(255, 255, 255, 0.28)", "color": "rgb(255, 255, 255)", "fontSize": "14px", "fontWeight": "600", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.1-2.55V9.6a5.7 5.7 0 1 0 5.1 5.67V8.6a6.5 6.5 0 0 0 3.9 1.3V6.8a3.6 3.6 0 0 1-3.9-3.6V2Z" />
                </svg>
                {"TikTok"}
              </a>
              {" "}
            </div>
            <h2 style={{ "margin": "40px 0px 0px", "fontFamily": "var(--font-display)", "fontSize": "clamp(30px, 3vw, 44px)", "lineHeight": "1.02", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
              {"Elevate Your Credit."}
              <br />
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Elevate Your Life."}
              </span>
            </h2>
            <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "10px", "marginTop": "30px" }}>
              {" "}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0C70C3" strokeWidth="1.8" style={{ "flex": "0 0 auto", "marginTop": "3px" }}>
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {" "}
              <span style={{ "fontSize": "14px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                {"2602 W Baseline Rd, Suite 30"}
                <br />
                {"Mesa, AZ 85202"}
                <br />
                {"United States"}
              </span>
              {" "}
            </div>
            <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "alignSelf": "flex-start", "marginTop": "26px", "padding": "11px 18px", "borderRadius": "12px", "border": "1px solid rgba(255, 255, 255, 0.14)", "background": "rgba(255, 255, 255, 0.04)" }}>
              {" "}
              <span style={{ "fontSize": "14px", "color": "rgb(255, 186, 64)" }}>
                {"★"}
              </span>
              {" "}
              <span style={{ "fontSize": "13px", "fontWeight": "700", "color": "rgb(255, 255, 255)" }}>
                {"5.0 Google"}
              </span>
              {" "}
              <span style={{ "color": "rgba(255, 255, 255, 0.25)" }}>
                {"|"}
              </span>
              {" "}
              <span style={{ "fontSize": "13px", "color": "rgba(255, 255, 255, 0.6)" }}>
                {"241 reviews"}
              </span>
              {" "}
            </div>
          </div>
          <div style={{ "width": "330px", "flex": "0 0 auto", "justifySelf": "center" }} className="cd-phone">
            <div style={{ "position": "relative", "borderRadius": "44px", "background": "rgb(20, 20, 22)", "padding": "11px", "boxShadow": "rgba(255, 255, 255, 0.14) 0px 0px 0px 1px, rgba(0, 0, 0, 0.65) 0px 40px 90px", "animation": "6s ease-in-out 0s infinite normal none running cd-float", "willChange": "transform" }}>
              <div style={{ "position": "relative", "borderRadius": "34px", "overflow": "hidden", "aspectRatio": "9 / 19.5", "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)" }}>
                {" "}
                <image-slot id="footer-ig-screenshot" shape="rect" placeholder="Instagram profile screenshot" data-filled="">
                  <img loading="lazy" decoding="async" alt="Instagram profile screenshot" src="data:image/webp;base64,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" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "0px" }} />
                </image-slot>
                {" "}
                <div style={{ "position": "absolute", "top": "12px", "left": "50%", "transform": "translateX(-50%)", "width": "96px", "height": "26px", "borderRadius": "999px", "background": "rgb(0, 0, 0)", "pointerEvents": "none" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SharedFooterCdPad />
      <Script id="cd-inline-d80f470c" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: "(function(){var d=document.documentElement;d.className+=' hb-js';if(!('IntersectionObserver'in window)){d.className=d.className.replace(' hb-js','');return;}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('hb-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:0.05});addEventListener('DOMContentLoaded',function(){[].forEach.call(document.querySelectorAll('.hb-reveal'),function(n){io.observe(n);});});})();\n(function(){var s=document.querySelector('.hb-sticky');if(!s)return;var hero=document.getElementById('hb-top'),end=document.getElementById('apply');if(!('IntersectionObserver'in window)||!hero||!end){s.classList.add('hb-on');return;}var heroOn=true,endOn=false;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.target===hero)heroOn=e.isIntersecting;else endOn=e.isIntersecting;});s.classList.toggle('hb-on',!heroOn&&!endOn);},{threshold:0.01});io.observe(hero);io.observe(end);})();" }} />
      <div className="cd-modal" data-modal="lead-form" role="dialog" aria-modal="true" aria-label="Credit Danny Lead Form" hidden>
        <div className="cd-modal__panel">
          {" "}
          <button type="button" className="cd-modal__close" data-modal-close="" aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
            </svg>
          </button>
          {" "}
          <div className="elementor-element elementor-element-5dc3604 e-con-full e-flex e-con e-parent" data-id="5dc3604" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-2e755a8 elementor-widget elementor-widget-image" data-id="2e755a8" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
              {" "}
              <img loading="lazy" decoding="async" width="750" height="300" src="/assets/img/credit-danny-logo-resize.png" className="attachment-large size-large wp-image-27254577" alt="" srcSet="/assets/img/credit-danny-logo-resize.png 750w, /assets/img/credit-danny-logo-resize-300x120.png 300w, /assets/img/credit-danny-logo-resize-480x192.png 480w" sizes="(max-width: 750px) 100vw, 750px" />
              {" "}
            </div>
            <div className="elementor-element elementor-element-a247628 elementor-widget elementor-widget-html" data-id="a247628" data-element_type="widget" data-e-type="widget" data-widget_type="html.default">
              {" "}
              <iframe src="https://link.creditdanny.com/widget/form/RNUcdyxyK1HmKCUT6A2X" style={{ "width": "100%", "height": "100%", "border": "none", "borderRadius": "8px" }} id="inline-RNUcdyxyK1HmKCUT6A2X" data-layout={"{'id':'INLINE'}"} data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Credit Danny Lead Form" data-height="467" data-layout-iframe-id="inline-RNUcdyxyK1HmKCUT6A2X" data-form-id="RNUcdyxyK1HmKCUT6A2X" title="Credit Danny Lead Form" />
              {" "}
              <Script src="https://link.creditdanny.com/js/form_embed.js" strategy="afterInteractive" />
              {" "}
            </div>
          </div>
        </div>
      </div>
      <div className="cd-modal cd-modal--nav" data-modal="site-menu" role="dialog" aria-modal="true" aria-label="Site navigation" hidden>
        <div className="cd-modal__panel">
          {" "}
          <button type="button" className="cd-modal__close" data-modal-close="" aria-label="Close">
            <svg className="cd-icon cd-icon-close" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
            </svg>
          </button>
          {" "}
          <div className="elementor-element elementor-element-335cc045 e-flex e-con-boxed e-con e-parent" data-id="335cc045" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-7c530bbf elementor-widget elementor-widget-image" data-id="7c530bbf" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                {" "}
                <Link href="/">
                  {" "}
                  <img width="1394" height="261" src="/assets/img/credit-danny-logo_white.png" className="attachment-full size-full wp-image-27262670" alt={"Text reads \"CREDIT DANNY\" in bold, white uppercase letters against a transparent background."} srcSet="/assets/img/credit-danny-logo_white.png 1394w, /assets/img/credit-danny-logo_white-300x56.png 300w, /assets/img/credit-danny-logo_white-1024x192.png 1024w, /assets/img/credit-danny-logo_white-768x144.png 768w" sizes="(max-width: 1394px) 100vw, 1394px" />
                  {" "}
                </Link>
                {" "}
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-1f1e76b e-flex e-con-boxed e-con e-parent" data-id="1f1e76b" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-c04904c elementor-align-center elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button" data-id="c04904c" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                {" "}
                <Link className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="/plans/">
                  {" "}
                  <span className="elementor-button-content-wrapper">
                    {" "}
                    <span className="elementor-button-text">
                      {"Get Started"}
                    </span>
                    {" "}
                  </span>
                  {" "}
                </Link>
                {" "}
              </div>
              <div className="elementor-element elementor-element-1a6d1c0 elementor-nav-menu__align-center elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu" data-id="1a6d1c0" data-element_type="widget" data-e-type="widget" data-settings={"{\"layout\":\"vertical\",\"submenu_icon\":{\"value\":\"<i class=\\\"fas fa-caret-down\\\" aria-hidden=\\\"true\\\"><\\/i>\",\"library\":\"fa-solid\"}}"} data-widget_type="nav-menu.default">
                <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-text e--animation-grow">
                  <ul id="menu-1-1a6d1c0" className="elementor-nav-menu sm-vertical">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268755">
                      <Link href="/plans/" className="elementor-item">
                        {"Our Plans & Pricing"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267232">
                      <Link href="/blueprint/" className="elementor-item">
                        {"Credit Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269543">
                      <Link href="/sponsorship/" className="elementor-item">
                        {"Apply for Free Credit Repair"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27264055">
                      <Link href="/blueprint-strategy/" className="elementor-item">
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268962">
                      <Link href="/accelerator/" className="elementor-item">
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270422 current_page_item menu-item-27262558">
                      <Link href="/home-buying-blueprint/" aria-current="page" className="elementor-item elementor-item-active">
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27259573">
                      <Link href="/about/" className="elementor-item">
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261517">
                      <Link href="/transformations/" className="elementor-item">
                        {"Our Credit Transformations"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018603">
                      <Link href="/#reviews" className="elementor-item elementor-item-anchor">
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018601">
                      <Link href="/#guarantee" className="elementor-item elementor-item-anchor">
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270320">
                      <Link href="/mentorship/" className="elementor-item">
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                  {" "}
                </nav>
                <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
                  <ul id="menu-2-1a6d1c0" className="elementor-nav-menu sm-vertical">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268755">
                      <Link href="/plans/" className="elementor-item" tabIndex={-1}>
                        {"Our Plans & Pricing"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27267232">
                      <Link href="/blueprint/" className="elementor-item" tabIndex={-1}>
                        {"Credit Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27269543">
                      <Link href="/sponsorship/" className="elementor-item" tabIndex={-1}>
                        {"Apply for Free Credit Repair"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27264055">
                      <Link href="/blueprint-strategy/" className="elementor-item" tabIndex={-1}>
                        {"Book a Consultation"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27268962">
                      <Link href="/accelerator/" className="elementor-item" tabIndex={-1}>
                        {"Credit Accelerator"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270422 current_page_item menu-item-27262558">
                      <Link href="/home-buying-blueprint/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>
                        {"90 Day Home Buying Blueprint"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27259573">
                      <Link href="/about/" className="elementor-item" tabIndex={-1}>
                        {"About Credit Danny"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27261517">
                      <Link href="/transformations/" className="elementor-item" tabIndex={-1}>
                        {"Our Credit Transformations"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018603">
                      <Link href="/#reviews" className="elementor-item elementor-item-anchor" tabIndex={-1}>
                        {"Reviews"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-26018601">
                      <Link href="/#guarantee" className="elementor-item elementor-item-anchor" tabIndex={-1}>
                        {"Money Back Guarantee"}
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27270320">
                      <Link href="/mentorship/" className="elementor-item" tabIndex={-1}>
                        {"Credit Danny Mentorship"}
                      </Link>
                    </li>
                  </ul>
                  {" "}
                </nav>
              </div>
              <div className="elementor-element elementor-element-6f357dd4 elementor-shape-circle elementor-widget-mobile__width-inherit elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="6f357dd4" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-shrink elementor-repeater-item-c73d5a5" href="https://instagram.com/creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"Instagram"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-instagram" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-tiktok elementor-animation-shrink elementor-repeater-item-07c69e6" href="https://tiktok.com/@creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"Tiktok"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-tiktok" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-x-twitter elementor-animation-shrink elementor-repeater-item-e30a60b" href="https://x.com/creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"X-twitter"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-x-twitter" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                  <span className="elementor-grid-item" role="listitem">
                    {" "}
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-animation-shrink elementor-repeater-item-34f6a44" href="https://facebook.com/creditdanny" target="_blank">
                      {" "}
                      <span className="elementor-screen-only">
                        {"Facebook"}
                      </span>
                      {" "}
                      <svg className="cd-icon cd-icon-facebook" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </span>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OttoSeo />
    </>
  );
}

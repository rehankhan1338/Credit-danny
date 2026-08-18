import type { Metadata } from "next";
import BodyClass from "@/components/BodyClass";
import Link from "next/link";
import Script from "next/script";
import "@/public/assets/css/pages/sponsorship.css";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import SponsorshipEffects from "@/components/effects/SponsorshipEffects";
import OttoSeo from "@/components/OttoSeo";

export const metadata: Metadata = {
  "title": "The Credit Danny Sponsorship Program | Free Credit Repair",
  "description": "A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.",
  "robots": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  "alternates": {
    "canonical": "https://creditdanny.com/sponsorship/"
  },
  "openGraph": {
    "locale": "en_US",
    "type": "article",
    "title": "The Credit Danny Sponsorship Program | Free Credit Repair",
    "description": "A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.",
    "url": "https://creditdanny.com/sponsorship/",
    "siteName": "Credit Danny",
    "images": [
      {
        "url": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "secureUrl": "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
        "width": 1200,
        "height": 630,
        "alt": "Sponsorship",
        "type": "image/jpeg"
      }
    ],
    "publishedTime": "2026-08-12T08:33:55-07:00"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The Credit Danny Sponsorship Program | Free Credit Repair",
    "description": "A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.",
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

export default function SponsorshipPage() {
  return (
    <>
      <BodyClass className="wp-singular page-template page-template-page-sponsorship page-template-page-sponsorship-php page page-id-27270417 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-sponsorship eio-default hello-elementor-default elementor-default elementor-kit-27255861" />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
      <meta name="ti-site-data" content="eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9jcmVkaXRkYW5ueS5jb20/dGktb25saW5lLXVzZXJzLWdvb2dsZT0xJmFtcDtwPSUyRnNwb25zb3JzaGlwJTJGJmFtcDtfd3Bub25jZT1iZjgyNTEzOTRiIn0=" />
      <meta name="msapplication-TileImage" content="assets/img/heartfavicon-300x300.png" />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":[\"Person\",\"Organization\"],\"@id\":\"https://creditdanny.com/#person\",\"name\":\"Credit Danny\",\"sameAs\":[\"https://www.instagram.com/creditdanny/\",\"https://www.tiktok.com/@creditdanny\"],\"logo\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"},\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/#logo\",\"url\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"contentUrl\":\"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png\",\"caption\":\"Credit Danny\",\"inLanguage\":\"en-US\",\"width\":\"1394\",\"height\":\"261\"}},{\"@type\":\"WebSite\",\"@id\":\"https://creditdanny.com/#website\",\"url\":\"https://creditdanny.com\",\"name\":\"Credit Danny\",\"alternateName\":\"Elevate Financial Services\",\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"url\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\",\"width\":\"1200\",\"height\":\"630\",\"inLanguage\":\"en-US\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://creditdanny.com/sponsorship/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":\"1\",\"item\":{\"@id\":\"https://creditdanny.com\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":\"2\",\"item\":{\"@id\":\"https://creditdanny.com/sponsorship/\",\"name\":\"Sponsorship\"}}]},{\"@type\":\"WebPage\",\"@id\":\"https://creditdanny.com/sponsorship/#webpage\",\"url\":\"https://creditdanny.com/sponsorship/\",\"name\":\"The Credit Danny Sponsorship Program | Free Credit Repair\",\"datePublished\":\"2026-08-12T08:33:55-07:00\",\"dateModified\":\"2026-08-12T08:33:55-07:00\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/#website\"},\"primaryImageOfPage\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"breadcrumb\":{\"@id\":\"https://creditdanny.com/sponsorship/#breadcrumb\"}},{\"@type\":\"Person\",\"@id\":\"https://creditdanny.com/author/\",\"url\":\"https://creditdanny.com/author/\",\"image\":{\"@type\":\"ImageObject\",\"@id\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"url\":\"https://secure.gravatar.com/avatar/?s=96&amp;d=mm&amp;r=g\",\"inLanguage\":\"en-US\"}},{\"@type\":\"Article\",\"headline\":\"The Credit Danny Sponsorship Program | Free Credit Repair\",\"datePublished\":\"2026-08-12T08:33:55-07:00\",\"dateModified\":\"2026-08-12T08:33:55-07:00\",\"author\":{\"@id\":\"https://creditdanny.com/author/\"},\"publisher\":{\"@id\":\"https://creditdanny.com/#person\"},\"description\":\"A limited opportunity for qualified applicants to receive credit restoration support at little to no cost. Credit repair with a purpose.\",\"name\":\"The Credit Danny Sponsorship Program | Free Credit Repair\",\"@id\":\"https://creditdanny.com/sponsorship/#richSnippet\",\"isPartOf\":{\"@id\":\"https://creditdanny.com/sponsorship/#webpage\"},\"image\":{\"@id\":\"https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg\"},\"inLanguage\":\"en-US\",\"mainEntityOfPage\":{\"@id\":\"https://creditdanny.com/sponsorship/#webpage\"}}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Service\",\n  \"name\": \"The Credit Danny Sponsorship Program\",\n  \"provider\": {\n    \"@type\": \"LocalBusiness\",\n    \"name\": \"Credit Danny\",\n    \"legalName\": \"Elevate Financial Services, LLC\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n      \"addressLocality\": \"Mesa\",\n      \"addressRegion\": \"AZ\",\n      \"postalCode\": \"85202\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"additionalType\": \"\",\n  \"serviceOutput\": \"Better credit, better opportunities, and better futures for individuals and families.\",\n  \"serviceType\": \"Sponsored Credit Repair\",\n  \"description\": \"A sponsorship program providing completely done-for-you credit repair using custom disputes and consumer law-based strategies. Designed for hardworking individuals motivated to change but not currently in a financial position to invest in premium programs. The only required investment is a SmartCredit account.\",\n  \"image\": \"https://creditdanny.com/wp-content/uploads/2026/05/creditdanny-kenzie-884x1024-3.png\",\n  \"logo\": \"https://creditdanny.com/wp-content/uploads/2026/04/credit-danny-logo_white-768x144.png\",\n  \"brand\": {\n    \"@type\": \"Brand\",\n    \"name\": \"Credit Danny\"\n  },\n  \"offers\": {\n    \"@type\": \"Offer\",\n    \"name\": \"Credit Danny Sponsorship\",\n    \"description\": \"Free done-for-you credit repair (requires only a SmartCredit membership).\",\n    \"price\": \"0.00\",\n    \"priceCurrency\": \"USD\",\n    \"availability\": \"https://schema.org/InStock\"\n  },\n  \"availableChannel\": {\n    \"@type\": \"ServiceChannel\",\n    \"serviceUrl\": \"https://creditdanny.com/sponsorship/\",\n    \"serviceLocation\": {\n      \"@type\": \"Place\",\n      \"name\": \"Credit Danny Office\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"streetAddress\": \"2602 W Baseline Rd, Suite 30\",\n        \"addressLocality\": \"Mesa\",\n        \"addressRegion\": \"AZ\",\n        \"postalCode\": \"85202\",\n        \"addressCountry\": \"US\"\n      }\n    }\n  },\n  \"potentialAction\": {\n    \"@type\": \"ReserveAction\",\n    \"name\": \"Apply for Sponsorship\",\n    \"target\": {\n      \"@type\": \"EntryPoint\",\n      \"urlTemplate\": \"https://creditdanny.com/get-started/\",\n      \"inLanguage\": \"en-US\",\n      \"actionPlatform\": [\n        \"http://schema.org/DesktopWebPlatform\",\n        \"http://schema.org/MobileWebPlatform\"\n      ]\n    }\n  },\n  \"subjectOf\": {\n    \"@type\": \"WebPage\",\n    \"url\": \"https://creditdanny.com/sponsorship/\",\n    \"name\": \"Credit Danny Sponsorship Program\"\n  },\n  \"termsOfService\": \"https://creditdanny.com/terms-and-conditions/\"\n}\n" }} />
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/27n6q03wh4.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/0gol1m54c4.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/3bcxsh9hdw.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/s4s4iiz4mn.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/sm8l88eucr.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/6oep76ji10.js" type="module" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/lb00wopw0y.js" type="module" strategy="afterInteractive" />
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('sp-js');" }} />
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
      <header id="top" style={{ "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(12, 112, 195) 100%)", "padding": "0px 40px" }} className="cd-inner-pad">
        <div style={{ "maxWidth": "1280px", "margin": "0px auto", "height": "92px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "32px" }}>
          {" "}
          <Link href="/" className="cd-hov-logo" style={{ "display": "inline-flex", "alignItems": "center", "transition": "opacity 0.18s", "cursor": "pointer" }}>
            <img loading="lazy" decoding="async" src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "height": "38px", "width": "auto", "display": "block" }} />
          </Link>
          {" "}
          <nav style={{ "display": "flex", "alignItems": "center", "gap": "30px", "fontFamily": "var(--font-body)", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.9)" }}>
            {" "}
            <Link href="/plans/" className="cd-hov-nav cd-navlink" style={{ "color": "inherit", "fontSize": "14px", "transition": "color 0.18s", "cursor": "pointer" }}>
              {"Our Plans"}
            </Link>
            {" "}
            <Link href="/blueprint/" className="cd-hov-nav cd-navlink" style={{ "color": "inherit", "fontSize": "14px", "transition": "color 0.18s", "cursor": "pointer" }}>
              {"Credit Blueprint"}
            </Link>
            {" "}
            <Link href="/sponsorship/" className="cd-hov-nav cd-navlink" style={{ "color": "inherit", "fontSize": "14px", "transition": "color 0.18s", "cursor": "pointer" }}>
              {"Free Credit Repair"}
            </Link>
            {" "}
            <a href="#menu" data-menu-open="" className="cd-hov-nav" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "color": "inherit", "fontSize": "14px", "cursor": "pointer" }}>
              {"More\n          "}
              <span style={{ "display": "inline-flex", "flexDirection": "column", "justifyContent": "center", "gap": "3px", "width": "18px" }}>
                {" "}
                <span style={{ "display": "block", "height": "2px", "background": "currentcolor", "borderRadius": "2px" }} />
                {" "}
                <span style={{ "display": "block", "height": "2px", "background": "currentcolor", "borderRadius": "2px" }} />
                {" "}
                <span style={{ "display": "block", "height": "2px", "background": "currentcolor", "borderRadius": "2px" }} />
                {" "}
              </span>
              {" "}
            </a>
            {" "}
            <Link href="/sponsorship-apply/" className="cd-hov-cta cd-cta" style={{ "display": "inline-flex", "alignItems": "center", "height": "40px", "padding": "0px 24px", "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "borderRadius": "10px", "fontFamily": "var(--font-display)", "fontSize": "20px", "letterSpacing": "0.03em", "borderWidth": "1px", "borderStyle": "solid", "borderColor": "var(--color-white)", "fontWeight": "700", "boxShadow": "rgba(12, 112, 195, 0.65) 0px 0px 18px, rgba(12, 112, 195, 0.35) 0px 0px 44px", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
              {"Get Started"}
            </Link>
            {" "}
          </nav>
        </div>
      </header>
      <div style={{ "background": "rgb(5, 6, 8)", "color": "rgb(255, 255, 255)", "fontFamily": "var(--font-body)", "overflowX": "hidden" }}>
        <section id="top" data-screen-label="Hero" style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(128% 116% at 0% 100%, rgb(12, 112, 195) 0%, rgb(11, 98, 171) 8%, rgb(9, 80, 140) 16%, rgb(8, 64, 110) 25%, rgb(6, 40, 70) 34%, rgb(3, 25, 42) 46%, rgb(1, 10, 18) 60%, rgb(0, 0, 0) 76%) rgb(0, 0, 0)" }}>
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "opacity": "0" }} />
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "30px 40px 0px", "display": "grid", "gridTemplateColumns": "1.05fr 0.95fr", "gap": "48px", "alignItems": "center" }} className="sp-hero sp-gutter">
            <div style={{ "paddingBottom": "55px", "animation": "0.7s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal both running cdRise" }}>
              <div style={{ "display": "inline-flex", "flexDirection": "column", "alignItems": "center" }}>
                <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px", "border": "1px solid rgb(255, 255, 255)", "borderRadius": "999px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "marginBottom": "22px" }}>
                  {" "}
                  <span className="sp-dot" style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--color-blue-400)", "boxShadow": "rgba(0, 173, 238, 0.75) 0px 0px 6px 2px, rgba(0, 173, 238, 0.4) 0px 0px 14px 4px" }} />
                  {" "}
                  <span style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.28em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                    {"Credit Repair With A Purpose ❤️"}
                  </span>
                  {" "}
                </div>
                <h1 style={{ "margin": "0px", "width": "fit-content", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "lineHeight": "0.9", "letterSpacing": "-0.01em", "fontSize": "clamp(44px, 5.4vw, 74px)", "color": "var(--color-blue-600)", "textAlign": "center" }}>
                  {"\n        The Credit Danny\n        "}
                  <span style={{ "display": "block", "color": "rgb(255, 255, 255)", "marginTop": "0.08em" }}>
                    {"Sponsorship Program"}
                  </span>
                  {" "}
                </h1>
                <p style={{ "margin": "26px 0px 0px", "maxWidth": "100%", "textAlign": "center", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)", "textWrap": "pretty" }}>
                  {"We believe everyone deserves a chance to rewrite their story. Our Sponsorship Program exists to open doors for individuals and families who are ready to change their lives but may not currently be in a financial position for our core Credit Blueprint."}
                </p>
                <p style={{ "margin": "22px 0px 0px", "maxWidth": "100%", "padding": "16px 22px", "border": "1px solid rgba(255, 255, 255, 0.28)", "borderRadius": "16px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "textAlign": "left", "fontSize": "16px", "fontStyle": "italic", "lineHeight": "1.65", "color": "rgb(255, 255, 255)" }}>
                  {"If selected and granted a sponsorship, your only investment is your SmartCredit account."}
                </p>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "marginTop": "34px" }}>
                  {" "}
                  <Link href="/sponsorship-apply/" className="scp0" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "21px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "18px 39px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                    {"Apply for the Sponsorship Program"}
                  </Link>
                  {" "}
                  <span style={{ "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "rgba(255, 255, 255, 0.45)" }}>
                    {"Spots are limited"}
                  </span>
                  {" "}
                </div>
              </div>
            </div>
            <div style={{ "position": "relative", "paddingBottom": "110px" }}>
              <div style={{ "position": "relative", "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "16 / 9", "background": "linear-gradient(200deg, rgb(7, 19, 31), rgb(10, 47, 82))", "boxShadow": "rgba(0, 0, 0, 0.55) 0px 40px 90px" }}>
                {" "}
                <wistia-player media-id="lb00wopw0y" aspect="1.7777777777777777" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
                <div style={{ "position": "absolute", "left": "0px", "right": "0px", "bottom": "0px", "height": "38%", "background": "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))", "pointerEvents": "none" }} />
              </div>
              <div style={{ "marginTop": "16px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "12px" }}>
                {" "}
                <span style={{ "width": "28px", "height": "1px", "background": "var(--color-blue-400)", "flexShrink": "0" }} />
                {" "}
                <span style={{ "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"We Don't Just Fix Credit. We Change Lives."}
                </span>
                {" "}
                <span style={{ "width": "28px", "height": "1px", "background": "var(--color-blue-400)", "flexShrink": "0" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "position": "relative", "borderTop": "1px solid rgba(255, 255, 255, 0.1)", "background": "rgba(0, 0, 0, 0.32)", "backdropFilter": "blur(8px)" }}>
            <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px", "display": "grid", "gridTemplateColumns": "repeat(4, 1fr)" }} className="sp-stats sp-gutter">
              <div style={{ "padding": "30px 28px 30px 0px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 8.2 4.5 4.5 0 0 1 19.5 11c0 5.4-7.5 10-7.5 10Z" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
                    {"$100,000+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Given Back To Our Clients"}
                </div>
              </div>
              <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="9" r="6" />
                    <path d="M8.5 14.2 7 22l5-2.6L17 22l-1.5-7.8" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
                    {"14+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Years of Experience"}
                </div>
              </div>
              <div style={{ "padding": "30px 28px", "borderRight": "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.4" />
                    <path d="M2.8 19c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6" />
                    <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.4" />
                    <path d="M18 13.9c2.1.7 3.6 2.5 3.6 5.1" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
                    {"10,000+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"Clients Helped Nationwide"}
                </div>
              </div>
              <div style={{ "padding": "30px 0px 30px 28px" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                  {" "}
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.8 3.1 1.1-6.5L2.6 9l6.5-.9L12 2.2Z" />
                  </svg>
                  {" "}
                  <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-stat">
                    {"200+"}
                  </div>
                </div>
                <div style={{ "marginTop": "6px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)" }}>
                  {"5-Star Google Reviews"}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="results" data-screen-label="Real People. Real Results." style={{ "padding": "70px 0px 62px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "52px" }}>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 68px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Real People."}
                <br className="sp-brk" />
                {" "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"Real Results."}
                </span>
              </h2>
              <p style={{ "margin": "20px auto 0px", "maxWidth": "620px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                {"Thousands of clients have seen real results with Credit Danny."}
              </p>
            </div>
            <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "14px" }}>
              {" "}
              <button type="button" aria-label="Previous" className="scp1" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 220ms cubic-bezier(0.4, 0, 0.2, 1), border-color 220ms cubic-bezier(0.4, 0, 0.2, 1), color 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 5.5 8 12l6.5 6.5" />
                </svg>
                {" "}
              </button>
              {" "}
              <div data-track="results" style={{ "display": "flex", "gap": "20px", "overflowX": "auto", "scrollSnapType": "x mandatory", "scrollbarWidth": "none", "flex": "1 1 auto", "padding": "4px" }}>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"498"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"715"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Steven B."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+217 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"520"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"797"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Eli G."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+277 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"542"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"736"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Natalie T."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+194 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"521"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"742"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Jorge G."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+221 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"563"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"771"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Samantha B."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+208 POINT INCREASE"}
                    </div>
                  </div>
                </div>
                <div style={{ "background": "radial-gradient(125% 125% at 0% 0%, rgb(8, 23, 31) 0%, rgb(6, 10, 12) 45%, rgb(5, 5, 5) 100%)", "border": "1px solid rgba(0, 173, 238, 0.16)", "borderRadius": "24px", "padding": "30px 28px", "color": "rgb(255, 255, 255)", "flex": "0 0 340px", "scrollSnapAlign": "start" }} className="sp-card">
                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "22px" }}>
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1" }} className="sp-score">
                        {"531"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"BEFORE"}
                      </div>
                    </div>
                    {" "}
                    <svg width="26" height="16" viewBox="0 0 22 16" fill="none">
                      <path d="M1 8H21M21 8L14 1M21 8L14 15" stroke="var(--color-blue-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {" "}
                    <div style={{ "textAlign": "center" }}>
                      <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "52px", "lineHeight": "1", "color": "var(--color-blue-400)" }} className="sp-score">
                        {"764"}
                      </div>
                      <div style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.16em", "color": "rgba(255, 255, 255, 0.55)" }}>
                        {"AFTER"}
                      </div>
                    </div>
                  </div>
                  <div style={{ "marginTop": "18px", "paddingTop": "16px", "borderTop": "1px solid rgba(255, 255, 255, 0.14)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "6px 14px" }}>
                    <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "19px", "textTransform": "uppercase" }}>
                      {"Daniel A."}
                    </div>
                    <div style={{ "fontSize": "13px", "fontWeight": "700", "letterSpacing": "0.06em", "color": "var(--color-success)" }}>
                      {"+233 POINT INCREASE"}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "left": "60px", "width": "110px", "background": "linear-gradient(270deg, rgba(5, 6, 8, 0), rgba(5, 6, 8, 0.92))", "pointerEvents": "none" }} className="sp-fade" />
              <div style={{ "position": "absolute", "top": "0px", "bottom": "0px", "right": "60px", "width": "110px", "background": "linear-gradient(90deg, rgba(5, 6, 8, 0), rgba(5, 6, 8, 0.92))", "pointerEvents": "none" }} className="sp-fade" />
              {" "}
              <button type="button" aria-label="Next" className="scp1" style={{ "flex": "0 0 auto", "width": "52px", "height": "52px", "borderRadius": "50%", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(24px)", "border": "1px solid rgba(255, 255, 255, 0.22)", "color": "rgba(255, 255, 255, 0.85)", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0px", "transition": "background 220ms cubic-bezier(0.4, 0, 0.2, 1), border-color 220ms cubic-bezier(0.4, 0, 0.2, 1), color 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                {" "}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 5.5 16 12l-6.5 6.5" />
                </svg>
                {" "}
              </button>
              {" "}
            </div>
          </div>
        </section>
        <section id="values" data-screen-label="Credit Repair With A Purpose" style={{ "padding": "70px 0px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(36px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Credit Repair With A Purpose ❤️"}
              </h2>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", "gap": "44px 32px" }} className="sp-values">
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-care" shape="rect" fit="contain" placeholder="We Care icon" style={{  }}>
                    <img loading="lazy" decoding="async" alt="" src="data:image/webp;base64,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" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Care"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"We're here to help hardworking people build a better life."}
                </p>
              </div>
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-invest" shape="rect" fit="contain" placeholder="We Invest icon" style={{  }}>
                    <img loading="lazy" decoding="async" alt="" src="data:image/webp;base64,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" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Invest"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"We invest our time, strategy, and resources so you can move forward."}
                </p>
              </div>
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-empower" shape="rect" fit="contain" placeholder="We Empower icon" style={{  }}>
                    <img loading="lazy" decoding="async" alt="" src="data:image/webp;base64,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" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Empower"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"We give you the tools, knowledge, and support to take control of your future."}
                </p>
              </div>
              <div style={{ "textAlign": "center" }}>
                <div style={{ "width": "104px", "height": "104px", "margin": "0px auto 20px" }}>
                  {" "}
                  <image-slot id="sp-icon-transform" shape="rect" fit="contain" placeholder="We Transform icon" style={{  }}>
                    <img loading="lazy" decoding="async" alt="" src="data:image/webp;base64,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" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
                  </image-slot>
                  {" "}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "34px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }}>
                  {"We Transform"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "16px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)", "textWrap": "pretty" }}>
                  {"Better credit. Better opportunities. Better futures."}
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
        <section id="process" data-screen-label="How The Sponsorship Program Works" style={{ "padding": "70px 0px", "background": "linear-gradient(rgb(5, 6, 8), rgb(7, 21, 39) 40%, rgb(5, 6, 8))" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "56px" }}>
              <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(36px, 4.4vw, 62px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"How The Sponsorship Program Works"}
              </h2>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", "gap": "20px" }}>
              <div className="scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "display": "flex", "flexDirection": "column", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "24px" }} className="sp-stat">
                  {"01"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Apply"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                  {"Complete a brief application detailing your current situation and financial/credit goals"}
                </p>
              </div>
              <div className="scp3" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "display": "flex", "flexDirection": "column", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "24px" }} className="sp-stat">
                  {"02"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Application Review"}
                </h3>
                <p style={{ "margin": "0px 0px 26px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                  <strong style={{ "color": "rgb(255, 255, 255)" }}>
                    {"REQUIRED:"}
                  </strong>
                  {" Activate SmartCredit so our team can review your credit and determine eligibility."}
                </p>
                {" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.smartcredit.com/?PID=52781" className="scp4" style={{ "marginTop": "auto", "alignSelf": "flex-start", "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "17px", "letterSpacing": "0.04em", "textTransform": "uppercase", "color": "var(--sc-btn-fg,#fff)", "background": "var(--sc-btn-bg,#0b71c3)", "border": "1px solid rgb(255, 255, 255)", "padding": "14px 26px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                  {"Activate Smart Credit"}
                </a>
                {" "}
              </div>
              <div className="scp2" style={{ "background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.1)", "borderRadius": "20px", "padding": "34px 28px", "display": "flex", "flexDirection": "column", "transition": "background 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "fontFamily": "var(--font-stat)", "fontSize": "46px", "lineHeight": "0.8", "color": "var(--color-blue-400)", "marginBottom": "24px" }} className="sp-stat">
                  {"03"}
                </div>
                <h3 style={{ "margin": "0px 0px 14px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "30px", "lineHeight": "1.06", "color": "rgb(255, 255, 255)" }}>
                  {"Launch Strategy"}
                </h3>
                <p style={{ "margin": "0px", "fontSize": "15px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.7)" }}>
                  {"If selected, our team personally handles the entire credit repair process for you using custom disputes and consumer law-based strategies tailored specifically to your unique credit profile."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" data-screen-label="Reviews" style={{ "position": "relative", "padding": "62px 0px", "background": "rgb(5, 6, 8)", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "28px" }}>
              <div>
                <div style={{ "fontSize": "11px", "fontWeight": "700", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--color-blue-400)", "marginBottom": "20px" }}>
                  {"Reviews"}
                </div>
                <h2 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(34px, 4vw, 56px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                  {"What Clients Are Saying"}
                </h2>
              </div>
              <Script src="https://cdn.trustindex.io/loader.js?28cdc397833c7456b6762a5982e" strategy="afterInteractive" />
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
        <section id="key" data-screen-label="Credit Danny Is The Key" style={{ "padding": "70px 0px", "background": "rgb(5, 6, 8)" }}>
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "textAlign": "center", "marginBottom": "52px" }}>
              <h2 style={{ "margin": "0px 0px 12px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
                {"Credit Danny Is The Key"}
              </h2>
              <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.75", "color": "rgba(255, 255, 255, 0.6)" }}>
                {"You'll work with me directly, and my team handles the rest."}
              </p>
            </div>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", "gap": "20px" }} className="sp-key">
              <div className="sp-keycard scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <circle cx="12" cy="12" r="8.5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="12" cy="12" r="1" />
                    <path d="M16.5 7.5 21 3" />
                    <path d="M17.5 3.2v3.3h3.3" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Custom Strategy"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Bespoke plans tailored to your credit profile."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
              <div className="sp-keycard scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M6 3h7l5 5v13H6z" />
                    <path d="M13 3v5h5" />
                    <path d="M9.3 15.3l1.6 1.6 3.4-3.5" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Legal Disputes"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Certified mail disputes leveraging FCRA violations."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
              <div className="sp-keycard scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M12 2.6l2.1 1.6 2.6-.3 1 2.4 2.4 1-.3 2.6L21.4 12l-1.6 2.1.3 2.6-2.4 1-1 2.4-2.6-.3L12 21.4l-2.1-1.6-2.6.3-1-2.4-2.4-1 .3-2.6L2.6 12l1.6-2.1-.3-2.6 2.4-1 1-2.4 2.6.3z" />
                    <path d="M8.8 12.1l2.2 2.2 4.2-4.4" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Active Support"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Real-time tracking and direct team access."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
              <div className="sp-keycard scp5" style={{ "position": "relative", "border": "1px solid rgba(255, 255, 255, 0.22)", "borderRadius": "22px", "padding": "34px 30px", "background": "linear-gradient(160deg, rgb(7, 8, 10) 0%, rgb(7, 18, 29) 55%, rgb(11, 77, 132) 130%)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "transition": "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "20px" }} className="sp-keyrow">
                  {" "}
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ "flexShrink": "0" }}>
                    <path d="M4 20V10" />
                    <path d="M10 20V4" />
                    <path d="M16 20v-7" />
                    <path d="M21 20H3" />
                  </svg>
                  {" "}
                  <h3 style={{ "margin": "0px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "lineHeight": "1.04", "color": "rgb(255, 255, 255)" }}>
                    {"Lasting Results"}
                  </h3>
                </div>
                <p style={{ "margin": "0px 0px 28px", "fontSize": "15px", "lineHeight": "1.7", "color": "rgba(255, 255, 255, 0.78)" }}>
                  {"Focused on long-term financial growth."}
                </p>
                <div style={{ "height": "2px", "marginTop": "auto", "borderRadius": "2px", "background": "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 173, 238, 0.35))" }} />
              </div>
            </div>
          </div>
        </section>
        <section id="success" data-screen-label="Sponsorship Program Success Stories" style={{ "position": "relative", "background": "linear-gradient(rgb(5, 6, 8), rgb(7, 21, 39) 40%, rgb(0, 0, 0))", "overflow": "hidden" }}>
          <div style={{ "position": "relative", "maxWidth": "1200px", "margin": "0px auto", "padding": "70px 40px 0px", "textAlign": "center" }}>
            <h2 style={{ "margin": "0px 0px 56px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(38px, 4.6vw, 64px)", "lineHeight": "0.94", "color": "rgb(255, 255, 255)" }}>
              {"Sponsorship Program Success Stories"}
            </h2>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="sp-story">
            <div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="27n6q03wh4" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
            <div>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"280+ Point Increase"}
                </span>
                {" & 12 Items Deleted In 30 Days 🏆"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She spent over a year and a half with another company… and saw zero results."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then she joined Project 500."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Within the first 30 days:"}
                </p>
                <ul style={{ "margin": "0px 0px 14px", "paddingLeft": "22px", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"12 negative items removed."}
                  </li>
                  <li style={{ "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                    {"280+ point increase across all three credit bureaus."}
                  </li>
                </ul>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Same situation… different execution."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Who you work with matters."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="sp-story sp-story-rev">
            <div style={{ "order": "1" }}>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"140+ Point Credit Increase…"}
                </span>
                {" Now She’s Chasing An 850 📈"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Her credit wasn’t ruined because she made reckless decisions."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"It started when someone she trusted used her information, setting her back before she ever had a real chance."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"For years, she watched friends and family buy homes, build wealth, and move forward, wondering if she’d ever have that same opportunity."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When the Credit Danny Sponsorship Program opened, she didn’t just believe in the process… She believed in Danny."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They grew up together, attended the same church, and she had watched his journey long before the success stories. She knew the work, integrity, and heart behind everything he was building."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"In just a few months, her credit increased by more than 140 points."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"For the first time in her life, lenders weren’t turning her away, they were reaching out with approvals and opportunities she had never experienced before."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Today, she no longer sees herself as someone with “bad credit.”"}
                  <br />
                  {"She sees someone with a future."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"And she’s not stopping here."}
                  <br />
                  {"Her next goal? An 850."}
                </p>
              </div>
            </div>
            <div style={{ "order": "2" }}>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="0gol1m54c4" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="sp-story">
            <div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="3bcxsh9hdw" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
            <div>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"One Decision"}
                </span>
                {" Changed Both Of Their Lives 🚀"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"For years, they kept putting off fixing their credit."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Not because they didn’t care… But because you don’t always realize how important your credit is until it starts closing doors."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When the Credit Danny Sponsorship Program opened, they decided it was finally time."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They completed their enrollment, submitted their information, and let our team take it from there."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Less than 30 days later, they couldn’t believe what they were seeing. His score had increased by 100+ points."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"He refreshed the screen over and over, convinced it had to be a mistake. Then he called his wife and told her to check hers. Another 60-point increase."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Together, they gained more than 150 points in less than 30 days."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"The best part wasn’t watching the numbers go up."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"It was knowing the same credit that once held them back from getting approved for a place to live was no longer standing in the way of the life they wanted to build together."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Sometimes all it takes is one decision… And the right team behind it."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="sp-story sp-story-rev">
            <div style={{ "order": "1" }}>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"120+ Point Increase…"}
                </span>
                {" Just In Time To Become A Dad 🎖️🏡"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Gage found Credit Danny after watching his cousin have over $32,000 in debt removed. Seeing someone he trusted get real results gave him the confidence to take a chance on himself."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Like so many people, Gage was never taught how credit worked. No one showed him how quickly one mistake could turn into years of setbacks."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"He had almost accepted that his best credit days were behind him."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then he joined the Credit Danny Sponsorship Program."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"In less than four months, his credit increased by 120+ points, and we’re not even halfway finished."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Today, Gage is in position to use the VA home loan benefits he earned through his military service to purchase a home."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"And the timing couldn’t be better."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"As he and his wife prepare to welcome their first baby, they’re no longer wondering if homeownership is possible…"}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They’re preparing for the next chapter of their lives."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Because when you have the right team in your corner, you’re not just rebuilding your credit. You’re building a future for your family."}
                </p>
              </div>
            </div>
            <div style={{ "order": "2" }}>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="s4s4iiz4mn" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 380px) minmax(300px, 1fr)", "gap": "56px", "alignItems": "center" }} className="sp-story">
            <div>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="sm8l88eucr" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
            <div>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                {"Life "}
                <span style={{ "color": "rgb(211, 47, 47)" }}>
                  {"Hurt"}
                </span>
                {" Her Credit. Danny Helped Her Reach The "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"700 Club"}
                </span>
                {" In 45 Days ❤️🏡"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Her dream was simple… To buy a home, give her family a place of their own, and build memories that would last a lifetime."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then life changed overnight."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"At just six days old, her daughter underwent heart surgery."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"When you’re fighting for your child’s life, your credit score becomes the last thing on your mind."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She joined our sponsorship program hoping for a second chance."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"In less than 45 days, she went from the 600s into the 700 Club."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She never paid Credit Danny a penny. The only thing she covered was her SmartCredit membership, while our team handled everything else from start to finish."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Because that’s what the sponsorship program was built for."}
                  <br />
                  {"Good people who were never held back by a lack of character…"}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"They were held back by life."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Now, she has something she hasn’t had in a long time."}
                  <br />
                  {"Hope that owning a home for her family is finally within reach."}
                </p>
              </div>
            </div>
          </div>
          <div style={{ "maxWidth": "1200px", "margin": "24px auto", "padding": "56px 48px", "borderRadius": "25px", "background": "rgba(25, 25, 25, 0.4)", "backdropFilter": "blur(68px)", "border": "1px solid rgba(255, 255, 255, 0.15)", "display": "grid", "gridTemplateColumns": "minmax(300px, 1fr) minmax(300px, 380px)", "gap": "56px", "alignItems": "center" }} className="sp-story sp-story-rev">
            <div style={{ "order": "1" }}>
              <h3 style={{ "margin": "0px 0px 22px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "60px", "lineHeight": "1", "color": "rgb(255, 255, 255)" }} className="sp-xl">
                {"Single Mom: "}
                <span style={{ "color": "rgb(12, 112, 195)" }}>
                  {"223 Point Increase"}
                </span>
                {" In Under 4 Months ❤️"}
              </h3>
              <div>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She wasn’t irresponsible."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She was overwhelmed."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"A full-time single mom working three jobs, doing everything she could just to keep food on the table. Like so many parents, her own financial future always came after everyone else’s."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"She trusted another credit repair company for an entire year."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Nothing changed."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Then she came to Credit Danny… In less than four months, over $10,000 in negative debt was removed, and her credit increased 223 points across all three credit bureaus."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"The biggest transformation wasn’t the score."}
                  <br />
                  {"It was finally believing that her past no longer had to define her future."}
                </p>
                <p style={{ "margin": "0px 0px 14px", "fontSize": "16px", "lineHeight": "1.75", "color": "rgb(255, 255, 255)" }}>
                  {"Because restored credit doesn’t just unlock financing."}
                  <br />
                  {"It creates opportunities, stability, and hope for families who deserve a second chance."}
                </p>
              </div>
            </div>
            <div style={{ "order": "2" }}>
              <div style={{ "borderRadius": "25px", "overflow": "hidden", "aspectRatio": "9 / 16", "justifySelf": "center", "width": "100%", "maxWidth": "360px", "position": "relative", "boxShadow": "rgba(12, 112, 195, 0.24) 0px 0px 70px 6px" }}>
                {" "}
                <wistia-player media-id="6oep76ji10" aspect="0.5625" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block" }} />
                {" "}
              </div>
            </div>
          </div>
          <div style={{ "height": "70px" }} />
        </section>
        <section id="who" data-screen-label="Who This Program Is For" style={{ "position": "relative", "padding": "70px 0px 180px", "background": "linear-gradient(rgb(0, 0, 0) 0%, rgb(3, 18, 31) 26%, rgb(6, 40, 69) 62%, rgb(10, 74, 128) 100%)", "overflow": "hidden" }}>
          <div style={{ "position": "absolute", "inset": "0px", "pointerEvents": "none", "opacity": "0" }} />
          <div style={{ "position": "relative", "maxWidth": "1280px", "margin": "0px auto", "padding": "0px 40px" }} className="sp-gutter">
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", "gap": "64px", "alignItems": "center" }}>
              <div>
                <h2 style={{ "margin": "0px 0px 30px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(36px, 4.4vw, 62px)", "lineHeight": "0.92", "color": "rgb(255, 255, 255)" }}>
                  {"Who This"}
                  <br />
                  {"Program Is For"}
                </h2>
                <p style={{ "margin": "0px 0px 20px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgba(255, 255, 255, 0.88)", "textWrap": "pretty" }}>
                  {"This program was created for people who know they deserve a second chance."}
                </p>
                <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.78", "color": "rgba(255, 255, 255, 0.88)", "textWrap": "pretty" }}>
                  {"For the hardworking individuals and families who are tired of being held back by their past… but may not currently be in the financial position to invest into our premium Credit Blueprint program."}
                </p>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "0px" }}>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"Individuals and families who are motivated to change"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"Those who want better credit and more opportunities"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px", "borderBottom": "1px solid rgba(255, 255, 255, 0.14)" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"People who need guidance, strategy, and real support"}
                  </p>
                </div>
                <div style={{ "display": "flex", "gap": "18px", "padding": "22px 0px" }}>
                  {" "}
                  <span style={{ "flexShrink": "0", "width": "24px", "height": "24px", "borderRadius": "50%", "background": "var(--color-blue-600)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "marginTop": "2px" }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4.5L4.2 7.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {" "}
                  <p style={{ "margin": "0px", "fontSize": "17px", "lineHeight": "1.6", "color": "rgb(255, 255, 255)" }}>
                    {"Those who are ready to take action and commit to the process"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="apply" data-screen-label="Ready To Apply" style={{ "position": "relative", "background": "linear-gradient(190deg, rgb(0, 0, 0) 0%, rgb(3, 18, 31) 45%, rgb(6, 40, 69) 100%)", "zIndex": "1" }}>
          <div style={{ "position": "relative", "height": "460px", "background": "linear-gradient(rgb(12, 112, 195) 0%, rgb(11, 106, 184) 45%, rgb(10, 93, 162) 100%)", "overflow": "hidden" }}>
            <div style={{ "position": "absolute", "inset": "0px" }}>
              {" "}
              <image-slot id="sp-apply-band" shape="rect" placeholder="Full-bleed photo band" style={{  }}>
                <img loading="lazy" decoding="async" alt="" src="data:image/webp;base64,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" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "cover", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
              </image-slot>
              {" "}
            </div>
            <div style={{ "position": "absolute", "left": "50%", "top": "56%", "transform": "translate(-50%, -50%)", "width": "min(520px, 60%)", "height": "180px" }}>
              {" "}
              <image-slot id="sp-apply-signature" shape="rect" fit="contain" placeholder="Daniel Radcliffe signature (transparent PNG)" style={{  }}>
                <img loading="lazy" decoding="async" alt="" src="data:image/webp;base64,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" style={{ "width": "100%", "height": "100%", "display": "block", "objectFit": "contain", "objectPosition": "50.00% 50.00%", "borderRadius": "0px" }} />
              </image-slot>
              {" "}
            </div>
          </div>
          <div style={{ "position": "absolute", "left": "50%", "top": "20px", "transform": "translate(-50%, -58%)", "zIndex": "2", "width": "min(560px, 100% - 48px)", "padding": "52px 44px 48px", "borderRadius": "28px", "border": "1px solid transparent", "background": "linear-gradient(rgba(6, 7, 9, 0.86), rgba(5, 14, 25, 0.86)) padding-box padding-box, linear-gradient(150deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 40%, rgba(255, 255, 255, 0.06) 70%, rgba(255, 255, 255, 0.22) 100%) border-box border-box", "backdropFilter": "blur(56px) saturate(160%)", "boxShadow": "rgba(255, 255, 255, 0.18) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px 32px 80px, rgba(0, 0, 0, 0.3) 0px 8px 24px", "textAlign": "center" }} className="sp-apply-card">
            <h2 style={{ "margin": "0px 0px 16px", "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "clamp(40px, 4.6vw, 60px)", "lineHeight": "0.94", "letterSpacing": "-0.005em", "color": "rgb(255, 255, 255)" }}>
              {"Ready To Apply?"}
            </h2>
            <p style={{ "margin": "0px auto 34px", "maxWidth": "400px", "fontSize": "16px", "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.72)", "textWrap": "pretty" }}>
              {"Spots are limited. Applications are reviewed carefully."}
            </p>
            {" "}
            <Link href="/sponsorship-apply/" className="sp-endcta scp6" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "20px", "letterSpacing": "0.03em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgba(255, 255, 255, 0.28)", "padding": "17px 38px", "borderRadius": "14px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.45) 0px 10px 30px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
              {"Apply for Sponsorship"}
            </Link>
            {" "}
          </div>
        </section>
        <div style={{ "height": "76px", "background": "rgb(0, 0, 0)" }} />
        <div style={{ "position": "fixed", "left": "0px", "right": "0px", "bottom": "0px", "zIndex": "70", "background": "rgba(5, 6, 8, 0.92)", "backdropFilter": "blur(18px)", "borderTop": "1px solid rgba(255, 255, 255, 0.12)" }} className="sp-sticky">
          <div style={{ "maxWidth": "1280px", "margin": "0px auto", "padding": "14px 40px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap" }} className="sp-cta">
            <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "textTransform": "uppercase", "fontSize": "26px", "color": "rgb(255, 255, 255)" }}>
              {"The Credit Danny "}
              <span style={{ "color": "rgb(12, 112, 195)" }}>
                {"Sponsorship Program"}
              </span>
            </div>
            {" "}
            <Link href="/sponsorship-apply/" className="scp7" style={{ "fontFamily": "var(--font-display)", "fontWeight": "750", "fontSize": "16px", "letterSpacing": "0.05em", "textTransform": "uppercase", "color": "rgb(255, 255, 255)", "background": "rgb(11, 113, 195)", "border": "1px solid rgb(255, 255, 255)", "padding": "12px 27px", "borderRadius": "16px", "display": "inline-flex", "boxShadow": "rgba(11, 113, 195, 0.55) 0px 8px 28px, rgba(11, 113, 195, 0.45) 0px 2px 10px", "transition": "background 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1)" }}>
              {"Apply Now"}
            </Link>
            {" "}
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270417 current_page_item menu-item-27269543">
                      <Link href="/sponsorship/" aria-current="page" className="elementor-item elementor-item-active">
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262558">
                      <Link href="/home-buying-blueprint/" className="elementor-item">
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-27270417 current_page_item menu-item-27269543">
                      <Link href="/sponsorship/" aria-current="page" className="elementor-item elementor-item-active" tabIndex={-1}>
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
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27262558">
                      <Link href="/home-buying-blueprint/" className="elementor-item" tabIndex={-1}>
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
      <SponsorshipEffects />
      <OttoSeo />
    </>
  );
}

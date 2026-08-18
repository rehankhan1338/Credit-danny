import type { Metadata } from "next";
import Link from "next/link";
import BodyClass from "@/components/BodyClass";
import SharedNavCdmNav from "@/components/shared/SharedNavCdmNav";
import SharedHeaderTop from "@/components/shared/SharedHeaderTop";
import SharedFooterCdPad from "@/components/shared/SharedFooterCdPad";
import {
  getCategoryBySlug,
  getCategoryPosts,
  stripHtml,
  readingMinutes,
  postPath,
  featuredImage,
  longDate,
  shortDate,
} from "@/lib/wp";
import "@/public/assets/css/pages/index.css";
import "./category.css";

/**
 * /category/credit-insights/ — the Credit Insights archive, now served by
 * Next.js. Post data is fetched from the WordPress REST API and revalidated
 * hourly, so posts published in wp-admin appear here automatically.
 * Head metadata + JSON-LD are ported verbatim from the live WP archive
 * (same URL, same canonical — no SEO change).
 */
export const revalidate = 3600;

const CANONICAL = "https://creditdanny.com/category/credit-insights/";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Credit Insights Archives | Credit Danny",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: { canonical: CANONICAL },
    openGraph: {
      locale: "en_US",
      type: "article",
      title: "Credit Insights Archives | Credit Danny",
      url: CANONICAL,
      siteName: "Credit Danny",
      images: [
        {
          url: "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
          secureUrl: "https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg",
          width: 1200,
          height: 630,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Credit Insights Archives | Credit Danny",
      images: ["https://creditdanny.com/wp-content/uploads/2026/01/creditdanny_ogimg.jpg"],
    },
    icons: {
      icon: [
        { url: "/assets/img/heartfavicon-150x150.png", sizes: "32x32" },
        { url: "/assets/img/heartfavicon-300x300.png", sizes: "192x192" },
      ],
      apple: [{ url: "/assets/img/heartfavicon-300x300.png" }],
    },
  };
}

export const viewport = {
  themeColor: "#000000",
};

const JSON_LD =
  '{"@context":"https://schema.org","@graph":[{"@type":"Person","@id":"https://creditdanny.com/#person","name":"Credit Danny","sameAs":["https://www.instagram.com/creditdanny/","https://www.tiktok.com/@creditdanny"],"image":{"@type":"ImageObject","@id":"https://creditdanny.com/#logo","url":"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png","contentUrl":"https://creditdanny.com/wp-content/uploads/2025/03/credit-danny-logo-black2.png","caption":"Credit Danny","inLanguage":"en-US","width":"1394","height":"261"}},{"@type":"WebSite","@id":"https://creditdanny.com/#website","url":"https://creditdanny.com","name":"Credit Danny","alternateName":"Elevate Financial Services","publisher":{"@id":"https://creditdanny.com/#person"},"inLanguage":"en-US"},{"@type":"BreadcrumbList","@id":"https://creditdanny.com/category/credit-insights/#breadcrumb","itemListElement":[{"@type":"ListItem","position":"1","item":{"@id":"https://creditdanny.com","name":"Home"}},{"@type":"ListItem","position":"2","item":{"@id":"https://creditdanny.com/category/credit-insights/","name":"Credit Insights"}}]},{"@type":"CollectionPage","@id":"https://creditdanny.com/category/credit-insights/#webpage","url":"https://creditdanny.com/category/credit-insights/","name":"Credit Insights Archives | Credit Danny","isPartOf":{"@id":"https://creditdanny.com/#website"},"inLanguage":"en-US","breadcrumb":{"@id":"https://creditdanny.com/category/credit-insights/#breadcrumb"}}]}';

const BODY_CLASS =
  "archive category category-credit-insights category-49 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor cd-blog cd-blog-archive eio-default hello-elementor-default elementor-default elementor-kit-27255861";

const PILL_INACTIVE: React.CSSProperties = {
  textDecoration: "none",
  background: "rgb(242, 242, 242)",
  color: "rgb(0, 0, 0)",
  borderRadius: 999,
  padding: "9px 20px",
  fontSize: 13,
  fontWeight: 700,
};
const PILL_ACTIVE: React.CSSProperties = {
  ...PILL_INACTIVE,
  background: "rgb(12, 112, 195)",
  color: "rgb(255, 255, 255)",
};

export default async function CreditInsightsArchive() {
  const category = await getCategoryBySlug("credit-insights");
  const posts = await getCategoryPosts(category.id);
  const [featured, ...rest] = posts;

  return (
    <>
      <BodyClass className={BODY_CLASS} />
      <meta name="twitter:label1" content="Posts" />
      <meta name="twitter:data1" content={String(category.count)} />
      <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html: JSON_LD }} />

      <div id="menu" style={{ "position": "fixed", "inset": "0", "zIndex": "200", "background": "linear-gradient(180deg,#000 0%,#06243f 45%,#0b3a63 100%)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "flex-start", "padding": "38px 40px 46px", "overflowY": "auto", "animation": "cd-menu-iris .62s cubic-bezier(.76,0,.24,1) both" } as React.CSSProperties} data-menu-panel="">
        <button type="button" aria-label="Close menu" style={{ "position": "absolute", "top": "32px", "right": "40px", "width": "52px", "height": "52px", "borderRadius": "10px", "background": "transparent", "border": "2px solid #0C70C3", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "padding": "0", "transition": "background .2s ease,border-color .2s ease", "animation": "cd-menu-close .5s cubic-bezier(.34,1.56,.64,1) .34s both" } as React.CSSProperties} className="cdm-h0">
          {" "}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
          {" "}
        </button>
        <Link href="/" aria-label="Credit Danny home">
          <img src="/assets/img/logo-white.png" alt="Credit Danny" style={{ "width": "min(760px,72vw)", "height": "auto", "display": "block", "margin": "14px 0 54px", "animation": "cd-menu-mark .6s cubic-bezier(.22,1,.36,1) .16s both" } as React.CSSProperties} />
        </Link>
        <SharedNavCdmNav />
        <div style={{ "display": "flex", "alignItems": "center", "gap": "34px", "marginTop": "54px", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) .92s both" } as React.CSSProperties}>
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

      <SharedHeaderTop />

      <div id="cdb">
        <div id="archive" style={{ position: "relative" }}>
          {/* hero — verbatim from the live archive */}
          <div style={{ background: "linear-gradient(220deg, rgb(0, 0, 0) 28%, rgb(12, 112, 195) 98%)", position: "relative" }}>
            <div className="cdb-hero-pad" style={{ position: "relative", padding: "64px 60px 150px", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 3, color: "rgb(0, 173, 238)", textTransform: "uppercase" }}>
                {"Credit education from Danny"}
              </div>
              <h1 style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 82, lineHeight: 1.02, textTransform: "uppercase", color: "rgb(255, 255, 255)", marginTop: 14, fontWeight: 400 }}>
                {"The Credit Danny Blog"}
              </h1>
              <div style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.8)", maxWidth: 640, margin: "18px auto 0px" }}>
                {"Straight answers on credit repair, mortgage prep, and buying a home in Arizona. Written by the team that removed 6,000+ late payments."}
              </div>
            </div>
          </div>

          {/* featured post (newest) */}
          {featured && (
            <div className="cdb-cards-pad" style={{ padding: "0px 60px", marginTop: -110, position: "relative" }}>
              <div className="cdb-feat-wrap" style={{ background: "rgb(255, 255, 255)", borderRadius: 25, boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px", display: "grid", gridTemplateColumns: "minmax(300px, 1.05fr) minmax(380px, 1fr)", overflow: "hidden" }}>
                <a className="cdb-feat-link" href={postPath(featured)} style={{ display: "block", textDecoration: "none" }} aria-label={stripHtml(featured.title.rendered)}>
                  <div className="cdb-feat-img" style={{ background: `url(${featuredImage(featured, "large") ?? ""}), linear-gradient(160deg, rgb(0, 6, 58), rgb(0, 173, 238)) 0% 0% / cover`, backgroundSize: "cover", backgroundPosition: "center", minHeight: 320 }} />
                </a>
                <div style={{ padding: "44px 44px 40px" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ background: "rgb(12, 112, 195)", color: "rgb(255, 255, 255)", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 0.6 }}>FEATURED</span>
                    <span style={{ background: "rgb(234, 245, 255)", color: "rgb(12, 112, 195)", borderRadius: 999, padding: "6px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 0.6 }}>{category.name.toUpperCase()}</span>
                  </div>
                  <div style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 44, lineHeight: 1.06, textTransform: "uppercase", color: "rgb(0, 0, 0)", marginTop: 20, textWrap: "pretty" }}>
                    <a href={postPath(featured)} style={{ color: "inherit", textDecoration: "none" }}>{stripHtml(featured.title.rendered)}</a>
                  </div>
                  <div style={{ fontSize: 16, lineHeight: 1.65, color: "rgb(90, 90, 90)", marginTop: 16 }}>
                    {stripHtml(featured.excerpt.rendered)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 26, fontSize: 13, fontWeight: 600, color: "rgb(90, 90, 90)" }}>
                    <span>Credit Danny</span>
                    <span style={{ color: "rgb(217, 217, 217)" }}>•</span>
                    <span>{longDate(featured.date)}</span>
                    <span style={{ color: "rgb(217, 217, 217)" }}>•</span>
                    <span>{readingMinutes(featured.content.rendered)} min read</span>
                  </div>
                  <div style={{ display: "flex", marginTop: 26 }}>
                    <a href={postPath(featured)} style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontWeight: 400, textTransform: "uppercase", letterSpacing: 0.2, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 16, padding: "9px 18px", borderRadius: 8, background: "rgb(12, 112, 195)", color: "rgb(255, 255, 255)", boxShadow: "0 0 24px rgba(12,112,195,.55)" }}>
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* category pills */}
          <div className="cdb-cards-pad" style={{ padding: "40px 60px 0px", display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/blog/" style={PILL_INACTIVE}>All Posts</a>
            <a href="/category/credit-insights/" style={PILL_ACTIVE}>Credit Insights</a>
            <a href="/category/mortgage-insights/" style={PILL_INACTIVE}>Mortgage Insights</a>
            <a href="/category/mortgage-repair-and-prep/" style={PILL_INACTIVE}>Mortgage Repair and Prep</a>
          </div>

          {/* post grid — everything after the featured post */}
          <div id="cdb-grid" style={{ padding: "24px 60px 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {rest.map((post) => (
              <a key={post.id} href={postPath(post)} style={{ textDecoration: "none", color: "inherit", display: "block" }} className="cdb-card cdb-post-card">
                <div style={{ background: "rgb(255, 255, 255)", borderRadius: 25, boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px", overflow: "hidden" }}>
                  <div style={{ height: 190, backgroundImage: `url(${featuredImage(post, "medium_large") ?? ""}), linear-gradient(160deg, rgb(0, 6, 58), rgb(0, 173, 238))`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div style={{ padding: "24px 24px 28px" }}>
                    <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.4, color: "rgb(12, 112, 195)" }}>{category.name.toUpperCase()}</div>
                    <div style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 25, lineHeight: 1.1, textTransform: "uppercase", color: "rgb(0, 0, 0)", marginTop: 10, textWrap: "pretty" }}>
                      {stripHtml(post.title.rendered)}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "rgb(90, 90, 90)", marginTop: 14 }}>
                      <span className="cdb-long">{longDate(post.date)} • {readingMinutes(post.content.rendered)} min read</span>
                      <span className="cdb-short">{shortDate(post.date)} • {readingMinutes(post.content.rendered)} min</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <SharedFooterCdPad />
    </>
  );
}

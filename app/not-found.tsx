import Link from "next/link";

/** Branded 404 in the site's design language. */
export default function NotFound() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", background: "linear-gradient(220deg, rgb(0, 0, 0) 28%, rgb(12, 112, 195) 98%)", padding: "80px 24px" }}>
      <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 3, color: "rgb(0, 173, 238)", textTransform: "uppercase" }}>404</div>
      <h1 style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', fontSize: 64, lineHeight: 1.05, textTransform: "uppercase", color: "#fff", marginTop: 14, fontWeight: 400 }}>
        Page not found
      </h1>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "18px auto 0" }}>
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', textTransform: "uppercase", textDecoration: "none", background: "rgb(12, 112, 195)", color: "#fff", padding: "11px 22px", borderRadius: 8, boxShadow: "0 0 24px rgba(12,112,195,.55)", fontSize: 16 }}>
          Back to Home
        </Link>
        {/* /blog/ is WordPress-proxied, not a Next route — full navigation by design */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/blog/" style={{ fontFamily: '"Podium Sharp", Impact, sans-serif', textTransform: "uppercase", textDecoration: "none", background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.6)", padding: "9px 22px", borderRadius: 8, fontSize: 16 }}>
          Visit the Blog
        </a>
      </div>
    </div>
  );
}

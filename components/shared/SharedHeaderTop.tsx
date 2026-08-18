import Link from "next/link";

export default function SharedHeaderTop() {
  return (
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
          <Link href="/get-started/" className="cd-hov-cta cd-cta" style={{ "display": "inline-flex", "alignItems": "center", "height": "40px", "padding": "0px 24px", "background": "rgb(0, 0, 0)", "color": "rgb(255, 255, 255)", "borderRadius": "10px", "fontFamily": "var(--font-display)", "fontSize": "20px", "letterSpacing": "0.03em", "borderWidth": "1px", "borderStyle": "solid", "borderColor": "var(--color-white)", "fontWeight": "700", "boxShadow": "rgba(12, 112, 195, 0.65) 0px 0px 18px, rgba(12, 112, 195, 0.35) 0px 0px 44px", "transition": "background 0.2s, color 0.2s, border-color 0.2s", "cursor": "pointer" }}>
            {"Get Started"}
          </Link>
          {" "}
        </nav>
      </div>
    </header>
  );
}

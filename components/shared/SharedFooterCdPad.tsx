import Link from "next/link";

export default function SharedFooterCdPad() {
  return (
    <footer style={{ "background": "rgb(0, 0, 0)", "borderTop": "1px solid rgba(255, 255, 255, 0.09)", "padding": "26px 40px" }} className="cd-pad">
      <div style={{ "maxWidth": "1180px", "margin": "0px auto", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "flexWrap": "wrap", "fontSize": "12px", "color": "rgba(255, 255, 255, 0.42)" }}>
        {" "}
        <span style={{  }}>
          {"© 2026 Elevate Financial Services, LLC"}
        </span>
        {" "}
        <div style={{ "display": "flex", "gap": "26px" }}>
          {" "}
          <Link href="/privacy-policy/" className="cd-hov-legal" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Privacy Policy"}
          </Link>
          {" "}
          <Link href="/terms-and-conditions/" className="cd-hov-legal" style={{ "color": "inherit", "transition": "color 0.18s", "cursor": "pointer" }}>
            {"Terms and Conditions"}
          </Link>
          {" "}
        </div>
      </div>
    </footer>
  );
}

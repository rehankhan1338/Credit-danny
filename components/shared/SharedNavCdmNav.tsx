import Link from "next/link";

export default function SharedNavCdmNav() {
  return (
    <nav className="cdm-nav">
      <div className="cdm-col cdm-col-p">
        <Link href="/plans/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.300s both", "cursor": "pointer" }} className="cdm-h1 cdm-m1">
          {"Our Plans"}
        </Link>
        {" "}
        <Link href="/blueprint/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.350s both", "cursor": "pointer" }} className="cdm-h1 cdm-m2">
          {"Credit Blueprint"}
        </Link>
        {" "}
        <Link href="/sponsorship/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.400s both", "cursor": "pointer" }} className="cdm-h1 cdm-m3">
          {"Apply For Free Credit Repair"}
        </Link>
        {" "}
        <Link href="/accelerator/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.450s both", "cursor": "pointer" }} className="cdm-h1 cdm-m4">
          {"Credit Accelerator"}
        </Link>
        {" "}
        <Link href="/transformations/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.500s both", "cursor": "pointer" }} className="cdm-h1 cdm-m9">
          {"Our Credit Transformations"}
        </Link>
        {" "}
        <Link href="/home-buying-blueprint/" style={{ "fontSize": "clamp(26px,2.1vw,38px)", "letterSpacing": ".02em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.550s both", "cursor": "pointer" }} className="cdm-h1 cdm-m5">
          {"The 90 Day Home Buying Blueprint"}
        </Link>
      </div>
      <div className="cdm-rule" aria-hidden="true" />
      <div className="cdm-col cdm-col-s">
        <Link href="/about/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.330s both", "cursor": "pointer" }} className="cdm-h1 cdm-m7">
          {"About Credit Danny"}
        </Link>
        {" "}
        <Link href="/team/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.380s both", "cursor": "pointer" }} className="cdm-h1 cdm-m8">
          {"Meet the Team"}
        </Link>
        {" "}
        <Link href="/blueprint-strategy/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.430s both", "cursor": "pointer" }} className="cdm-h1 cdm-m6">
          {"Book A Consultation"}
        </Link>
        {" "}
        <Link href="/#guarantee" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.480s both", "cursor": "pointer" }} className="cdm-h1 cdm-m11">
          {"Money Back Guarantee"}
        </Link>
        {" "}
        <Link href="/#reviews" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.530s both", "cursor": "pointer" }} className="cdm-h1 cdm-m10">
          {"Reviews"}
        </Link>
        {" "}
        <Link href="/mentorship/" style={{ "fontSize": "clamp(18px,1.45vw,26px)", "letterSpacing": ".08em", "color": "#fff", "fontFamily": "var(--font-display)", "lineHeight": "1", "textTransform": "uppercase", "transition": "color .18s ease", "animation": "cd-menu-rise .55s cubic-bezier(.22,1,.36,1) 0.580s both", "cursor": "pointer" }} className="cdm-h1 cdm-m12">
          {"Credit Danny Mentorship"}
        </Link>
      </div>
    </nav>
  );
}

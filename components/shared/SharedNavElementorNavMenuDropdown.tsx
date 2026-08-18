import Link from "next/link";

export default function SharedNavElementorNavMenuDropdown() {
  return (
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
  );
}

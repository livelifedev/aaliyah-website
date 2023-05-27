import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
// import menuStyles from "../styles/Menu.module.css";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <nav
        className={`${styles.nav} ${
          router.pathname === "/" ? styles.navHome : ""
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/services">Services</Link>
        <Link href="/">Shop</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className={styles.mobileNav}>
        <img
          className={styles.mobileLogo}
          src="/images/aaliyah-logo.png"
          alt="Aaliyah Rubio"
        />
        <Menu right>
          <Link className="menu-item" href="/">
            Home
          </Link>
          <Link className="menu-item" href="/about">
            About Me
          </Link>
          <Link className="menu-item" href="/services">
            Services
          </Link>
          <Link className="menu-item" href="/">
            Shop
          </Link>
          <Link className="menu-item" href="/contact">
            Contact
          </Link>
        </Menu>
      </div>
    </>
  );
}

export { Navbar };

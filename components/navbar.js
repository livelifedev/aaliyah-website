import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import styles from "../styles/Navbar.module.css";
// import menuStyles from "../styles/Menu.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/services">Services</Link>
        <Link href="/">Contact</Link>
      </nav>
      <div className={styles.mobileNav}>
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
            Contact
          </Link>
        </Menu>
      </div>
    </>
  );
}

export { Navbar };

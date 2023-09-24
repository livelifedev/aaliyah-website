import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import styles from "../styles/Layout.module.css";
import { Navbar } from "./navbar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {/* <Navbar /> */}
      <div className={styles.logoBar}>
        <img src="/images/aaliyah-logo.png" alt="" width="100px" />
      </div>
      <main className={styles.main}>{children}</main>
      {/* <Navbar /> */}
      <footer className={styles.footer}>
        {/* <nav>
          <Link href="/about">About Me</Link>
          <Link href="/services">Services</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav> */}
        {/* <div>
          <img src="/images/aaliyah-logo.png" alt="" width="100px" />
        </div> */}
        <div></div>
        <a
          href="https://www.instagram.com/theaaliyahrubio/"
          className={styles.instaLink}
        >
          <BsInstagram aria-label="Instagram" />
        </a>
        <div></div>
      </footer>
    </div>
  );
}

export { Layout };

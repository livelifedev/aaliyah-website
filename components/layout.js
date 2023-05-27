import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import styles from "../styles/Layout.module.css";
import { Navbar } from "./navbar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.logoBar}>
        <img src="/images/aaliyah-logo.png" alt="Aaliyah Rubio" width="100px" />
      </div>
      <main className={styles.main}>{children}</main>
      {/* <Navbar /> */}
      <footer className={styles.footer}>
        <nav>
          <Link href="/about">About Me</Link>
          <Link href="/services">Services</Link>
          <Link href="/">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          <img
            src="/images/aaliyah-logo.png"
            alt="Aaliyah Rubio"
            width="100px"
          />
        </div>
        <a href="" className={styles.instaLink}>
          <BsInstagram />
        </a>
      </footer>
    </div>
  );
}

export { Layout };

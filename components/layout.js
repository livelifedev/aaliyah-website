import styles from "../styles/Layout.module.css";
import { Navbar } from "./navbar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      {/* <Navbar /> */}
      <footer className={styles.footer}>
        <p>&copy; 2023 Aaliyah Rubio</p>
      </footer>
    </div>
  );
}

export { Layout };

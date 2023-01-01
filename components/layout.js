import styles from "../styles/Layout.module.css";
import { Navbar } from "./navbar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Navbar />
    </div>
  );
}

export { Layout };

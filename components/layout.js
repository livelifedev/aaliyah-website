import styles from "../styles/Layout.module.css";
import { Navbar } from "./navbar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export { Layout };

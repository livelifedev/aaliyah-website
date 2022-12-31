import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About Me</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };

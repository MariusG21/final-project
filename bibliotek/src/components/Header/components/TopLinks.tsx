import { Link } from "react-router";
import styles from "./TopLinks.module.css";

export function TopLinks() {
  return (
    <nav className={styles["top-links"]}>
      <Link to="/">contact us</Link>
      <Link to="/">faq</Link>
      <Link to="/">terms of service</Link>
      <Link to="/">support</Link>
    </nav>
  );
}

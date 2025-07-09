import { FiMenu } from "react-icons/fi";
import styles from "./HamburgerMenu.module.css";

export function HamburgerMenu() {
  return (
    <div className={styles["hamburger-menu"]}>
      <FiMenu />
    </div>
  );
}

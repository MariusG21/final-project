import { Link } from "react-router";
import logoHolder from "@/assets/images/logoHolder.svg";
import logoHolderSmall from "@/assets/images/logo-holder-small.png";
import logo from "@/assets/images/logo.png";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles["logo-container"]}>
      <picture>
        <source media="(max-width: 768px)" srcSet={logoHolderSmall} />
        <img src={logoHolder} className={styles["logo-holder"]} />
      </picture>
      <Link to="/" className={styles["wrapper"]}>
        <img className={styles["logo"]} src={logo} alt="" />
        <span className={styles["logo-text"]}>Bibliotek</span>
      </Link>
    </div>
  );
}

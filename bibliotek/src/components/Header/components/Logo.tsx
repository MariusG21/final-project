import { Link } from "react-router";
import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import logoHolder from "@/assets/images/logoHolder.svg";
import logoHolderSmall from "@/assets/images/logo-holder-small.png";
import logo from "@/assets/images/logo.png";
import styles from "./Logo.module.css";

export function Logo() {
  const { isSmall } = useScreenSizeContext();

  return (
    <div className={styles["logo-container"]}>
      <img
        src={isSmall ? logoHolderSmall : logoHolder}
        className={
          isSmall ? styles["logo-holder-small"] : styles["logo-holder"]
        }
      />
      <Link to="/" className={styles["wrapper"]}>
        <img className={styles["logo"]} src={logo} alt="" />
        {!isSmall && <span className={styles["logo-text"]}>Bibliotek</span>}
      </Link>
    </div>
  );
}

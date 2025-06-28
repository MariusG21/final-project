import { Link } from "react-router";
import styles from "./AuthFooter.module.css";

type AuthFooterProps = {
  text: string;
  linkTo: string;
  linkText: string;
};

export function AuthFooter({ text, linkTo, linkText }: AuthFooterProps) {
  return (
    <div className={styles["auth-footer"]}>
      <p>{text}</p>
      <Link to={linkTo} className={styles["auth-link"]}>
        {linkText}
      </Link>
    </div>
  );
}

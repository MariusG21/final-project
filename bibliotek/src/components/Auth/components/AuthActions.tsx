import { Link } from "react-router";
import styles from "./AuthActions.module.css";

type AuthActionsProps = {
  submitText: string;
  cancelLink: string;
};

export function AuthActions({ submitText, cancelLink }: AuthActionsProps) {
  return (
    <div className={styles["auth-actions"]}>
      <button type="submit" className={styles["auth-button"]}>
        {submitText}
      </button>
      <Link to={cancelLink} className={styles["cancel-auth"]}>
        Cancel
      </Link>
    </div>
  );
}

import { Link } from "react-router";
import styles from "./ReadButton.module.css";

type ReadButtonProps = {
  id: string;
};

export function ReadButton({ id }: ReadButtonProps) {
  return (
    <Link to={`/read/${id}`} className={styles["read-border"]}>
      <div className={styles["read-button"]}>Read</div>
    </Link>
  );
}

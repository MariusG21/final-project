import type { CartBook } from "@/types/Book";
import styles from "./BookActions.module.css";

type BookActionsProps = Pick<CartBook, "id">;

export function BookActions({ id }: BookActionsProps) {
  return (
    <div className={styles["book-actions"]}>
      <div role="button" className={styles["remove-button"]}>
        Remove
      </div>
      <div role="button" className={styles["bookmark-and-remove-button"]}>
        Save for Later
      </div>
    </div>
  );
}

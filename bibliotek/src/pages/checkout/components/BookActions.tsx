import styles from "./BookActions.module.css";

export function BookActions() {
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

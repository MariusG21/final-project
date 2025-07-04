import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import styles from "./BookInfo.module.css";

export function BookInfo() {
  return (
    <>
      <div className={styles["book-info"]}>
        <div className={styles["book-title"]}>
          <span className={styles["label"]}>Title:</span>The Count of Monte
          Cristo
        </div>
        <div className={styles["book-author"]}>
          <span className={styles["label"]}>Author:</span>lorem
        </div>
        <div className={styles["discount"]}>
          <span className={styles["label"]}>Discount:</span>10%
        </div>
        <div className={styles["price"]}>
          <span className={styles["label"]}>Price:</span>$10.99
        </div>
      </div>
      <SeparatorLine />
    </>
  );
}

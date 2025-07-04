import { BookActions } from "./BookActions";
import { BookInfo } from "./BookInfo";
import styles from "./BookDetails.module.css";

export function BookDetails() {
  return (
    <div className={styles["book-details"]}>
      <BookInfo />
      <BookActions />
    </div>
  );
}

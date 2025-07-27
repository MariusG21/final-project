import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";
import styles from "./BookDetails.module.css";

type BookDetailsProps = Pick<BookmarkedBookType, "title" | "author">;

export function BookDetails({ title, author }: BookDetailsProps) {
  return (
    <div className={styles["book-details"]}>
      <div className={styles["book-title"]}>{title}</div>
      <div className={styles["book-author"]}>{author}</div>
    </div>
  );
}

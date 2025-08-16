import type { Book } from "@/types/Book";
import styles from "./SimBookDetails.module.css";

type SimBookDetailsProps = Pick<Book, "title" | "author">;

export function SimBookDetails({ title, author }: SimBookDetailsProps) {
  return (
    <div className={styles["book-info"]}>
      <p className={styles["book-title"]}>{title}</p>
      <p>by</p>
      <p className={styles["book-author"]}>{author}</p>
    </div>
  );
}

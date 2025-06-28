import type { SimilarBook } from "@/types/Book";
import styles from "./SimBook.module.css";
import { Link } from "react-router";

type SimilarBookProps = {
  similarBook: SimilarBook;
};

export function SimBook({ similarBook }: SimilarBookProps) {
  return (
    <Link to={`/books/${similarBook.id}`} className={styles["book-card"]}>
      <img
        draggable="false"
        src={similarBook.image}
        alt={similarBook.title}
        className={styles["book-cover"]}
      />
      <div className={styles["book-info"]}>
        <p className={styles["book-title"]}>{similarBook.title}</p>
        <p>by</p>
        <p className={styles["book-author"]}>{similarBook.author}</p>
      </div>
    </Link>
  );
}

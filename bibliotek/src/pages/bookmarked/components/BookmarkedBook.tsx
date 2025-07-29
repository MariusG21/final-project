import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";
import { BookMedia } from "./BookMedia";
import { BookActions } from "./BookActions";
import styles from "./BookmarkedBook.module.css";

type BookmarkedBookProps = {
  book: BookmarkedBookType;
};

export function BookmarkedBook({ book }: BookmarkedBookProps) {
  return (
    <div className={styles["bookmarked-book"]}>
      <BookMedia book={book} />
      <BookActions id={book.id} />
    </div>
  );
}

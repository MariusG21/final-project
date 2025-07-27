import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";
import { BookMedia } from "./BookMedia";
import { ReadButton } from "./ReadButton";
import styles from "./BookmarkedBook.module.css";

type BookmarkedBookProps = {
  book: BookmarkedBookType;
};

export function BookmarkedBook({ book }: BookmarkedBookProps) {
  return (
    <div className={styles["bookmarked-book"]}>
      <BookMedia book={book} />
      <ReadButton id={book.id} />
    </div>
  );
}

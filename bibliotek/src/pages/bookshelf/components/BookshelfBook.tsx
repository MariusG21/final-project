import type { BookshelfBookType } from "@/types/Book";
import styles from "./BookshelfBook.module.css";
import { BookMedia } from "./BookMedia";
import { ReadButton } from "./ReadButton";

type BookshelfBookProps = {
  book: BookshelfBookType;
};

export function BookshelfBook({ book }: BookshelfBookProps) {
  return (
    <div className={styles["bookshelf-book"]}>
      <BookMedia book={book} />
      <ReadButton id={book.id} />
    </div>
  );
}

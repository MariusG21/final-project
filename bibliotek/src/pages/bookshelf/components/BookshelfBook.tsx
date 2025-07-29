import { ReadButton } from "@/components/Buttons/ReadButton";
import type { BookshelfBookType } from "@/types/Book";
import { BookMedia } from "./BookMedia";
import styles from "./BookshelfBook.module.css";

type BookshelfBookProps = {
  book: BookshelfBookType;
};

export function BookshelfBook({ book }: BookshelfBookProps) {
  return (
    <div className={styles["bookshelf-book"]}>
      <BookMedia book={book} />
      <ReadButton id={book.id} borderRadius={5} />
    </div>
  );
}

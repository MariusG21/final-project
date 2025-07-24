import type { BookshelfBookType } from "@/types/Book";
import { BookshelfBook } from "./BookshelfBook";
import styles from "./BookshelfBooksGrid.module.css";

type BookshelfBooksGridProps = {
  books: BookshelfBookType[];
};

export function BookshelfBooksGrid({ books }: BookshelfBooksGridProps) {
  return (
    <div className={styles["bookshelf-grid"]}>
      {books.map((book) => (
        <BookshelfBook book={book} />
      ))}
    </div>
  );
}

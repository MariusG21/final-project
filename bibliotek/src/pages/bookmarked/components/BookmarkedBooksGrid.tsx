import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";
import { BookmarkedBook } from "./BookmarkedBook";
import styles from "./BookmarkedBooksGrid.module.css";

type BookmarkedBooksGridProps = {
  books: BookmarkedBookType[];
};

export function BookmarkedBooksGrid({ books }: BookmarkedBooksGridProps) {
  return (
    <div className={styles["bookmarked-grid"]}>
      {books.map((book) => (
        <BookmarkedBook key={book.id} book={book} />
      ))}
    </div>
  );
}

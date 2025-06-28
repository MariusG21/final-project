import type { BookPreview } from "@/types/Book";
import { BookCard } from "./BookCard";
import styles from "./BooksGrid.module.css";

type BooksGridProps = {
  books: BookPreview[];
};

export function BooksGrid({ books }: BooksGridProps) {
  return (
    <div className={styles["books-grid"]}>
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}

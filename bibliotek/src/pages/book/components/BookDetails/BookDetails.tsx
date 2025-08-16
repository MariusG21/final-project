import type { Book } from "@/types/Book";
import { BookCoverImage } from "./BookCoverImage";
import { BookInfo } from "./BookInfo";
import { BookDescription } from "./BookDescription";
import styles from "./BookDetails.module.css";

type BookDetailsProps = {
  book: Book;
};

export function BookDetails({ book }: BookDetailsProps) {
  return (
    <div className={styles["book-details-container"]}>
      <BookCoverImage image={book.image} title={book.title} />
      <BookInfo book={book} />
      <BookDescription description={book.description} />
    </div>
  );
}

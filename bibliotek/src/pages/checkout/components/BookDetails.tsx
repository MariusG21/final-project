import type { CartBook } from "@/types/Cart";
import { BookActions } from "./BookActions";
import { BookInfo } from "./BookInfo";
import styles from "./BookDetails.module.css";

type BookDetailsProps = {
  book: CartBook;
};

export function BookDetails({ book }: BookDetailsProps) {
  return (
    <div className={styles["book-details"]}>
      <BookInfo
        title={book.title}
        author={book.author}
        price={book.price}
        discount={book.discount}
      />
      <BookActions id={book.id} />
    </div>
  );
}

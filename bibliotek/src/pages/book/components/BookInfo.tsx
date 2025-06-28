import type { Book } from "@/types/Book";
import { BookIdentity } from "./BookIdentity";
import { BookReviews } from "./BookReviews";
import { BookMeta } from "./BookMeta";
import { BookActions } from "./BookActions";
import styles from "./BookInfo.module.css";

type BookInfoProps = {
  book: Book;
};

export function BookInfo({ book }: BookInfoProps) {
  return (
    <div className={styles["book-info"]}>
      <BookIdentity
        title={book.title}
        author={book.author}
        genre={book.genre}
      />
      <BookReviews rating={book.rating} copiesSold={book.copiesSold} />
      <BookMeta
        publishedYear={book.publishedYear}
        price={book.price}
        discount={book.discount}
      />
      <BookActions />
    </div>
  );
}

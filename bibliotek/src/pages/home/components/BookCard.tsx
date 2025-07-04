import type { BookPreview } from "@/types/Book";
import { BookCardMedia } from "./BookCardMedia";
import { BookRating } from "./BookRating";
import { BookPriceAndCart } from "./BookPriceAndCart";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: BookPreview;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <div className={styles["book-card"]}>
      <BookCardMedia book={book} />

      <BookRating rating={book.rating} />

      <BookPriceAndCart
        price={book.price}
        discount={book.discount}
        id={book.id}
      />
    </div>
  );
}

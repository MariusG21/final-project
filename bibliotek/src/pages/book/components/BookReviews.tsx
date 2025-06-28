import type { Book } from "@/types/Book";
import { SeparatorLine } from "./SeparatorLine";
import styles from "./BookReviews.module.css";

type BookReviewsProps = Pick<Book, "rating" | "copiesSold">;

export function BookReviews({ rating, copiesSold }: BookReviewsProps) {
  return (
    <>
      <div className={styles["book-rating"]}>
        <img
          src={`/images/ratings/rating-${rating.stars * 10}.png`}
          alt="#"
          className={styles["book-rating-stars"]}
        />
        <div className="book-rating-reviews">{rating.reviews} reviews</div>
      </div>
      <SeparatorLine />
      <p className={styles["book-sold-copies"]}>
        <span>Readers:</span> {copiesSold.toLocaleString()}
      </p>
      <SeparatorLine />
    </>
  );
}

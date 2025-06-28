import { FaStar } from "react-icons/fa";
import type { BookPreview } from "@/types/Book";
import styles from "./BookRating.module.css";

type BookRatingProps = Pick<BookPreview, "rating">;

export function BookRating({ rating }: BookRatingProps) {
  return (
    <div className={styles.rating}>
      <img
        src={`/images/ratings/rating-${rating.stars * 10}.png`}
        alt=""
        className={styles["rating-stars"]}
      />
      <span className={styles["rating-reviews"]}>
        {rating.reviews}
        <FaStar className={styles["reviews-icon"]} />
      </span>
    </div>
  );
}

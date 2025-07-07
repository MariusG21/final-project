import { useState } from "react";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import type { BookPreview } from "@/types/Book";
import { SaleBadge } from "./SaleBadge";
import styles from "./BookCardMedia.module.css";

type BookCardMediaProps = {
  book: BookPreview;
};

export function BookCardMedia({ book }: BookCardMediaProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles["book-container"]}>
      <img src={book.image} alt={book.title} className={styles["book-image"]} />
      <div className={styles["image-overlay"]}></div>
      <div className={styles["book-details"]}>
        <div className={styles["book-title"]}>{book.title}</div>
        <div className={styles["book-author"]}>{book.author}</div>
      </div>
      <Link to={`/books/${book.id}`} className={styles["view-details-border"]}>
        <div className={styles["view-details-button"]}>View Details</div>
      </Link>
      <div
        className={
          styles["add-to-favorite-button"] +
          (isFavorite ? ` ${styles.isFavorite}` : "")
        }
        role="button"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <FaHeart />
      </div>
      {book.discount && <SaleBadge discount={book.discount} />}
    </div>
  );
}

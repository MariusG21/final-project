import { useState } from "react";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import type { BookshelfBookType } from "@/types/Book";
import styles from "./HiddenActions.module.css";

type HiddenActionsProps = Pick<BookshelfBookType, "id">;

export function HiddenActions({ id }: HiddenActionsProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <Link to={`/books/${id}`} className={styles["view-details-border"]}>
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
    </>
  );
}

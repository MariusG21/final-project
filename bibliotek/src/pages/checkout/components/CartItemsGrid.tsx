import { Link } from "react-router";
import styles from "./CartItemsGrid.module.css";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";

export function CartItemsGrid() {
  return (
    <div className={styles["cart-items-container"]}>
      <div className={styles["cart-item"]}>
        <Link
          to={`/books/${"id-here"}`}
          className={styles["cover-image-container"]}
        >
          <img
            src="/images/books/the-dark-forest.jpg"
            alt="#"
            className={styles["cover-image"]}
          />
        </Link>
        <div className={styles["book-details"]}>
          <div className={styles["book-info"]}>
            <div className={styles["book-title"]}>
              <span className={styles["label"]}>Title:</span>The Count of Monte
              Cristo
            </div>
            <div className={styles["book-author"]}>
              <span className={styles["label"]}>Author:</span>lorem
            </div>
            <div className={styles["discount"]}>
              <span className={styles["label"]}>Discount:</span>10%
            </div>
            <div className={styles["price"]}>
              <span className={styles["label"]}>Price:</span>$10.99
            </div>
          </div>
          <SeparatorLine />
          <div className={styles["book-actions"]}>
            <div role="button" className={styles["remove-button"]}>
              Remove
            </div>
            <div role="button" className={styles["bookmark-and-remove-button"]}>
              Save for Later
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

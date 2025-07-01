import styles from "./CartItemsGrid.module.css";

export function CartItemsGrid() {
  return (
    <div className={styles["cart-items-container"]}>
      <div className={styles["cart-item"]}>
        <div className={styles["cover-image"]}>
          <img src="/images/books/the-dark-forest.jpg" alt="#" className="" />
        </div>
        <div className={styles["book-details"]}>
          <div className={styles["book-info"]}>
            <div className={styles["book-title"]}>
              <span className={styles["label"]}>Title</span>Lorem
            </div>
            <div className={styles["book-author"]}>
              <span className={styles["label"]}>Author</span>lorem
            </div>
            <div className={styles["discount"]}>
              <span className={styles["label"]}>Discount</span>10%
            </div>
            <div className={styles["price"]}>
              <span className={styles["label"]}>Price</span>$10.99
            </div>
          </div>
          <div className={styles["book-actions"]}>
            <div className={styles["remove"]}>remove</div>
            <div className={styles["bookmark-and-remove"]}>
              bookmark & remove
            </div>
          </div>
        </div>
      </div>
      <div className={styles["cart-item"]}>
        <div className={styles["cover-image"]}>
          <img src="/images/books/the-dark-forest.jpg" alt="#" className="" />
        </div>
        <div className={styles["book-details"]}>
          <div className={styles["book-info"]}>
            <div className={styles["book-title"]}>
              <span className={styles["label"]}>Title</span>Lorem
            </div>
            <div className={styles["book-author"]}>
              <span className={styles["label"]}>Author</span>lorem
            </div>
            <div className={styles["discount"]}>
              <span className={styles["label"]}>Discount</span>10%
            </div>
            <div className={styles["price"]}>
              <span className={styles["label"]}>Price</span>$10.99
            </div>
          </div>
          <div className={styles["book-actions"]}>
            <div className={styles["remove"]}>remove</div>
            <div className={styles["bookmark-and-remove"]}>
              bookmark & remove
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

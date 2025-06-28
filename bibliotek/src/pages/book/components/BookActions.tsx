import styles from "./BookActions.module.css";

export function BookActions() {
  return (
    <div className={styles["book-actions"]}>
      <div className="primary-border">
        <div className="primary-button">Add to Cart</div>
      </div>
      <button className={styles["add-to-wishlist-button"]}>Wishlist ❤️</button>
    </div>
  );
}

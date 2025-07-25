import { useAddToCart } from "@/hooks/useAddToCart";
import type { Book } from "@/types/Book";
import styles from "./BookActions.module.css";

type BookActionsProps = Pick<Book, "id">;

export function BookActions({ id }: BookActionsProps) {
  const { addToCart } = useAddToCart();

  return (
    <div className={styles["book-actions"]}>
      <div
        role="button"
        className="primary-border"
        onClick={() => addToCart(id)}
      >
        <div className="primary-button">Add to Cart</div>
      </div>
      <button className={styles["add-to-wishlist-button"]}>Wishlist ❤️</button>
    </div>
  );
}

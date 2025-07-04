import { CoverImage } from "./CoverImage";
import { BookDetails } from "./BookDetails";
import styles from "./CartItem.module.css";

export function CartItem() {
  return (
    <div className={styles["cart-item"]}>
      <CoverImage />
      <BookDetails />
    </div>
  );
}

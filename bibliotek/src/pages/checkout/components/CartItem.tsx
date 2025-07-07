import type { CartBook } from "@/types/Book";
import { CoverImage } from "./CoverImage";
import { BookDetails } from "./BookDetails";
import styles from "./CartItem.module.css";

type CartItemProps = {
  book: CartBook;
};

export function CartItem({ book }: CartItemProps) {
  return (
    <div className={styles["cart-item"]}>
      <CoverImage image={book.image} id={book.id} />
      <BookDetails book={book} />
    </div>
  );
}

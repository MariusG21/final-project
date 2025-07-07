import { formatCurrency, formatDiscountedPrice } from "@/utils/priceFormatter";
import type { Book } from "@/types/Book";
import styles from "./BookPrice.module.css";

type PriceProps = Pick<Book, "price" | "discount">;

export function BookPrice({ price, discount }: PriceProps) {
  return (
    <div className={styles["book-price"]}>
      {discount ? (
        <>
          <div className={styles["original-price"]}>
            {formatCurrency(price)}
          </div>
          <div className={styles["discounted-price"]}>
            {formatDiscountedPrice(price, discount)}
          </div>
        </>
      ) : (
        formatCurrency(price)
      )}
    </div>
  );
}

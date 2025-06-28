import { BookPrice } from "@/components/Price/BookPrice";
import type { BookPreview } from "@/types/Book";
import styles from "./BookPriceAndCart.module.css";

type BookPriceAndCartProps = Pick<BookPreview, "price" | "discount">;

export function BookPriceAndCart({ price, discount }: BookPriceAndCartProps) {
  return (
    <>
      <BookPrice price={price} discount={discount} />

      <div className={`${styles["add-to-cart-border"]} primary-border`}>
        <div className={`${styles["add-to-cart-button"]} primary-button`}>
          Add to Cart
        </div>
      </div>
    </>
  );
}

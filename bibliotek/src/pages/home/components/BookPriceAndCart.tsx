import { BookPrice } from "@/components/Price/BookPrice";
import { useAddToCart } from "@/hooks/useAddToCart";
import type { BookPreview } from "@/types/Book";
import styles from "./BookPriceAndCart.module.css";

type BookPriceAndCartProps = Pick<BookPreview, "price" | "discount" | "id">;

export function BookPriceAndCart({
  price,
  discount,
  id,
}: BookPriceAndCartProps) {
  const { addToCart } = useAddToCart();

  return (
    <>
      <BookPrice price={price} discount={discount} />

      <div className={`${styles["add-to-cart-border"]} primary-border`}>
        <div
          className={`${styles["add-to-cart-button"]} primary-button`}
          onClick={() => addToCart(id)}
        >
          Add to Cart
        </div>
      </div>
    </>
  );
}

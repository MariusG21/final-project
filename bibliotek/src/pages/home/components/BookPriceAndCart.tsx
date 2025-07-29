import { BookPrice } from "@/components/Price/BookPrice";
import { CartButton } from "@/components/Buttons/CartButton";
import type { BookPreview } from "@/types/Book";

type BookPriceAndCartProps = Pick<BookPreview, "price" | "discount" | "id">;

export function BookPriceAndCart({
  price,
  discount,
  id,
}: BookPriceAndCartProps) {
  return (
    <>
      <BookPrice price={price} discount={discount} />
      <CartButton id={id} />
    </>
  );
}

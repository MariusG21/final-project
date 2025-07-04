import axios from "axios";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { BookPrice } from "@/components/Price/BookPrice";
import type { BookPreview } from "@/types/Book";
import styles from "./BookPriceAndCart.module.css";
import toast from "react-hot-toast";

type BookPriceAndCartProps = Pick<BookPreview, "price" | "discount" | "id">;

export function BookPriceAndCart({
  price,
  discount,
  id,
}: BookPriceAndCartProps) {
  const { user, accessToken } = useAuthContext();

  const addToCart = async () => {
    if (!user) {
      toast.error("Please login before adding to cart");
      return;
    }
    const { data } = await axios.post(
      "/api/cart/items",
      {
        id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(data.data);
  };

  return (
    <>
      <BookPrice price={price} discount={discount} />

      <div className={`${styles["add-to-cart-border"]} primary-border`}>
        <div
          className={`${styles["add-to-cart-button"]} primary-button`}
          onClick={addToCart}
        >
          Add to Cart
        </div>
      </div>
    </>
  );
}

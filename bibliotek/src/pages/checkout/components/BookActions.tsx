import axios from "axios";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import type { CartBook } from "@/types/Cart";
import styles from "./BookActions.module.css";

type BookActionsProps = Pick<CartBook, "id">;

export function BookActions({ id }: BookActionsProps) {
  const { accessToken } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const { fetchCartTotals } = useCartTotalsContext();

  const removeFromCart = async () => {
    try {
      const { data } = await axios.delete(`/api/cart/items/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data.success) {
        toast.info(data.message);
        fetchCartBooks();
        fetchCartTotals();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Failed to remove";
        toast.error(message);
        console.error(error);
      } else {
        toast.error("Failed to remove");
        console.error("Unexpected error occurred: " + error);
      }
    }
  };

  return (
    <div className={styles["book-actions"]}>
      <div
        role="button"
        className={styles["remove-button"]}
        onClick={removeFromCart}
      >
        Remove
      </div>
      <div
        role="button"
        className={styles["bookmark-and-remove-button"]}
        onClick={removeFromCart}
      >
        Save for Later
      </div>
    </div>
  );
}

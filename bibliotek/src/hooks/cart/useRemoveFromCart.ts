import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";

export function useRemoveFromCart() {
  const { accessToken } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const { fetchCartTotals } = useCartTotalsContext();

  const removeFromCart = useCallback(
    async (id: string) => {
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
    },
    [fetchCartBooks, fetchCartTotals, accessToken]
  );

  return { removeFromCart };
}

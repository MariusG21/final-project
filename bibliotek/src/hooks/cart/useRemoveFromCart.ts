import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";

export function useRemoveFromCart() {
  const { accessToken } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const { fetchCartTotals } = useCartTotalsContext();
  const { triggerUnauthorizedLogout } = useAuthErrorContext();

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
          if (error.response) {
            const { status } = error.response;
            const message =
              error.response.data?.message || "Unexpected server error.";
            if (status === 401) {
              triggerUnauthorizedLogout();
            } else if (status === 404) {
              toast.error(message);
            } else {
              toast.error(message);
            }
          }
        } else {
          toast.error("Failed to remove");
          console.error("Unexpected error occurred: " + error);
        }
      }
    },
    [fetchCartBooks, fetchCartTotals, accessToken, triggerUnauthorizedLogout]
  );

  return { removeFromCart };
}

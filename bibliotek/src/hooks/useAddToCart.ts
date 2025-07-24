import axios from "axios";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";

export function useAddToCart() {
  const { user, accessToken } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const { fetchCartTotals } = useCartTotalsContext();

  const addToCart = async (id: string) => {
    if (!user) {
      toast.error("Please login before adding to cart");
      return;
    }
    try {
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
      if (data.success) {
        toast.success(data.message);
        fetchCartBooks();
        fetchCartTotals();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          const message =
            error.response.data?.message || "Unexpected server error.";

          if (status === 409) {
            toast.info(message);
          } else if (status === 404 || status === 401) {
            toast.error(message);
          } else {
            toast.error(message);
          }
        }
      } else {
        console.error(error);
        toast.error("Something went wrong");
      }
    }
  };

  return { addToCart };
}

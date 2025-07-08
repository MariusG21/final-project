import { useCallback, useState, type ReactNode } from "react";
import { CartTotalsContext } from "./CartTotalsContext";
import { useAuthContext } from "@/context/auth/useAuthContext";
import axios from "axios";
import type { CartTotalsContextState } from "./types";

export function CartTotalsProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartTotalsContextState>(null);
  const { user, accessToken } = useAuthContext();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCartTotals = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/cart", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data.success) {
        setCart(data.data);
        setError(null);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message =
          error.response?.data.message || "Could not load cart totals";
        if (status === 401) {
          //logout
          console.error(error);
        } else {
          setError(message);
          console.error(error);
        }
      } else {
        setError("Could not load cart totals");
        console.error("Unexpected error occurred: " + error);
      }
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  return (
    <CartTotalsContext.Provider
      value={{
        cart,
        cartQuantity: user ? cart?.quantity ?? 0 : 0,
        fetchCartTotals,
        error,
        loading,
      }}
    >
      {children}
    </CartTotalsContext.Provider>
  );
}

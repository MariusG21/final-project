import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "@/context/auth/useAuthContext";
import type { Cart } from "@/types/Cart";

const initialState = null;

export function useCartTotals() {
  const { user, accessToken } = useAuthContext();
  const [cart, setCart] = useState<Cart | null>(initialState);
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

  useEffect(() => {
    if (user) {
      fetchCartTotals();
    }
  }, [user, fetchCartTotals]);

  const cartQuantity = user ? cart?.quantity ?? 0 : 0;

  const resetCartTotals = () => {
    setCart(initialState);
  };

  return {
    loading,
    error,
    cart,
    fetchCartTotals,
    cartQuantity,
    resetCartTotals,
  };
}

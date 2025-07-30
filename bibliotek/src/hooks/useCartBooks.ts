import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "@/context/auth/useAuthContext";
import type { CartBook } from "@/types/Cart";

export function useCartBooks() {
  const { user, accessToken } = useAuthContext();
  const [books, setBooks] = useState<CartBook[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCartBooks = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/cart/items", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setBooks(data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          const message =
            error.response.data?.message || "Failed to load your books. 🥲";
          if (status === 401) {
            // logout
            console.error(error);
          } else {
            console.error(error);
            setError(message);
          }
        } else {
          setError("Failed to load your books. 🥲");
          console.error("Unexpected error occurred: ", error);
        }
      } else {
        setError("Failed to load your books. 🥲");
        console.error("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    if (user) {
      fetchCartBooks();
    }
  }, [user, fetchCartBooks]);

  return { loading, error, books, fetchCartBooks };
}

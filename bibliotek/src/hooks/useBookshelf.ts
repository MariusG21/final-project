import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "@/context/auth/useAuthContext";
import type { BookshelfBookType } from "@/types/Book";

export function useBookshelf() {
  const { user, accessToken } = useAuthContext();
  const [books, setBooks] = useState<BookshelfBookType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBookshelf = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("/api/bookshelf", {
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
            error.response.data?.message || "Unexpected server error.";

          if (status === 404 || status === 401) {
            //logout
            setError(message);
          } else {
            setError(message);
          }
        }
      } else {
        console.error(error);
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    if (user) {
      fetchBookshelf();
    }
  }, [user, fetchBookshelf]);

  const booksCount = books.length;

  return { books, loading, error, booksCount, fetchBookshelf };
}

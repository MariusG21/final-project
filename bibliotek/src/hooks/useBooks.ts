import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import type { BookPreview } from "@/types/Book";

export function useBooks() {
  const [books, setBooks] = useState<BookPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchBooks = useCallback(async (retry = false) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("/api/books");
      setBooks(data.data);
    } catch (error) {
      if (!retry) return fetchBooks(true);

      console.error("Error fetching books:", error);

      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          "Failed to load books. Try again later.";
        setError(message);
      } else {
        setError("Something went wrong.");
      }

      setBooks([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return { books, error, isLoading };
}

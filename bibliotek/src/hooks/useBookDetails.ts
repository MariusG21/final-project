import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Book } from "@/types/Book";

export function useBookDetails() {
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { bookId } = useParams();

  const fetchBookDetails = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/books/${bookId}`);
      setBook(data.data);
    } catch (error) {
      console.error("Error fetching book details:", error);
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Failed to load book details. Please try again later."
        );
        setBook(null);
      } else {
        setError("Failed to load book details. Please try again later.");
        setBook(null);
      }
    } finally {
      setIsLoading(false);
    }
  }, [bookId]);

  useEffect(() => {
    fetchBookDetails();
  }, [bookId, fetchBookDetails]);

  return { isLoading, error, book };
}

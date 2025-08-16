import { useCallback, useEffect, useState } from "react";
import type { SimilarBook } from "@/types/Book";
import axios from "axios";
import { useParams } from "react-router";

export function useSimilarBooks() {
  const [similarBooks, setSimilarBooks] = useState<SimilarBook[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { bookId } = useParams();

  const fetchSimilarBooks = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/api/books?id=${bookId}`);
      if (data.success) {
        setSimilarBooks(data.data);
      }
    } catch (error) {
      console.error("Error fetching similar books:", error);
      if (axios.isAxiosError(error)) {
        setSimilarBooks([]);
      } else {
        setSimilarBooks([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, [bookId]);

  useEffect(() => {
    fetchSimilarBooks();
  }, [fetchSimilarBooks]);

  return { isLoading, similarBooks };
}

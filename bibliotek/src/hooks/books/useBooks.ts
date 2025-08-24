import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { BookPreview } from "@/types/Book";

export function useBooks() {
  const [books, setBooks] = useState<BookPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [pagination, setPagination] = useState<{
    totalBooks: number;
    page: number;
    limit: number;
    totalPages: number;
  } | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "5";

  const fetchBooks = useCallback(
    async (retry = false) => {
      const url = search
        ? `/api/books?search=${search}`
        : `/api/books?page=${page}&limit=${limit}`;
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(url);
        if (data.success) {
          setBooks(data.data);
          if (data.pagination) {
            setPagination(data.pagination);
          }
        }
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
    },
    [search, page, limit]
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const goToNextPage = () => {
    const nextPage = (Number(page) || 1) + 1;
    setSearchParams({ page: String(nextPage), limit });
  };

  const goToPrevPage = () => {
    if (Number(page) === 1) return;
    const previousPage = (Number(page) || 1) - 1;
    setSearchParams({ page: String(previousPage), limit });
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1) return;
    setSearchParams({ page: String(pageNumber), limit });
  };

  const paginationActions = { goToNextPage, goToPrevPage, goToPage };

  return {
    books,
    error,
    isLoading,
    paginationActions,
    pagination,
    search,
  };
}

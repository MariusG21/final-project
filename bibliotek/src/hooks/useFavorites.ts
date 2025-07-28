import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/auth/useAuthContext";
import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";

export function useFavorites() {
  const { user, accessToken } = useAuthContext();
  const [favoriteBooks, setFavoriteBooks] = useState<BookmarkedBookType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("/api/favorite-books", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFavoriteBooks(data.data);
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
      fetchFavorites();
    }
  }, [user, fetchFavorites]);

  const removeFromFavorites = useCallback(
    async (id: string) => {
      if (!user) {
        toast.info("Login before this action.");
        return;
      }

      try {
        const { data } = await axios.delete(`/api/favorite-books/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (data.success) {
          toast.info(data.message);
          fetchFavorites();
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
    },
    [user, fetchFavorites, accessToken]
  );

  const addToFavorites = useCallback(
    async (id: string) => {
      if (!user) {
        toast.info("Login before adding to favorites.");
        return;
      }

      try {
        const { data } = await axios.post(
          "/api/favorite-books",
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
          fetchFavorites();
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
    },
    [accessToken, user, fetchFavorites]
  );

  const isFavorite = useCallback(
    (id: string) => {
      return favoriteBooks.some((book) => book.id === id);
    },
    [favoriteBooks]
  );

  const favoriteCount = favoriteBooks.length;

  return {
    loading,
    error,
    favoriteBooks,
    fetchFavorites,
    removeFromFavorites,
    addToFavorites,
    isFavorite,
    favoriteCount,
  };
}

import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";
import { BookmarkedBooksGrid } from "./components/BookmarkedBooksGrid";
import styles from "./BookmarkedPage.module.css";

export function BookmarkedPage() {
  const { user, accessToken } = useAuthContext();
  const [favoriteBooks, setFavoriteBooks] = useState<BookmarkedBookType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
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
    };
    if (user) {
      fetchFavorites();
    }
  }, [user, accessToken]);

  return (
    <>
      <Header />
      <Sidebar />
      <SecondHeader title="Favorites" />
      <main className={styles["bookmarked-page"]}>
        {!user ? (
          <LoginMessage message="Login to see your favorite books." />
        ) : loading ? (
          <LoadingMessage message="Your favorite books are loading..." />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : favoriteBooks.length === 0 ? (
          <InfoMessage message="No favorites yet." />
        ) : (
          <BookmarkedBooksGrid books={favoriteBooks} />
        )}
      </main>
    </>
  );
}

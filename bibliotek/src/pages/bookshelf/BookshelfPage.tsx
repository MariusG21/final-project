import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import type { BookshelfBookType } from "@/types/Book";
import { BookshelfBooksGrid } from "./components/BookshelfBooksGrid";
import styles from "./BookshelfPage.module.css";

export function BookshelfPage() {
  const { user, accessToken } = useAuthContext();
  const [books, setBooks] = useState<BookshelfBookType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookshelf = async () => {
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
    };
    if (user) {
      fetchBookshelf();
    }
  }, [user, accessToken]);

  return (
    <>
      <Header />
      <Sidebar />
      <SecondHeader title="Bookshelf" />
      <main className={styles["bookshelf-page"]}>
        {!user ? (
          <LoginMessage message="Login to see your books." />
        ) : loading ? (
          <LoadingMessage message="Your books are loading..." />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : books.length === 0 ? (
          <InfoMessage message="No books yet. Pick one you like and get started." />
        ) : (
          <BookshelfBooksGrid books={books} />
        )}
      </main>
    </>
  );
}

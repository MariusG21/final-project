import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { usePageTitle } from "@/hooks/usePageTitle";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import type { Book } from "@/types/Book";
import { BookDetails } from "./components/BookDetails";
import { SimilarBooks } from "./components/SimilarBooks";
import styles from "./BookPage.module.css";

export function BookPage() {
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { bookId } = useParams();

  useEffect(() => {
    const fetchBookDetails = async () => {
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
    };
    fetchBookDetails();
  }, [bookId]);

  usePageTitle(book ? `${book.title} | Bibliotek` : "Book Details");

  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles["book-page"]}>
        {isLoading ? (
          <LoadingMessage message="Loading book..." />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          book && (
            <>
              <BookDetails book={book} />
              <SimilarBooks id={book.id} />
            </>
          )
        )}
      </main>
    </>
  );
}

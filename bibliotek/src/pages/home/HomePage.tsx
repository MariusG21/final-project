import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { usePageTitle } from "@/hooks/usePageTitle";
import type { BookPreview } from "@/types/Book";
import { BooksGrid } from "./components/BooksGrid";
import styles from "./HomePage.module.css";

export function HomePage() {
  const [books, setBooks] = useState<BookPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("/api/books");
        setBooks(data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load books. Please try again later.");
        setBooks([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  usePageTitle("Bibliotek");
  return (
    <>
      <Header />
      <Sidebar />
      <main className={styles["home-page"]}>
        {isLoading ? (
          <div className="loading-message">Loading books...</div>
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <BooksGrid books={books} />
        )}
      </main>
    </>
  );
}

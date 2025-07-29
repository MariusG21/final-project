import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useBookDetails } from "@/hooks/useBookDetails";
import { BookDetails } from "./components/BookDetails";
import { SimilarBooks } from "./components/SimilarBooks";
import styles from "./BookPage.module.css";

export function BookPage() {
  const { isLoading, error, book } = useBookDetails();

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

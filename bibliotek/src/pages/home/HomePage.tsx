import { Title } from "@/components/Title/Title";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { useBooks } from "@/hooks/books/useBooks";
import { BooksGrid } from "./components/BooksGrid";
import styles from "./HomePage.module.css";

export function HomePage() {
  const { isLoading, error, books } = useBooks();
  return (
    <>
      <Title />
      <Header />
      <Sidebar />
      <main className={styles["home-page"]}>
        {isLoading ? (
          <LoadingMessage message="Loading books..." />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : books.length === 0 ? (
          <InfoMessage message="No books available" />
        ) : (
          <BooksGrid books={books} />
        )}
      </main>
    </>
  );
}

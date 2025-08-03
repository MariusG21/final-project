import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useBookshelfContext } from "@/context/bookshelf/useBookshelfContext";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import { BookshelfBooksGrid } from "./components/BookshelfBooksGrid";
import styles from "./BookshelfPage.module.css";
import { Title } from "@/components/Title/Title";

export function BookshelfPage() {
  const { user } = useAuthContext();
  const { loading, error, books } = useBookshelfContext();

  return (
    <>
      <Title />
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

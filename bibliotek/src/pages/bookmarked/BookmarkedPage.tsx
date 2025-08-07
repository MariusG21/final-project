import { TitleAndFavicon } from "@/components/Title/TitleAndFavicon";
import { Header } from "@/components/Header/Header";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { useFavoriteBooksContext } from "@/context/favoriteBooks/useFavoriteBooksContext";
import { BookmarkedBooksGrid } from "./components/BookmarkedBooksGrid";
import styles from "./BookmarkedPage.module.css";

export function BookmarkedPage() {
  const { user } = useAuthContext();
  const { loading, error, favoriteBooks } = useFavoriteBooksContext();

  return (
    <>
      <TitleAndFavicon />
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

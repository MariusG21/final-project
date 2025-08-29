import { TitleAndFavicon } from "@/components/Title/TitleAndFavicon";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { useBooks } from "@/hooks/books/useBooks";
import { SearchResultMessage } from "./components/SearchResultMessage";
import { BooksGrid } from "./components/BooksGrid";
import { Pagination } from "./components/Pagination";
import styles from "./HomePage.module.css";

export function HomePage() {
  const { isLoading, error, books, paginationActions, pagination, search } =
    useBooks();
  return (
    <>
      <TitleAndFavicon />
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
          <>
            {search && (
              <SearchResultMessage search={search} resultCount={books.length} />
            )}
            <BooksGrid books={books} />
            {!search && pagination && (
              <>
                <SeparatorLine />
                <Pagination
                  pagination={pagination}
                  paginationActions={paginationActions}
                />
              </>
            )}
          </>
        )}
      </main>
    </>
  );
}

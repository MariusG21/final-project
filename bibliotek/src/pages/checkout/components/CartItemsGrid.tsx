import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { CartItem } from "./CartItem";
import styles from "./CartItemsGrid.module.css";

export function CartItemsGrid() {
  const { books, error, loading } = useCartBooksContext();

  return (
    <div className={styles["cart-items-container"]}>
      {loading ? (
        <LoadingMessage message="Cart Items are loading." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : !books.length ? (
        <InfoMessage message="No books in the cart yet. Go add some 😊." />
      ) : (
        books.map((book) => {
          return <CartItem key={book.id} book={book} />;
        })
      )}
    </div>
  );
}

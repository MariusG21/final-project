import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { CartItem } from "./CartItem";
import styles from "./CartItemsGrid.module.css";

export function CartItemsGrid() {
  const { books, error, loading } = useCartBooksContext();

  console.log(books);

  return (
    <div className={styles["cart-items-container"]}>
      {loading ? (
        <LoadingMessage message="Cart Items are loading." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : !books.length ? (
        <LoadingMessage message="Cart is empty." />
      ) : (
        books.map((book) => {
          return <CartItem key={book.id} book={book} />;
        })
      )}
    </div>
  );
}

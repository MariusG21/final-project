import { CartButton } from "@/components/Buttons/CartButton";
import { AddToFavorite } from "@/components/Buttons/AddToFavorite";
import type { Book } from "@/types/Book";
import styles from "./BookActions.module.css";

type BookActionsProps = Pick<Book, "id">;

export function BookActions({ id }: BookActionsProps) {
  return (
    <div className={styles["book-actions"]}>
      <CartButton id={id} width={13} widthUnits="rem" />
      <AddToFavorite id={id} />
    </div>
  );
}

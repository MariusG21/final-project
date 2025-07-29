import { AddToFavorite } from "@/components/Buttons/AddToFavorite";
import { RemoveFromCart } from "@/components/Buttons/RemoveFromCart";
import type { CartBook } from "@/types/Cart";
import styles from "./BookActions.module.css";

type BookActionsProps = Pick<CartBook, "id">;

export function BookActions({ id }: BookActionsProps) {
  return (
    <div className={styles["book-actions"]}>
      <RemoveFromCart id={id} borderRadius={1} />
      <AddToFavorite
        id={id}
        label="Save and Remove"
        width={100}
        widthUnits="%"
        borderRadius={1}
        action="saveAndRemove"
      />
    </div>
  );
}

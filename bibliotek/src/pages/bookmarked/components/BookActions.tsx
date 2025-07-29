import { CartButton } from "@/components/Buttons/CartButton";
import { ReadButton } from "@/components/Buttons/ReadButton";
import type { Book } from "@/types/Book";
import styles from "./BookActions.module.css";

type BookActionsProps = Pick<Book, "id">;

export function BookActions({ id }: BookActionsProps) {
  return (
    <div className={styles["book-actions"]}>
      <ReadButton id={id} />
      <CartButton id={id} label="Buy" />
    </div>
  );
}

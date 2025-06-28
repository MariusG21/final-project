import type { Book } from "@/types/Book";
import { SeparatorLine } from "./SeparatorLine";
import styles from "./BookDescription.module.css";

type BookDescriptionProps = Pick<Book, "description">;

export function BookDescription({ description }: BookDescriptionProps) {
  return (
    <section className={styles["book-description"]}>
      <h2 className={styles["book-description-heading"]}>Description:</h2>
      <SeparatorLine />
      <p className={styles["book-description-text"]}>
        {description || "No description available for this book."}
      </p>
    </section>
  );
}

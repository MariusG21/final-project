import type { Book } from "@/types/Book";
import { SeparatorLine } from "./SeparatorLine";
import styles from "./BookIdentity.module.css";

type BookIdentityProps = Pick<Book, "title" | "author" | "genre">;

export function BookIdentity({ title, author, genre }: BookIdentityProps) {
  return (
    <>
      <p className={styles["book-title"]}>
        <span>Title:</span> {title}
      </p>
      <SeparatorLine />
      <p className={styles["book-author"]}>
        <span>Author:</span> {author}
      </p>
      <SeparatorLine />

      <p className={styles["book-genre"]}>
        <span>Genre:</span>
        {genre.join(" / ")}
      </p>
      <SeparatorLine />
    </>
  );
}

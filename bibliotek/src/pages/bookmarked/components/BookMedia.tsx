import type { BookshelfBookType } from "@/types/Book";
import { HiddenActions } from "./HiddenActions";
import { BookDetails } from "./BookDetails";
import { CoverImage } from "./CoverImage";
import styles from "./BookMedia.module.css";

type BookshelfBookProps = {
  book: BookshelfBookType;
};

export function BookMedia({ book }: BookshelfBookProps) {
  return (
    <div className={styles["book-container"]}>
      <CoverImage image={book.image} title={book.title} />
      <BookDetails title={book.title} author={book.author} />
      <HiddenActions id={book.id} />
    </div>
  );
}

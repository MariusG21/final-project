import type { BookPreview } from "@/types/Book";
import { CoverImage } from "./CoverImage";
import { BookDetails } from "./BookDetails";
import { HiddenActions } from "./HiddenActions";
import styles from "./BookCardMedia.module.css";

type BookCardMediaProps = {
  book: BookPreview;
};

export function BookCardMedia({ book }: BookCardMediaProps) {
  return (
    <div className={styles["book-container"]}>
      <CoverImage title={book.title} image={book.image} />
      <BookDetails title={book.title} author={book.author} />
      <HiddenActions id={book.id} discount={book.discount} />
    </div>
  );
}

import type { SimilarBook } from "@/types/Book";
import { SimBook } from "./SimBook";
import styles from "./SimilarBooksSlider.module.css";

type SimilarBooksSliderProps = {
  similarBooks: SimilarBook[];
  sliderRef: React.RefObject<HTMLDivElement | null>;
};

export function SimilarBooksSlider({
  similarBooks,
  sliderRef,
}: SimilarBooksSliderProps) {
  return (
    <div className={styles["similar-books-slider"]} ref={sliderRef}>
      {similarBooks.map((book) => (
        <SimBook similarBook={book} key={book.id} />
      ))}
    </div>
  );
}

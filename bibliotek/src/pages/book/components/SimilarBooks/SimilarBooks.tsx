import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { useSimilarBooks } from "@/hooks/bookDetails/useSimilarBooks";
import { useSlider } from "@/hooks/ui/useSlider";
import { SimilarBooksHeader } from "./SimilarBooksHeader";
import { SimilarBooksSlider } from "./SimilarBooksSlider";
import styles from "./SimilarBooks.module.css";

export function SimilarBooks() {
  const { isLoading, similarBooks } = useSimilarBooks();
  const { sliderRef, scrollLeft, scrollRight } = useSlider();

  return (
    <section className={styles["similar-books"]}>
      <SimilarBooksHeader onLeft={scrollLeft} onRight={scrollRight} />

      {isLoading ? (
        <div className={styles["placeholder-container"]}>
          <LoadingMessage message="Loading similar books..." />
        </div>
      ) : similarBooks.length === 0 ? (
        <div className={styles["placeholder-container"]}>
          <InfoMessage message="No similar books found." />
        </div>
      ) : (
        <SimilarBooksSlider similarBooks={similarBooks} sliderRef={sliderRef} />
      )}
    </section>
  );
}

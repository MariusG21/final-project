import styles from "./SimilarBooksHeader.module.css";

type SimilarBooksHeaderProps = {
  onLeft: () => void;
  onRight: () => void;
};

export function SimilarBooksHeader({
  onLeft,
  onRight,
}: SimilarBooksHeaderProps) {
  return (
    <div className={styles["similar-books-header"]}>
      <h3 className={styles["similar-books-title"]}>Similar Books:</h3>

      <div className={styles["slider-controls"]}>
        <button onClick={onLeft} className={styles["slider-arrow"]}>
          &#8249;
        </button>
        <button onClick={onRight} className={styles["slider-arrow"]}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

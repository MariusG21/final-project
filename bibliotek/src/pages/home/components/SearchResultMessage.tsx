import styles from "./SearchResultMessage.module.css";

type SearchResultMessageProps = {
  search: string;
  resultCount: number;
};

export function SearchResultMessage({
  search,
  resultCount,
}: SearchResultMessageProps) {
  return (
    <p className={styles["search-result-message"]}>
      Results for <span className={styles["highlight"]}>{`"${search}"`}</span> -{" "}
      <span className={styles["highlight"]}>{resultCount}</span> found:
    </p>
  );
}

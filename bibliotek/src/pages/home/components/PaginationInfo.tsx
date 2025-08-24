import styles from "./PaginationInfo.module.css";

type PaginationInfoProps = {
  [K in "from" | "to" | "totalBooks"]: number;
};

export function PaginationInfo({ from, to, totalBooks }: PaginationInfoProps) {
  return (
    <div className={styles["pagination-info"]}>
      Showing{" "}
      <span className={styles["highlight"]}>
        {from}-{to}
      </span>{" "}
      of <span className={styles["highlight"]}>{totalBooks}</span> books
    </div>
  );
}

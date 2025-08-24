import { ChevronsLeft, ChevronsRight } from "lucide-react";
import styles from "./PaginationControls.module.css";

type PaginationControlsProps = {
  paginationActions: {
    goToNextPage: () => void;
    goToPrevPage: () => void;
    goToPage: (pageNumber: number) => void;
  };
  page: number;
  totalPages: number;
  pageNumbers: number[];
  start: number;
  end: number;
};

export function PaginationControls({
  paginationActions,
  page,
  start,
  end,
  pageNumbers,
  totalPages,
}: PaginationControlsProps) {
  const { goToNextPage, goToPrevPage, goToPage } = paginationActions;

  return (
    <div className={styles["pagination"]}>
      <button
        disabled={page === 1}
        onClick={goToPrevPage}
        className={styles["pagination-controls"]}
      >
        <ChevronsLeft size={16} />
      </button>

      {start > 1 && (
        <>
          <button className={styles["page-number"]} onClick={() => goToPage(1)}>
            1
          </button>
          {start > 2 && <span className={styles["ellipsis"]}>…</span>}
        </>
      )}

      {pageNumbers.map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          disabled={p === page}
          className={`${styles["page-number"]} ${
            p === page ? styles["active"] : ""
          }`}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className={styles["ellipsis"]}>…</span>
          )}
          <button
            className={styles["page-number"]}
            onClick={() => goToPage(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        disabled={page === totalPages}
        onClick={goToNextPage}
        className={styles["pagination-controls"]}
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
}

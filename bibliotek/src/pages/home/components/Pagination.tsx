import { usePaginationLogic } from "@/hooks/common/usePaginationLogic";
import { PaginationInfo } from "./PaginationInfo";
import { PaginationControls } from "./PaginationControls";
import styles from "./Pagination.module.css";

type PaginationProps = {
  pagination: {
    totalBooks: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  paginationActions: {
    goToNextPage: () => void;
    goToPrevPage: () => void;
    goToPage: (pageNumber: number) => void;
  };
};

export function Pagination({ paginationActions, pagination }: PaginationProps) {
  const { page, totalPages, totalBooks, limit } = pagination;

  const { pageNumbers, start, end, from, to } = usePaginationLogic({
    page,
    totalBooks,
    totalPages,
    limit,
  });

  return (
    <div className={styles["pagination-container"]}>
      <PaginationInfo from={from} to={to} totalBooks={totalBooks} />

      <PaginationControls
        paginationActions={paginationActions}
        start={start}
        end={end}
        totalPages={totalPages}
        page={page}
        pageNumbers={pageNumbers}
      />
    </div>
  );
}

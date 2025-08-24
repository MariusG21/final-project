type UsePaginationLogicParams = {
  page: number;
  totalBooks: number;
  totalPages: number;
  limit: number;
  pagesToShow?: number;
};

export function usePaginationLogic({
  page,
  totalBooks,
  totalPages,
  limit,
  pagesToShow = 5,
}: UsePaginationLogicParams) {
  const start = Math.max(1, page - Math.floor(pagesToShow / 2));
  const end = Math.min(totalPages, start + pagesToShow - 1);

  const pageNumbers: number[] = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  const from = (page - 1) * limit + 1;
  const to = Math.min(page * limit, totalBooks);

  return { pageNumbers, from, to, start, end };
}

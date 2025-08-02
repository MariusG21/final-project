import type { BookshelfBookType } from "@/types/Book";

type BookshelfContextValue = {
  fetchBookshelf: () => Promise<void>;
  books: BookshelfBookType[];
  booksCount: number;
  loading: boolean;
  error: string | null;
  resetBookshelf: () => void;
};

export type { BookshelfContextValue };

import type { CartBook } from "@/types/Cart";

type CartBooksContextValue = {
  books: CartBook[];
  fetchCartBooks: () => Promise<void>;
  error: string | null;
  loading: boolean;
};

export type { CartBooksContextValue };

import type { CartBook } from "@/types/Book";

type CartBooksContextValue = {
  books: CartBook[];
  fetchCartBooks: () => Promise<void>;
  error: string | null;
  loading: boolean;
};

type CartBooksStateValue = CartBook[];

export type { CartBooksContextValue, CartBooksStateValue };

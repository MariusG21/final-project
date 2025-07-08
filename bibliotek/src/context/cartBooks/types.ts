import type { CartBook } from "@/types/Cart";

type CartBooksContextValue = {
  books: CartBook[];
  fetchCartBooks: () => Promise<void>;
  error: string | null;
  loading: boolean;
};

type CartBooksStateValue = CartBook[];

export type { CartBooksContextValue, CartBooksStateValue };

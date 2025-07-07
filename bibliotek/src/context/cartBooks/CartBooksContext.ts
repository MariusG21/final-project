import { createContext } from "react";
import type { CartBooksContextValue } from "./types";

export const CartBooksContext = createContext<CartBooksContextValue | null>(
  null
);

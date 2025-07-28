import { createContext } from "react";
import type { BookshelfContextValue } from "./types";

export const BookshelfContext = createContext<BookshelfContextValue | null>(
  null
);

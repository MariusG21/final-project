import { createContext } from "react";
import type { FavoriteBooksContextValue } from "./types";

export const FavoriteBooksContext =
  createContext<FavoriteBooksContextValue | null>(null);

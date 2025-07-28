import type { ReactNode } from "react";
import { FavoriteBooksContext } from "./FavoriteBooksContext";
import { useFavorites } from "@/hooks/useFavorites";

export function FavoriteBooksProvider({ children }: { children: ReactNode }) {
  const { ...favorites } = useFavorites();

  return (
    <FavoriteBooksContext.Provider value={{ ...favorites }}>
      {children}
    </FavoriteBooksContext.Provider>
  );
}

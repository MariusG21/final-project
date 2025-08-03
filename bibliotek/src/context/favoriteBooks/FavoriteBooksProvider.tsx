import type { ReactNode } from "react";
import { useFavorites } from "@/hooks/favorites/useFavorites";
import { FavoriteBooksContext } from "./FavoriteBooksContext";

export function FavoriteBooksProvider({ children }: { children: ReactNode }) {
  const favorites = useFavorites();

  return (
    <FavoriteBooksContext.Provider value={favorites}>
      {children}
    </FavoriteBooksContext.Provider>
  );
}

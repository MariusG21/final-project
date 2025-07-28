import type { ReactNode } from "react";
import { useBookshelf } from "@/hooks/useBookshelf";
import { BookshelfContext } from "./BookshelfContext";

export function BookshelfProvider({ children }: { children: ReactNode }) {
  const { ...bookshelf } = useBookshelf();

  return (
    <BookshelfContext.Provider value={{ ...bookshelf }}>
      {children}
    </BookshelfContext.Provider>
  );
}

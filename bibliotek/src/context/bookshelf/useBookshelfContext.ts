import { useContext } from "react";
import { BookshelfContext } from "./BookshelfContext";

export const useBookshelfContext = () => {
  const ctx = useContext(BookshelfContext);

  if (!ctx) {
    throw new Error(
      "useBookshelfContext should only be used in children of BookshelfProvider"
    );
  }

  return ctx;
};

import { useContext } from "react";
import { FavoriteBooksContext } from "./FavoriteBooksContext";

export const useFavoriteBooksContext = () => {
  const ctx = useContext(FavoriteBooksContext);

  if (!ctx) {
    throw new Error(
      "useFavoriteBooksContext should only be used in children of FavoriteBooksProvider!"
    );
  }
  return ctx;
};

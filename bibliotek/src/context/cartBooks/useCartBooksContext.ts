import { useContext } from "react";
import { CartBooksContext } from "./CartBooksContext";

export const useCartBooksContext = () => {
  const ctx = useContext(CartBooksContext);

  if (!ctx) {
    throw new Error(
      "useCartBooksContext should only be used in children of CartBooksProvider!"
    );
  }

  return ctx;
};

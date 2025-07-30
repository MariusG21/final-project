import type { ReactNode } from "react";
import { useCartBooks } from "@/hooks/useCartBooks";
import { CartBooksContext } from "./CartBooksContext";

export function CartBooksProvider({ children }: { children: ReactNode }) {
  const { ...cartBooks } = useCartBooks();

  return (
    <CartBooksContext.Provider value={{ ...cartBooks }}>
      {children}
    </CartBooksContext.Provider>
  );
}

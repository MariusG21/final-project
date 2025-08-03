import type { ReactNode } from "react";
import { CartTotalsContext } from "./CartTotalsContext";
import { useCartTotals } from "@/hooks/cart/useCartTotals";

export function CartTotalsProvider({ children }: { children: ReactNode }) {
  const { ...cartTotalsLogic } = useCartTotals();

  return (
    <CartTotalsContext.Provider value={{ ...cartTotalsLogic }}>
      {children}
    </CartTotalsContext.Provider>
  );
}

import { useContext } from "react";
import { CartTotalsContext } from "./CartTotalsContext";

export const useCartTotalsContext = () => {
  const ctx = useContext(CartTotalsContext);

  if (!ctx) {
    throw new Error(
      "useCartTotalsContext should only be used in children of CartTotalsProvider!"
    );
  }

  return ctx;
};

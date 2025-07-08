import { createContext } from "react";
import type { CartTotalsContextValue } from "./types";

export const CartTotalsContext = createContext<CartTotalsContextValue | null>(
  null
);

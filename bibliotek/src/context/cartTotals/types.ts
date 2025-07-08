import type { Cart } from "@/types/Cart";

type CartTotalsContextValue = {
  cart: CartTotalsContextState;
  cartQuantity: number;
  fetchCartTotals: () => Promise<void>;
  error: string | null;
  loading: boolean;
};

type CartTotalsContextState = Cart | null;

export type { CartTotalsContextValue, CartTotalsContextState };

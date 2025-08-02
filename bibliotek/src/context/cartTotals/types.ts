import type { Cart } from "@/types/Cart";

type CartTotalsContextValue = {
  cart: Cart | null;
  cartQuantity: number;
  fetchCartTotals: () => Promise<void>;
  error: string | null;
  loading: boolean;
  resetCartTotals: () => void;
};

export type { CartTotalsContextValue };

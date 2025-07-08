type CartTotalsContextValue = {
  cart: CartTotalsContextState;
  cartQuantity: number;
  fetchCartTotals: () => Promise<void>;
  error: string | null;
  loading: boolean;
};

type Cart = {
  id: string;
  quantity: number;
  subtotal: number;
  taxRate: number;
  tax: number;
  total: number;
};

type CartTotalsContextState = Cart | null;

export type { CartTotalsContextValue, CartTotalsContextState };

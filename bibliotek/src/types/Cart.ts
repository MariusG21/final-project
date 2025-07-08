import type { BookPreview } from "./Book";

type Cart = {
  id: string;
  quantity: number;
  subtotal: number;
  taxRate: number;
  tax: number;
  total: number;
};

type CartBook = Omit<BookPreview, "rating">;

export type { Cart, CartBook };

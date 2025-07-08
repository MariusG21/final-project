import { getPercentage, subtractPercentage } from "./percentageUtils.js";

export const getCartTotals = async (cart) => {
  const books = await cart.getBooks();

  const quantity = await cart.countBooks();
  if (!quantity) {
    return await cart.update({
      quantity: 0,
      subtotal: 0,
      taxRate: 0,
      tax: 0,
      total: 0,
    });
  }

  const subtotal = books.reduce((subtotal, { discount, price }) => {
    return subtotal + (discount ? subtractPercentage(price, discount) : price);
  }, 0);

  const taxRate = quantity >= 10 ? 0 : quantity >= 5 ? 5 : 10;
  const tax = getPercentage(subtotal, taxRate);
  const total = subtotal + tax;

  return await cart.update({
    quantity,
    subtotal,
    taxRate,
    tax,
    total,
  });
};

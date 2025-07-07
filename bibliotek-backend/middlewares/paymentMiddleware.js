import { User } from "../models/index.js";
import { getPercentage, subtractPercentage } from "../utils/percentageUtils.js";

const paymentMiddleware = async (cart) => {
  const books = await cart.getBooks();

  const quantity = await cart.countBooks();
  if (quantity) {
    next();
  }

  const subtotal = books.reduce((subtotal, { discount, price }) => {
    return (subtotal += discount ? subtractPercentage(price, discount) : price);
  }, 0);

  const taxRate = quantity >= 10 ? 0 : quantity >= 5 ? 5 : 0;
  const tax = getPercentage(subtotal, taxRate);
  const total = subtotal + tax;

  await cart.update({
    quantity,
    subtotal,
    taxRate,
    tax,
    total,
  });
};

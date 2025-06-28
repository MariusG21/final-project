export const formatCurrency = (cents: number): string => {
  return `$${(cents / 100).toFixed(2)}`;
};

export const formatDiscountedPrice = (
  price: number,
  discount: number
): string => {
  const discountedPrice = price - (price * discount) / 100;
  return formatCurrency(discountedPrice);
};

// 100 - (100 * 10) / 100 = 90

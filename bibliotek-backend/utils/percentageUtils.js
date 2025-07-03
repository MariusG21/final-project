export const getPercentage = (amount, percent) => {
  return amount * (percent / 100);
};

export const addPercentage = (amount, percent) => {
  return amount * (1 + percent / 100);
};
export const subtractPercentage = (amount, percent) => {
  return amount * (1 - percent / 100);
};

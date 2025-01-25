export const calculateOriginalTotal = (price: number, quantity: number): number => {
  return price * quantity;
};

export const calculateDiscount = (originalTotal: number): number => {
  return originalTotal * 0.8; // 80% discount
};

export const calculateFinalAmount = (originalTotal: number, discount: number): number => {
  return originalTotal - discount;
};
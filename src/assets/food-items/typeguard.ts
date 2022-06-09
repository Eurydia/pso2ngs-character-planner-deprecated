export const typeguardFoodItemSignature = (obj: any): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }
  if (typeof obj.amount !== "number") {
    return false;
  }
  return true;
};

export const typeguardFoodItemSignature = (obj: any): boolean => {
  if (
    typeof obj.name !== "string" ||
    typeof obj.amount !== "number"
  ) {
    return false;
  }
  return true;
};

export const typeguardAugmentDataSignature = (obj: any): boolean => {
  if (
    typeof obj.name !== "string" ||
    typeof obj.level !== "number" ||
    typeof obj.isSType !== "boolean"
  ) {
    return false;
  }

  return true;
};

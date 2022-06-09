export const typeguardAugmentDataSignature = (obj: any): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }

  if (typeof obj.level !== "number") {
    return false;
  }

  if (typeof obj.isSType !== "boolean") {
    return false;
  }

  return true;
};

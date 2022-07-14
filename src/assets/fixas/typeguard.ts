export const typeguardFixaDataSignature = (obj: any): boolean => {
  if (typeof obj.name !== "string" || typeof obj.level !== "number") {
    return false;
  }

  return true;
};

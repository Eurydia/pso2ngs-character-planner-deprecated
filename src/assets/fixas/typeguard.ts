export const typeguardFixaDataSignature = (obj: any): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }
  if (typeof obj.level !== "number") {
    return false;
  }

  return true;
};

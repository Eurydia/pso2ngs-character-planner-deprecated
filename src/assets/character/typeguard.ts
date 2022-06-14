export const typeguardClassDataSignature = (obj: any): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }

  return true;
};

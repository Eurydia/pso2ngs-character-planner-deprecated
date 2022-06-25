export const typeguardWeaponDataSignature = (obj: any): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }
  return true;
};

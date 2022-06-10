export const typeguardWeaponDataSignature = (obj: any): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }
  // if (typeof obj.series !== "string") {
  //   return false;
  // }

  return true;
};

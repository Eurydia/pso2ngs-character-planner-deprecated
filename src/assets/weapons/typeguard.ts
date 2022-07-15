import { WeaponDataSignature, WeaponItemSignature } from "./types";

export const typeguardWeaponDataSignature = (
  obj: any | WeaponDataSignature,
): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }
  return true;
};

export const typeguardWeaponItemSignature = (
  obj: any | WeaponItemSignature,
): boolean => {
  if (!typeguardWeaponDataSignature(obj.weapon)) {
    return false;
  }
  return true;
};

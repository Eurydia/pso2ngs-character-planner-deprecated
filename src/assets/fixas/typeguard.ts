import { FixaDataSignature } from "./types";

export const typeguardFixaDataSignature = (
  obj: FixaDataSignature,
): boolean => {
  if (typeof obj.name !== "string") {
    return false;
  }
  if (typeof obj.level !== "number") {
    return false;
  }

  return true;
};

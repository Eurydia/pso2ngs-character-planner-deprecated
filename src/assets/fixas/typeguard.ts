import { FixaDataSignature } from "./types";

export const isFixaDataSignature = (
  obj: any | FixaDataSignature,
): boolean => {
  if (typeof obj.name !== "string" || typeof obj.level !== "number") {
    return false;
  }

  return true;
};

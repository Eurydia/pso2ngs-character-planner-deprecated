import { AugmentDataSignature } from "./types";

export const isAugmentDataSignature = (
  obj: any | AugmentDataSignature,
): boolean => {
  if (
    typeof obj.name !== "string" ||
    typeof obj.level !== "number" ||
    typeof obj.isSType !== "boolean"
  ) {
    return false;
  }

  return true;
};

import AUGMENTS from ".";
import { ENHANCEMENT_MAX } from "../constants";
import { typeguardAugmentDataSignature } from "./typeguard";
import { AugmentData, AugmentDataSignature } from "./types";

export const getActiveAugmentSlots = (
  enhancement: number,
): number => {
  if (enhancement >= 50) {
    return 5;
  } else if (enhancement >= 40) {
    return 4;
  } else if (enhancement >= 20) {
    return 3;
  } else {
    return 2;
  }
};

export const getAugmentTemplate = (): (AugmentData | null)[] => {
  let res: (AugmentData | null)[] = [];
  for (let i = 0; i < getActiveAugmentSlots(ENHANCEMENT_MAX); i++) {
    res.push(null);
  }

  return res;
};

export const augmentDataToSignature = (
  augment: AugmentData | null,
): AugmentDataSignature | null => {
  if (augment === null) {
    return null;
  }
  return {
    name: augment.name,
    level: augment.level,
    s: augment.s,
  };
};

export const augmentDataFromSignature = (
  signature: AugmentDataSignature | null,
): AugmentData | null => {
  if (
    signature === null ||
    (signature && !typeguardAugmentDataSignature(signature))
  ) {
    return null;
  }

  for (const data of AUGMENTS) {
    if (
      data.name === signature.name &&
      data.level === signature.level &&
      data.s === signature.s
    ) {
      return data;
    }
  }

  return null;
};

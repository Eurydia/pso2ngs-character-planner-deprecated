import AUGMENTS from ".";
import { ENHANCEMENT_MAX } from "../../stores";
import { typeguardAugmentDataSignature } from "./typeguard";
import { AugmentData, AugmentDataSignature } from "./types";

export const getAugmentTemplate = (): (AugmentData | null)[] => {
  let res: (AugmentData | null)[] = [];

  const slots = 1 + Math.floor((ENHANCEMENT_MAX - 10) / 10);
  for (let i = 0; i < slots; i++) {
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
    isSType: augment.isSType,
  };
};

export const augmentDataSignatureToData = (
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
      data.isSType === signature.isSType
    ) {
      return data;
    }
  }

  return null;
};

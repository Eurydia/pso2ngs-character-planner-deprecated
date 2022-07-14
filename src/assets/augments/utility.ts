import AUGMENTS from "./data";
import { ENHANCEMENT_MAX } from "../constants";
import { typeguardAugmentDataSignature } from "./typeguard";
import { AugmentData, AugmentDataSignature } from "./types";

const AUGMENT_LOOKUP: { [key: string]: AugmentData } = {};

/**
 * Take an augment signature and return a string
 * which can be used as a lookup key.
 * @param signature
 * @returns
 */
const getLookupkey = (signature: AugmentDataSignature): string => {
  const { name, level, isSType } = signature;
  return `${name}-${level}-${isSType}`;
};

for (const data of AUGMENTS) {
  const key = getLookupkey(data);
  AUGMENT_LOOKUP[key] = data;
}

export const getActiveAugmentSlots = (
  enhancement: number,
): number => {
  if (enhancement >= 50) {
    return 5;
  } else if (enhancement >= 40) {
    return 4;
  } else if (enhancement >= 20) {
    return 3;
  }
  return 2;
};

export const getAugmentTemplate = (): (AugmentData | null)[] => {
  let template: (AugmentData | null)[] = [];
  for (let i = 0; i < getActiveAugmentSlots(ENHANCEMENT_MAX); i++) {
    template.push(null);
  }

  return template;
};

export const augmentDataToSignature = ({
  name,
  level,
  isSType,
}: AugmentData): AugmentDataSignature => {
  return {
    name,
    level,
    isSType,
  };
};

export const augmentDataFromSignature = (
  signature: AugmentDataSignature,
): AugmentData | null => {
  if (!typeguardAugmentDataSignature(signature)) {
    return null;
  }

  // create lookup key from the signature
  const lookup_key: string = getLookupkey(signature);
  const data: undefined | AugmentData = AUGMENT_LOOKUP[lookup_key];
  if (Boolean(data)) {
    return data;
  }

  return null;
};

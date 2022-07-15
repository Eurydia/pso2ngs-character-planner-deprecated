import AUGMENT_DATA from "./data";
import { ENHANCEMENT_MAX } from "../constants";
import { typeguardAugmentDataSignature } from "./typeguard";
import { AugmentData, AugmentDataSignature } from "./types";

const AUGMENT_LOOKUP: { [key: string]: AugmentData } = {};

/**
 * Take an augment signature and return a string
 * which can be used as a lookup key.
 * @param signature signature to turn into lookup key.
 * @returns
 */
const makeLookupkey = ({
  name,
  level,
  isSType,
}: AugmentDataSignature): string => {
  return `${name}-${level}-${isSType}`;
};
// populate lookup table
for (const data of AUGMENT_DATA) {
  const key = makeLookupkey(data);
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

/**
 * Turn an `AugmentData` into its signature form.
 * @param data data to turn into signature.
 * @returns
 */
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

/**
 * Rebuild an `AugmentData` from its signature.
 * Return `null` if cannot rebuild or
 * failed type guard check.
 * @param signature
 * @returns
 */
export const augmentDataFromSignature = (
  signature: AugmentDataSignature,
): AugmentData | null => {
  if (!typeguardAugmentDataSignature(signature)) {
    return null;
  }

  // create lookup key from the signature
  const lookup_key: string = makeLookupkey(signature);
  const data: undefined | AugmentData = AUGMENT_LOOKUP[lookup_key];
  if (Boolean(data)) {
    return data;
  }

  return null;
};

import FIXA_DATA from "./data";
import { typeguardFixaDataSignature } from "./typeguard";
import { FixaData, FixaDataSignature } from "./types";

const FIXA_LOOKUP: { [key: string]: FixaData } = {};

/**
 * Take a fixa signature and make a string
 * which can be used to a lookup key.
 * @param signature signature to turn into lookup key.
 * @returns
 */
const makeLookupKey = ({
  name,
  level,
}: FixaDataSignature): string => {
  return `${name}-${level}`;
};

// populate lookup table
for (const data of FIXA_DATA) {
  const lookup_key = makeLookupKey(data);
  FIXA_LOOKUP[lookup_key] = data;
}

export const fixaDataToSignature = ({
  name,
  level,
}: FixaData): FixaDataSignature => {
  return { name, level };
};

export const fixaDataFromSignature = (
  signature: FixaDataSignature,
): FixaData | null => {
  if (!typeguardFixaDataSignature(signature)) {
    return null;
  }

  const lookup_key = makeLookupKey(signature);
  const data: undefined | FixaData = FIXA_LOOKUP[lookup_key];

  if (Boolean(data)) {
    return data;
  }

  return null;
};

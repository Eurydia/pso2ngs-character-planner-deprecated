import FIXAS from ".";
import { typeguardFixaDataSignature } from "./typeguard";
import { FixaData, FixaDataSignature } from "./types";

export const fixaDataToSignature = ({
  name,
  level,
}: FixaData): FixaDataSignature => {
  return { name, level };
};

export const fixaDataFromSignature = (
  signature: FixaDataSignature | null,
): FixaData | null => {
  if (
    signature === null ||
    (signature && !typeguardFixaDataSignature(signature))
  ) {
    return null;
  }

  for (const data of FIXAS) {
    if (
      data.name === signature.name &&
      data.level === signature.level
    ) {
      return data;
    }
  }
  return null;
};

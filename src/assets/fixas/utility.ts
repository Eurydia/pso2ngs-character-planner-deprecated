import FIXAS from ".";
import { typeguardFixaDataSignature } from "./typeguard";
import { FixaData, FixaDataSignature } from "./types";

export const fixaDataToSignature = (
  fixa: FixaData | null,
): FixaDataSignature | null => {
  if (fixa === null) {
    return null;
  }
  return { name: fixa.name, level: fixa.level };
};

export const fixaDataSignatureToData = (
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

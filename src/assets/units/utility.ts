import UNITS from ".";
import { ENHANCEMENT_MAX, ENHANCEMENT_MIN } from "../../stores";
import {
  AugmentDataSignature,
  augmentDataFromSignature,
  augmentDataToSignature,
  getAugmentTemplate,
} from "../augments";
import {
  FixaData,
  fixaDataFromSignature,
  fixaDataToSignature,
} from "../fixas";
import { typeguardUnitDataSignature } from "./typeguard";
import {
  Unit,
  UnitData,
  UnitDataSignature,
  UnitSignature,
} from "./types";

export const getUnitTemplate = (): Unit => {
  return {
    unit: null,
    fixa: null,
    enhancement: ENHANCEMENT_MIN,
    augments: getAugmentTemplate(),
  };
};

export const unitDataToSignature = ({
  name,
}: UnitData): UnitDataSignature => {
  return { name };
};

export const unitDataFromSignature = (
  signature: UnitDataSignature | null,
): UnitData | null => {
  if (
    signature === null ||
    (signature && !typeguardUnitDataSignature(signature))
  ) {
    return null;
  }

  for (const data of UNITS) {
    if (data.name === signature.name) {
      return data;
    }
  }

  return null;
};

type UnitKey = "unita" | "unitb" | "unitc";

export const saveUnitToLocal = (
  { unit, fixa, enhancement, augments }: Unit,
  key: UnitKey,
) => {
  let unit_sig: UnitDataSignature | null = null;
  if (unit !== null) {
    unit_sig = unitDataToSignature(unit);
  }

  const fixa_sig: FixaData | null = null;
  if (fixa !== null) {
    fixaDataToSignature(fixa);
  }

  let augment_sigs: (AugmentDataSignature | null)[] = [];
  for (const augment of augments) {
    augment_sigs.push(augmentDataToSignature(augment));
  }

  const signature: UnitSignature = {
    unit: unit_sig,
    fixa: fixa_sig,
    enhancement,
    augments: augment_sigs,
  };
  localStorage.setItem(key, JSON.stringify(signature));
};

export const loadUnitFromLocal = (key: UnitKey): Unit => {
  const as_string = localStorage.getItem(key);

  if (!as_string) {
    return getUnitTemplate();
  }

  const stored: UnitSignature = JSON.parse(as_string);
  let res: Unit = getUnitTemplate();
  res.unit = unitDataFromSignature(stored.unit);
  res.fixa = fixaDataFromSignature(stored.fixa);

  if (Array.isArray(stored.augments)) {
    for (let i = 0; i < res.augments.length; i++) {
      const aug_sig = stored.augments[i];
      res.augments[i] = augmentDataFromSignature(aug_sig);
    }
  }

  if (
    typeof stored.enhancement === "number" &&
    stored.enhancement >= ENHANCEMENT_MIN &&
    stored.enhancement <= ENHANCEMENT_MAX
  ) {
    res.enhancement = stored.enhancement;
  }

  return res;
};

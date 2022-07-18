import UNITS from ".";
import { ENHANCEMENT_MAX, ENHANCEMENT_MIN } from "../../stores";
import {
  AugmentDataSignature,
  rebuildAugmentData,
  reduceAugmentData,
  getEmptyAugment,
} from "../augments";
import { FixaData, rebuildFixaData, reduceFixaData } from "../fixas";
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
    augments: getEmptyAugment(),
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
    reduceFixaData(fixa);
  }

  let augment_sigs: (AugmentDataSignature | null)[] = [];
  for (const augment of augments) {
    augment_sigs.push(reduceAugmentData(augment));
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
  res.fixa = rebuildFixaData(stored.fixa);

  if (Array.isArray(stored.augments)) {
    const arr_length = Math.min(
      res.augments.length,
      stored.augments.length,
    );
    for (let i = 0; i < arr_length; i++) {
      const aug_sig = stored.augments[i];
      res.augments[i] = rebuildAugmentData(aug_sig);
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

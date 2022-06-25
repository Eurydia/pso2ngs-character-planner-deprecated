import WEAPONS from ".";
import {
  ENHANCEMENT_MAX,
  ENHANCEMENT_MIN,
  POTENTIAL_MAX,
  POTENTIAL_MIN,
} from "../../stores";
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
import { typeguardWeaponDataSignature } from "./typeguard";
import {
  Weapon,
  WeaponData,
  WeaponDataSignature,
  WeaponSignature,
} from "./types";

export const getWeaponTemplate = (): Weapon => {
  const augments = getAugmentTemplate();
  return {
    weapon: null,
    fixa: null,
    enhancement: ENHANCEMENT_MIN,
    potential_level: POTENTIAL_MIN,
    augments,
  };
};

export const weaponDataToSignature = ({
  name,
}: WeaponData): WeaponDataSignature => {
  return { name };
};

export const weaponDataFromSignature = (
  signature: WeaponDataSignature | null,
): WeaponData | null => {
  if (
    signature === null ||
    (signature && !typeguardWeaponDataSignature(signature))
  ) {
    return null;
  }

  for (const data of WEAPONS) {
    if (data.name === signature.name) {
      return data;
    }
  }
  return null;
};

export const saveWeaponToLocal = ({
  weapon,
  fixa,
  potential_level,
  enhancement,
  augments,
}: Weapon) => {
  let weapon_sig: WeaponDataSignature | null = null;
  if (weapon !== null) {
    weapon_sig = weaponDataToSignature(weapon);
  }

  const fixa_sig: FixaData | null = null;
  if (fixa !== null) {
    fixaDataToSignature(fixa);
  }

  let augment_sigs: (AugmentDataSignature | null)[] = [];
  for (const augment of augments) {
    augment_sigs.push(augmentDataToSignature(augment));
  }

  const signature: WeaponSignature = {
    weapon: weapon_sig,
    fixa: fixa_sig,
    potential_level,
    enhancement,
    augments: augment_sigs,
  };
  localStorage.setItem("weapon", JSON.stringify(signature));
};

export const loadWeaponFromLocal = (): Weapon => {
  const as_string = localStorage.getItem("weapon");

  if (!as_string) {
    return getWeaponTemplate();
  }

  const stored: WeaponSignature = JSON.parse(as_string);
  let res: Weapon = getWeaponTemplate();
  res.weapon = weaponDataFromSignature(stored.weapon);
  res.fixa = fixaDataFromSignature(stored.fixa);

  if (Array.isArray(stored.augments)) {
    const arr_length = Math.min(
      res.augments.length,
      stored.augments.length,
    );
    for (let i = 0; i < arr_length; i++) {
      const aug_sig = stored.augments[i];
      res.augments[i] = augmentDataFromSignature(aug_sig);
    }
  }

  if (
    typeof stored.potential_level === "number" &&
    stored.potential_level >= POTENTIAL_MIN &&
    stored.potential_level <= POTENTIAL_MAX
  ) {
    res.potential_level = stored.potential_level;
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

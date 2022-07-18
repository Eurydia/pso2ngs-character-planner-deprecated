import WEAPON_DATA from "./data";
import {
  ENHANCEMENT_MAX,
  ENHANCEMENT_MIN,
  POTENTIAL_MAX,
  POTENTIAL_MIN,
} from "../../stores";
import {
  AugmentDataSignature,
  rebuildAugmentData,
  reduceAugmentData,
  getEmptyAugment,
} from "../augments";
import {
  FixaData,
  rebuildFixaData,
  FixaDataSignature,
  reduceFixaData,
} from "../fixas";
import { typeguardWeaponDataSignature } from "./typeguard";
import {
  WeaponItem,
  WeaponData,
  WeaponDataSignature,
  WeaponItemSignature,
} from "./types";

const WEAPON_LOCAL_STORAGE_KEY = "weapon";

const WEAPON_LOOKUP: { [key: string]: WeaponData } = {};

/**
 * Take a food data signature and return a string
 * which can be used as a key for the lookup table.
 * @param signature
 * @returns
 */
const makeLookupKey = (signature: WeaponDataSignature): string => {
  const { name } = signature;
  return name;
};
// populate lookup table
for (const data of WEAPON_DATA) {
  const lookup_key = makeLookupKey(data);
  WEAPON_LOOKUP[lookup_key] = data;
}

/**
 * Strip `WeaponData` to its signature.
 * @param data
 * @returns
 */
export const reduceWeaponData = (
  data: WeaponData,
): WeaponDataSignature => {
  const { name } = data;
  return { name };
};

/**
 * rebuild a `WeaponData` from a signature.
 * Return `null` when failed.
 * @param signature
 * @returns
 */
export const rebuildWeaponData = (
  signature: WeaponDataSignature,
): WeaponData | null => {
  if (!typeguardWeaponDataSignature(signature)) {
    return null;
  }

  const lookup_key = makeLookupKey(signature);
  const data: undefined | WeaponData = WEAPON_LOOKUP[lookup_key];
  if (Boolean(data)) {
    return data;
  }
  return null;
};

/**
 * Save `WeaponItem` to local storage.
 * @param item `WeaponItem` to save.
 */
export const saveWeaponItem = (item: WeaponItem) => {
  const { weapon, fixa, potential_level, enhancement, augments } =
    item;

  const weapon_signature: null | WeaponDataSignature = Boolean(weapon)
    ? reduceWeaponData(weapon!)
    : null;

  const fixa_signature: null | FixaDataSignature = Boolean(fixa)
    ? reduceFixaData(fixa!)
    : null;

  const augment_signatures: (null | AugmentDataSignature)[] = [];
  for (const augment of augments) {
    const augment_signature: null | AugmentDataSignature = Boolean(
      augment,
    )
      ? reduceAugmentData(augment!)
      : null;
    augment_signatures.push(augment_signature);
  }

  // combine signatures into a signature object
  const signature: WeaponItemSignature = {
    weapon: weapon_signature,
    fixa: fixa_signature,
    potential_level,
    enhancement,
    augments: augment_signatures,
  };

  // save signature to local storage
  localStorage.setItem(
    WEAPON_LOCAL_STORAGE_KEY,
    JSON.stringify(signature),
  );
};

/**
 * Load `WeaponItemSignature` from local storage.
 * @returns
 */
const loadLocal = (): WeaponItemSignature => {
  const json_string = localStorage.getItem(WEAPON_LOCAL_STORAGE_KEY);

  if (!Boolean(json_string)) {
    return getWeaponItemTemplate();
  }

  let signature: WeaponItemSignature = JSON.parse(json_string!);

  return signature;
};

export const loadWeaponItem = (): WeaponItem => {
  const signature: WeaponItemSignature = loadLocal();

  const template: WeaponItem = getWeaponItemTemplate();

  const weapon: null | WeaponData = Boolean(signature.weapon)
    ? rebuildWeaponData(signature.weapon!)
    : null;

  const fixa: null | FixaData = Boolean(signature.fixa)
    ? rebuildFixaData(signature.fixa!)
    : null;

  if (Array.isArray(stored.augments)) {
    const arr_length = Math.min(
      item.augments.length,
      stored.augments.length,
    );
    for (let i = 0; i < arr_length; i++) {
      const aug_sig = stored.augments[i];
      item.augments[i] = rebuildAugmentData(aug_sig);
    }
  }

  if (
    typeof stored.potential_level === "number" &&
    stored.potential_level >= POTENTIAL_MIN &&
    stored.potential_level <= POTENTIAL_MAX
  ) {
    item.potential_level = stored.potential_level;
  }

  if (
    typeof stored.enhancement === "number" &&
    stored.enhancement >= ENHANCEMENT_MIN &&
    stored.enhancement <= ENHANCEMENT_MAX
  ) {
    item.enhancement = stored.enhancement;
  }

  return item;
};

import WEAPON_DATA from "./data";
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
  FixaDataSignature,
  fixaDataToSignature,
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
 * Create an empty `WeaponItem`.
 * @returns
 */
export const getWeaponItemTemplate = (): WeaponItem => {
  return {
    weapon: null,
    fixa: null,
    enhancement: ENHANCEMENT_MIN,
    potential_level: POTENTIAL_MIN,
    augments: getAugmentTemplate(),
  };
};

/**
 * Reduce `WeaponData` to its signature.
 * @param data
 * @returns
 */
export const weaponDataToSignature = (
  data: WeaponData,
): WeaponDataSignature => {
  const { name } = data;
  return { name };
};

/**
 * Generate `WeaponData` from a signature.
 * Return `null` if failed to generate.
 * @param signature
 * @returns
 */
export const weaponDataFromSignature = (
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
export const saveWeaponItemToLocal = (item: WeaponItem) => {
  const { weapon, fixa, potential_level, enhancement, augments } =
    item;

  const weapon_signature: null | WeaponDataSignature = Boolean(weapon)
    ? weaponDataToSignature(weapon!)
    : null;

  const fixa_signature: null | FixaDataSignature = Boolean(fixa)
    ? fixaDataToSignature(fixa!)
    : null;

  const augment_signatures: (null | AugmentDataSignature)[] = [];
  for (const augment of augments) {
    const augment_signature: null | AugmentDataSignature = Boolean(
      augment,
    )
      ? augmentDataToSignature(augment!)
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

  if (!Array.isArray(signature.augments)) {
    signature.augments = [];
  }

  return signature;
};

export const loadWeaponFromLocal = (): WeaponItem => {
  const signature: WeaponItemSignature = loadLocal();

  const weapon: null | WeaponData = Boolean(signature.weapon)
    ? weaponDataFromSignature(signature.weapon!)
    : null;

  const fixa: null | FixaData = Boolean(signature.fixa)
    ? fixaDataFromSignature(signature.fixa!)
    : null;

  if (Array.isArray(stored.augments)) {
    const arr_length = Math.min(
      item.augments.length,
      stored.augments.length,
    );
    for (let i = 0; i < arr_length; i++) {
      const aug_sig = stored.augments[i];
      item.augments[i] = augmentDataFromSignature(aug_sig);
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

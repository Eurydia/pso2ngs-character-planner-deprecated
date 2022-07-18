import DATA_ARR from "./data";
import { ENHANCEMENT_MAX } from "../constants";
import { isAugmentDataSignature } from "./typeguard";
import { AugmentData, AugmentDataSignature } from "./types";

const AUGMENT_STORAGE_KEY = "augments";

const DATA_LOOKUP: { [key: string]: AugmentData } = {};

/**
 * Using `Map` as a hash table is more convoluted
 * than I originally thought, so I decided
 * to not use it at all.
 *
 * Instead of using `AugmentDataSignature` as key
 * and corresponding `AugmentData` as value in a `Map`,
 * I used a normal object with the key being a string.
 *
 * This function take an `AugmentDataSignature`-like object,
 * and return a string which is used solely for the purpose
 * of indexing the lookup table.
 *
 * @function
 * @param {AugmentDataSignature} signature Signature to turn into lookup key.
 * @returns A string which can be used to index items in lookup table.
 */
const makeLookupkey = (signature: AugmentDataSignature): string => {
  const { name, level, isSType } = signature;
  return `${name}~${level}~${isSType}`;
};

/**
 * This code populate the lookup table.
 * It should help rebuild augments from signature
 * faster.
 */
for (const data of DATA_ARR) {
  const key = makeLookupkey(data);
  DATA_LOOKUP[key] = data;
}

/**
 *
 * @function
 * @param {number} enhancement
 * @returns
 */
export const getAugmentSlots = (enhancement: number): number => {
  if (enhancement < 0) {
    throw Error(
      "Negative enhancement is used obtain active augment slots.",
    );
  }
  if (enhancement >= 50) {
    return 5;
  } else if (enhancement >= 40) {
    return 4;
  } else if (enhancement >= 20) {
    return 3;
  }
  return 2;
};

/**
 * An array is used to represent augments.
 * Each index represent an augment slot
 * which can either be an `AugmentData` or `null`,
 *
 * The length of the array is dictated
 * by the maxmimum active slots. (5 slots at enhancement 50
 * as of Kvaris update)
 *
 * This function simply returns an augment array
 * at its "ground state" where every element
 * is null.
 * @function
 * @returns Array of `null`,
 */
const getGroudState = (): null[] => {
  const n: number = getAugmentSlots(ENHANCEMENT_MAX);

  const arr: null[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(null);
  }

  return arr;
};

/**
 * Reduce `AugmentData` to its signature form.
 * @param data
 * @returns An `AugmentDataSignature`.
 */
export const reduceAugmentData = (
  data: AugmentData,
): AugmentDataSignature => {
  const { name, level, isSType } = data;
  return {
    name,
    level,
    isSType,
  };
};

/**
 * Rebuild an `AugmentData` from its signature.
 * @param signature
 * @returns An `AugmentData`. `null` when failed to rebuild.
 */
export const rebuildAugmentData = (
  signature: AugmentDataSignature,
): AugmentData | null => {
  if (!isAugmentDataSignature(signature)) {
    return null;
  }

  const lookup_key: string = makeLookupkey(signature);
  const data: undefined | AugmentData = DATA_LOOKUP[lookup_key];
  if (Boolean(data)) {
    return data;
  }

  return null;
};

/**
 * Prefix storage key with the given string.
 * @param prefix
 * @returns
 */
const prefixStorageKey = (prefix: string): string => {
  return `${prefix}-${AUGMENT_STORAGE_KEY}`;
};

/**
 * Save an array of `AugmentData` to local storage.
 * @param key_prefix string to prefix the key with.
 * @param data_arr
 */
export const saveAugmentData = (
  key_prefix: string,
  data_arr: (null | AugmentData)[],
): void => {
  const signature_arr: (null | AugmentDataSignature)[] = [];

  for (const data of data_arr) {
    const signature: null | AugmentDataSignature = Boolean(data)
      ? reduceAugmentData(data!)
      : null;

    signature_arr.push(signature);
  }

  const key = prefixStorageKey(key_prefix);
  const json_string = JSON.stringify(signature_arr);
  localStorage.setItem(key, json_string);
};

/**
 * Load an array of `AugmentDataSignature` from local storage.
 * @param key_prefix String to prefix storage key with.
 * @returns
 */
const loadLocal = (
  key_prefix: string,
): (null | AugmentDataSignature)[] => {
  const key = prefixStorageKey(key_prefix);
  const json_string: null | string = localStorage.getItem(key);

  if (!Boolean(json_string)) {
    return getGroudState();
  }

  const signature_arr: (null | AugmentDataSignature)[] = JSON.parse(
    json_string!,
  );
  if (!Array.isArray(signature_arr)) {
    return getGroudState();
  }

  const max_slots: number = getAugmentSlots(ENHANCEMENT_MAX);
  for (let i = 0; i < max_slots; i++) {
    const signature: undefined | null | AugmentDataSignature =
      signature_arr[i];

    const checked_signature: null | AugmentDataSignature =
      Boolean(signature) && isAugmentDataSignature(signature)
        ? signature
        : null;
    signature_arr[i] = checked_signature;
  }

  return signature_arr;
};

/**
 * Load `AugmentData` from local storage using the provided key prefix.
 * @param key_prefix
 * @returns
 */
export const loadAugmentData = (
  key_prefix: string,
): (null | AugmentData)[] => {
  const signature_arr: (null | AugmentDataSignature)[] =
    loadLocal(key_prefix);

  const data_arr: (null | AugmentData)[] = [];

  return data_arr;
};

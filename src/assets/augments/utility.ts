import DATA_ARR from "./data";
import { ENHANCEMENT_MAX } from "../constants";
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
 * @param {AugmentDataSignature} signature Signature-like object to turn into key.
 * @returns A string which can be used to index items in lookup table.
 */
const makeSignatureString = (
  signature: AugmentDataSignature,
): string => {
  const { name, level, isSType } = signature;
  return `${name}~${level}~${isSType}`;
};

/**
 * This code populate the lookup table.
 * It should help rebuild augments from signature
 * faster.
 */
for (const data of DATA_ARR) {
  const key: string = makeSignatureString(data);
  DATA_LOOKUP[key] = data;
}

/**
 * This a simple function. It takes an enhancement level,
 * then return a number of active augment slots.
 *
 * As of Kvaris update, this function returns
 * - at enhancement `0` to `19`, `2` active slots,
 * - at enhancement `20` to `39`, `3` active slots,
 * - at enhancement `40` to `49`, `4` active slots, and
 * - at enhancement `50`, `5` active slots.
 *
 * It also throws an error when the enhancement used
 * is a negative value. Though, this error should never be thrown EVER.
 *
 * @function
 * @param {number} enhancement Enhancement level.
 * @returns A number of active augment slots.
 */
export const getAugmentSlots = (enhancement: number): number => {
  if (enhancement < 0) {
    throw Error(
      "Negative enhancement is used to obtain active augment slots.",
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
 * @returns An array of `null`.
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
 * This function is responsible for looking up `AugmentData`
 * in the lookup table.
 *
 * If it found the `AugmentData`, it will return it.
 * If it cannot find the corresponding `AugmentData` using
 * the given lookup_key, it will return `null` instead.
 *
 * @function
 * @param signature_string Lookup key to use.
 * @returns Either `AugmentData` or `null`.
 */
const lookupAugmentData = (
  signature_string: string,
): null | AugmentData => {
  const value: undefined | AugmentData =
    DATA_LOOKUP[signature_string];
  const data: null | AugmentData = Boolean(value) ? value : null;
  return data;
};

/**
 * Prefix storage key with the given string.
 *
 * @function
 * @param key_prefix A string to prefix the storage key.
 * @returns A prefixed storage key.
 */
const prefixStorageKey = (key_prefix: string): string => {
  return `${key_prefix}->${AUGMENT_STORAGE_KEY}`;
};

/**
 * This function turns an array of `AugmentData`
 * into an array of signature strings,
 * then save it to local storage.
 *
 * @function
 * @param prefix_string A string to prefix storage key with.
 * @param data_arr An augment array to save.
 */
export const saveAugmentData = (
  prefix_string: string,
  data_arr: (null | AugmentData)[],
): void => {
  const signature_string_arr: (null | string)[] = [];

  for (const data of data_arr) {
    const signature_string: null | string = Boolean(data)
      ? makeSignatureString(data!)
      : null;

    signature_string_arr.push(signature_string);
  }

  const key = prefixStorageKey(prefix_string);
  const json_string = JSON.stringify(signature_string_arr);
  localStorage.setItem(key, json_string);
};

/**
 * Load an array of signature strings from local storage.
 *
 * @function
 * @param {string} prefix_string A string to prefix storage key with.
 * @returns {(null | string)[]} An array of signature strings.
 */
const loadLocal = (prefix_string: string): (null | string)[] => {
  const key = prefixStorageKey(prefix_string);
  const json_string: null | string = localStorage.getItem(key);

  // Return ground state since no data is saved.
  if (!Boolean(json_string)) {
    return getGroudState();
  }

  const signature_string_arr: (null | string)[] = JSON.parse(
    json_string!,
  );

  // Return ground state since the signature array
  // is not acutally an array.
  if (!Array.isArray(signature_string_arr)) {
    return getGroudState();
  }

  const augment_arr_length = getAugmentSlots(ENHANCEMENT_MAX);

  // Look through every element and replace `undefined` with `null`.
  for (let i = 0; i < augment_arr_length; i++) {
    const signature_string: null | undefined | string =
      signature_string_arr[i];

    if (typeof signature_string === "undefined") {
      signature_string_arr[i] = null;
    }
  }

  return signature_string_arr;
};

/**
 * Load `AugmentData` from local storage.
 *
 * First, an array of signature strings is loaded
 * via an auxillary function.
 *
 * Then the signatures are matched with their
 * `AugmentData` counterpart.
 *
 * Finally, return an array of `AugmentData`.
 *
 * @function
 * @param {string} prefix_string A string to prefix storage key with.
 * @returns {AugmentData[]} An augment array.
 */
export const loadAugmentData = (
  prefix_string: string,
): (null | AugmentData)[] => {
  const signature_string_arr: (null | string)[] =
    loadLocal(prefix_string);

  const data_arr: (null | AugmentData)[] = [];

  const augment_arr_length = getAugmentSlots(ENHANCEMENT_MAX);
  for (let i = 0; i < augment_arr_length; i++) {
    const signature_string: null | string = signature_string_arr[i];

    data_arr[i] = lookupAugmentData(signature_string!);
  }

  return data_arr;
};

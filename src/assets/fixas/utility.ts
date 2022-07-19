import DATA_ARR from "./data";
import { FixaData, FixaDataSignature } from "./types";

const LOCAL_STORAGE_KEY = "fixa";

const LOOKUP_TABLE: { [key: string]: FixaData } = {};

/**
 * Using `Map` as a hash table is more convoluted
 * than I originally thought, so I decided
 * to not use it at all.
 *
 * Instead of using `FixaDataSignature` as key
 * and corresponding `FixaData` as value in a `Map`,
 * I used a normal object with the key being a string.
 *
 * This function take an `FixaDataSignature`-like object,
 * and return a string which is used solely for the purpose
 * of indexing the lookup table.
 *
 * @function
 * @param {FixaDataSignature} signature A signature-like object to turn into key.
 * @returns {string} A string which can be used to index items in lookup table.
 */
const makeSignatureString = (
  signature: FixaDataSignature,
): string => {
  const { name, level } = signature;
  return `${name}~${level}`;
};

/**
 * This code populate the lookup table.
 * It should help rebuild augments from signature
 * faster.
 */
for (const data of DATA_ARR) {
  const key = makeSignatureString(data);
  LOOKUP_TABLE[key] = data;
}

/**
 * This function is responsible for looking up `FixaData`
 * in the lookup table.
 *
 * If it found the signature's counterpart, it will return it.
 * If it cannot, return `null` instead.
 *
 * @function
 * @param {string} signature_string Lookup key to use.
 * @returns {null | FixaData} An `AugmentData`.
 * `null` when can't find any match.
 */
const lookupFixaData = (
  signature_string: string,
): FixaData | null => {
  const value: undefined | FixaData = LOOKUP_TABLE[signature_string];
  const data: null | FixaData = Boolean(value) ? value : null;
  return data;
};

/**
 * Prefix storage key with the given string.
 *
 * @function
 * @param {string} key_prefix A string to prefix the storage key.
 * @returns {string} A prefixed storage key.
 */
const prefixStorageKey = (key_prefix: string): string => {
  return `${key_prefix}->${LOCAL_STORAGE_KEY}`;
};

/**
 * This function turns a `FixaData`
 * into a signature string, then save it to local storage.
 *
 * @function
 * @param {string} prefix_string A string to prefix storage key with.
 * @param {null | FixaData } data A `FixaData` to save.
 */
export const saveFixaData = (
  prefix_string: string,
  data: null | FixaData,
): void => {
  const signature_string: null | string = Boolean(data)
    ? makeSignatureString(data!)
    : null;

  const key: string = prefixStorageKey(prefix_string);
  const json_string: string = JSON.stringify(signature_string);
  localStorage.setItem(key, json_string);
};

/**
 * Load a `FixaData` from local storage.
 *
 * @function
 * @param {string} prefix_string A string to prefix storage key with.
 * @returns {null | string} A signature string or null.
 */
const loadLocal = (prefix_string: string): null | string => {
  const key: string = prefixStorageKey(prefix_string);
  const json_string: null | string = localStorage.getItem(key);
  if (!Boolean(json_string)) {
    return null;
  }

  const signature_string: string = JSON.parse(json_string!);
  return signature_string;
};

/**
 * Load `FixaData` from local storage.
 *
 * First, a signature strings is loaded
 * via an auxillary function.
 *
 * Then the signature is matched with its counterpart.
 *
 * Finally, return an array of `AugmentData` if a match is found.
 * If a match is not found, return `null` instead.
 *
 * @function
 * @param {string} prefix_string A string to prefix storage key with.
 * @returns {null | FixaData} An augment array.
 */
export const loadFixaData = (
  prefix_string: string,
): null | FixaData => {
  const signature_string: null | string = loadLocal(prefix_string);

  if (Boolean(signature_string)) {
    return lookupFixaData(signature_string!);
  }
  return null;
};

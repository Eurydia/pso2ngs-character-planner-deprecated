import FIXA_DATA from "./data";
import { isFixaDataSignature } from "./typeguard";
import { FixaData, FixaDataSignature } from "./types";

const FIXA_LOCAL_STORAGE_KEY = "fixa";

const FIXA_LOOKUP: { [key: string]: FixaData } = {};

/**
 * Take a fixa signature and make a string
 * which can be used to a lookup key.
 * @param signature signature to turn into lookup key.
 * @returns
 */
const makeLookupKey = (signature: FixaDataSignature): string => {
  const { name, level } = signature;
  return `${name}-${level}`;
};
// populate lookup table
for (const data of FIXA_DATA) {
  const lookup_key = makeLookupKey(data);
  FIXA_LOOKUP[lookup_key] = data;
}

/**
 * Reduce `FixaData` to its signature.
 * @param data
 * @returns a `FixaDataSignature`.
 */
export const reduceFixaData = (data: FixaData): FixaDataSignature => {
  const { name, level } = data;
  return { name, level };
};

/**
 * Rebuild a `FixaData` from a signature.
 * @param signature
 * @returns
 */
export const rebuildFixaData = (
  signature: FixaDataSignature,
): FixaData | null => {
  if (!isFixaDataSignature(signature)) {
    return null;
  }

  const lookup_key = makeLookupKey(signature);
  const data: undefined | FixaData = FIXA_LOOKUP[lookup_key];
  if (Boolean(data)) {
    return data;
  }
  return null;
};

/**
 * Prefix local storage key with given string.
 * @param key_prefix
 * @returns
 */
const prefixStorageKey = (key_prefix: string): string => {
  return `${key_prefix}-${FIXA_LOCAL_STORAGE_KEY}`;
};

/**
 * Save a `FixaData` to local storage.
 * @param key_prefix
 * @param data
 */
export const saveFixaData = (
  key_prefix: string,
  data: null | FixaData,
): void => {
  const signature: null | FixaDataSignature = Boolean(data)
    ? reduceFixaData(data!)
    : null;

  const key = prefixStorageKey(key_prefix);
  const json_string = JSON.stringify(signature);
  localStorage.setItem(key, json_string);
};

/**
 * Load `FixaDataSignature` from local storage.
 * @param key_prefix
 * @returns
 */
const loadLocal = (key_prefix: string): null | FixaDataSignature => {
  const key = prefixStorageKey(key_prefix);
  const json_string: null | string = localStorage.getItem(key);
  if (!Boolean(json_string)) {
    return null;
  }

  const signature: FixaDataSignature = JSON.parse(json_string!);
  if (isFixaDataSignature(signature)) {
    return signature;
  }
  return null;
};

/**
 * Load and rebuild `FixaDataSignature`.
 * @param key_prefix
 * @returns
 */
export const loadFixaData = (key_prefix: string): null | FixaData => {
  const signature: null | FixaDataSignature = loadLocal(key_prefix);
  if (Boolean(signature)) {
    return rebuildFixaData(signature!);
  }
  return null;
};

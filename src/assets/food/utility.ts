import FOOD_DATA from "./data";
import { FOOD_ITEM_MAX, FOOD_ITEM_MIN } from "../../stores";
import { typeguardFoodItemSignature } from "./typeguard";
import {
  FoodData,
  FoodDataSignature,
  FoodItem,
  FoodItemSignature,
} from "./types";

const FOOD_ITEM_LOCAL_STORAGE_KEY = "food";
const FOOD_ORDER: string[] = FOOD_DATA.map((f) => f.name);

const FOOD_LOOKUP: { [key: string]: FoodData } = {};

/**
 * Take a food data signature and return a string
 * which can be used as a key for the lookup table.
 * @param signature
 * @returns
 */
const makeLookupKey = ({ name }: FoodDataSignature): string => {
  return name;
};

// populate lookup table
for (const data of FOOD_DATA) {
  const lookup_key = makeLookupKey(data);
  FOOD_LOOKUP[lookup_key] = data;
}

/**
 * Reduce `FoodItem` to its signature.
 * @param param
 * @returns
 */
export const foodItemToSignature = ({
  name,
  amount,
}: FoodItem): FoodItemSignature => {
  return { name, amount };
};

/**
 * Attempt to generate `FoodItem` from a signature.
 * @param signature
 * @returns
 */
export const foodItemFromSignature = (
  signature: FoodItemSignature,
): FoodItem | null => {
  if (!typeguardFoodItemSignature(signature)) {
    return null;
  }

  const lookup_key = makeLookupKey(signature);
  const data: undefined | FoodData = FOOD_LOOKUP[lookup_key];
  if (Boolean(data)) {
    return { ...data, amount: signature.amount };
  }
  return null;
};

export const saveFoodItemToLocal = (items: FoodItem[]) => {
  let signatures: FoodItemSignature[] = [];

  for (const item of items) {
    signatures.push(foodItemToSignature(item));
  }

  localStorage.setItem(
    FOOD_ITEM_LOCAL_STORAGE_KEY,
    JSON.stringify(signatures),
  );
};

/**
 * Load data from local storage.
 * As well as perform some safe-guarding.
 * @returns
 */
const loadLocal = (): FoodItemSignature[] => {
  const json_string: null | string = localStorage.getItem(
    FOOD_ITEM_LOCAL_STORAGE_KEY,
  );
  // if nothing is stored in local storage,
  // then just return an empty array.
  if (!Boolean(json_string)) {
    return [];
  }

  const item_signatures: FoodItemSignature[] = JSON.parse(
    json_string!,
  );
  // if something happens and cause the "array" of signatures
  // to no longer be an array, then return an empty array
  // as a failsafe.
  if (!Array.isArray(item_signatures)) {
    return [];
  }
  return item_signatures;
};

/**
 * Load signatures from local storage and populate it with data.
 * @returns
 */
export const loadFoodItemsFromLocal = (): FoodItem[] => {
  const signatures = loadLocal();

  let food_count = FOOD_ITEM_MIN;
  let food_items: FoodItem[] = [];

  // populate result array with non-zero food items.
  for (const signature of signatures) {
    if (food_count === FOOD_ITEM_MAX) {
      break;
    }

    const data: null | FoodItem = foodItemFromSignature(signature);
    if (Boolean(data)) {
      const { amount, ...item_data } = data!;
      const available = FOOD_ITEM_MAX - food_count;
      const used = amount <= available ? amount : available;

      food_count += used;

      food_items.push({
        ...item_data,
        amount: used,
      });
    }
  }

  // populate the rest of the array zero-amount food items.
  for (let i = 0; i < FOOD_ORDER.length; i++) {
    if (food_items[i].name !== FOOD_ORDER[i]) {
      const item: FoodItem = {
        ...FOOD_LOOKUP[FOOD_ORDER[i]],
        amount: 0,
      };
      food_items.splice(i, 0, item);
    }
  }

  return food_items;
};

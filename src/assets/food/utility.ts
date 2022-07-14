import FOOD from ".";
import { FOOD_ITEM_MAX, FOOD_ITEM_MIN } from "../../stores";
import { typeguardFoodItemSignature } from "./typeguard";
import { FoodItem, FoodItemData, FoodItemSignature } from "./types";

const FOOD_ITEM_LOCAL_STORAGE_KEY = "food";
const FOOD_ORDER: string[] = FOOD.map((f) => f.name);

const FOOD_LOOKUP: { [key: string]: FoodItemData } = {};

for (const data of FOOD) {
  FOOD_LOOKUP[data.name] = data;
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
  if (signature && !typeguardFoodItemSignature(signature)) {
    return null;
  }

  const data: undefined | FoodItemData = FOOD_LOOKUP[signature.name];
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

export const loadFoodItemsFromLocal = (): FoodItem[] => {
  const json_string = localStorage.getItem(
    FOOD_ITEM_LOCAL_STORAGE_KEY,
  );
  // if nothing is stored in local storage,
  // then just return an empty array.
  if (!Boolean(json_string)) {
    return [];
  }

  const signatures: FoodItemSignature[] = JSON.parse(json_string!);
  // if something happens and cause the "array" of signatures
  // to no longer be an array, then return an empty array
  // as a failsafe mechanism.
  if (!Array.isArray(signatures)) {
    return [];
  }

  let food_count = FOOD_ITEM_MIN;
  let food_items: FoodItem[] = [];

  // populate result array with non-zero food items.
  for (const signature of signatures) {
    if (food_count === FOOD_ITEM_MAX) {
      break;
    }

    const data = foodItemFromSignature(signature);
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

  // fill in the gap with the rest of the food items.
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

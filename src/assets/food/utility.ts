import FOOD from ".";
import { FOOD_ITEM_MAX, FOOD_ITEM_MIN } from "../../stores";
import { typeguardFoodItemSignature } from "./typeguard";
import { FoodItem, FoodItemSignature } from "./types";

export const foodItemToSignature = (
  item: FoodItem,
): FoodItemSignature => {
  return { name: item.name, amount: item.amount };
};

export const foodItemFromSignature = (
  signature: FoodItemSignature,
): FoodItem | null => {
  if (signature && !typeguardFoodItemSignature(signature)) {
    return null;
  }

  for (const data of FOOD) {
    if (data.name === signature.name) {
      return { ...data, amount: signature.amount };
    }
  }

  return null;
};

export const saveFoodItemToLocal = (items: FoodItem[]) => {
  let res: FoodItemSignature[] = [];
  for (const item of items) {
    res.push(foodItemToSignature(item));
  }
  localStorage.setItem("food", JSON.stringify(res));
};

export const loadFoodItemsFromLocal = (): FoodItem[] => {
  const as_string = localStorage.getItem("food");
  if (!as_string) {
    return [];
  }

  const stored: FoodItemSignature[] = JSON.parse(as_string);
  if (!Array.isArray(stored)) {
    return [];
  }

  let amount = FOOD_ITEM_MIN;
  let res: FoodItem[] = [];
  for (const signature of stored) {
    const data = foodItemFromSignature(signature);
    if (amount > FOOD_ITEM_MAX) {
      break;
    }
    if (data !== null) {
      amount += signature.amount;
      res.push(data);
    }
  }

  return res;
};

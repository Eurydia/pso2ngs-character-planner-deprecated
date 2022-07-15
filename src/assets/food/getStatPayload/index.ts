import {
  Conditional,
  makeStatPayload,
  Stat,
  StatPayload,
} from "../../stats";
import { FoodAttribute, FoodCategory, FoodItem } from "../types";
import { getStatPayloadFromAttribute } from "./attributes";
import { getStatPayloadFromCategory } from "./categories";

export * from "./categories";
export * from "./attributes";

const ATTRIBUTE_KEYS = Object.values(FoodAttribute);
const CATEGORY_KEYS = Object.values(FoodCategory);

/**
 * Create StatPayload object from array of food items.
 * @param items food items to use
 * @returns
 */
export const getStatPayload = (items: FoodItem[]): StatPayload => {
  let template: { [key in FoodAttribute | FoodCategory]: number } = {
    [FoodAttribute.CRISPY]: 0,
    [FoodAttribute.LIGHT]: 0,
    [FoodAttribute.RICH]: 0,
    [FoodAttribute.ROBUST]: 0,
    [FoodCategory.MEAT]: 0,
    [FoodCategory.VEGETABLE]: 0,
    [FoodCategory.FRUIT]: 0,
    [FoodCategory.SEAFOOD]: 0,
  };

  for (const item of items) {
    template[item.attribute] += item.amount;
    template[item.category] += item.amount;
  }

  let stats: Stat[] = [];
  let conditionals: Conditional[] = [];

  // create StatPayload objects from attributes
  for (const key of ATTRIBUTE_KEYS) {
    const { stats, conditionals } = getStatPayloadFromAttribute(
      key as FoodAttribute,
      template[key as FoodAttribute],
    );
    stats.push(...stats);
    conditionals.push(...conditionals);
  }

  // create StatPayload objects from categories
  for (const key of CATEGORY_KEYS) {
    const { stats, conditionals } = getStatPayloadFromCategory(
      key as FoodCategory,
      template[key as FoodCategory],
    );
    stats.push(...stats);
    conditionals.push(...conditionals);
  }

  return makeStatPayload(stats, conditionals);
};

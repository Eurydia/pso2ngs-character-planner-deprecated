import {
  Conditional,
  makeStatPayload,
  Stat,
  StatPayload,
} from "../../stats";
import { FoodAttribute, FoodCategory, FoodItem } from "../types";
import { getAttributeStatPayload } from "./getAttributeStatPayload";
import { getCategoryStatPayload } from "./getCategoryStatPayload";

export * from "./getCategoryStatPayload";
export * from "./getAttributeStatPayload";

export const getStatPayload = (items: FoodItem[]): StatPayload => {
  let attribute: { [key in FoodAttribute]: number } = {
    CRISPY: 0,
    LIGHT: 0,
    RICH: 0,
    ROBUST: 0,
  };
  let category: { [key in FoodCategory]: number } = {
    MEAT: 0,
    VEGETABLE: 0,
    FRUIT: 0,
    SEAFOOD: 0,
  };

  for (const item of items) {
    attribute[item.attribute] += item.amount;
    category[item.category] += item.amount;
  }

  let stats: Stat[] = [];
  let conditionals: Conditional[] = [];
  for (const key of Object.keys(attribute)) {
    const payload = getAttributeStatPayload(
      key as FoodAttribute,
      attribute[key as FoodAttribute],
    );
    stats.push(...payload.stats);
    conditionals.push(...payload.conditionals);
  }
  for (const key of Object.keys(category)) {
    const payload = getCategoryStatPayload(
      key as FoodCategory,
      category[key as FoodCategory],
    );
    stats.push(...payload.stats);
    conditionals.push(...payload.conditionals);
  }

  return makeStatPayload(stats, conditionals);
};

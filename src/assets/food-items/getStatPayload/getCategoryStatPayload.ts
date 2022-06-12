import { FoodCategory } from "../types";
import {
  StatTypes,
  makeStat,
  StatPayload,
  makeStatPayload,
  Stat,
  Conditional,
  StatShorthands,
} from "../../stats";

/**
 * Getter for stat amount.
 * Should be useful when we need the amount.
 * Like in tooltips.
 * @param category Category use as reference
 * @param level 1-10
 * @returns
 */
export const getCategoryStatAmount = (
  category: FoodCategory,
  level: number,
): number => {
  if (level < 1) {
    return category === FoodCategory.FRUIT ? 0 : 1;
  }
  const _level = level > 10 ? 9 : level - 1;

  let ref: null | number[] = null;
  switch (category) {
    case FoodCategory.VEGETABLE:
    case FoodCategory.SEAFOOD:
    case FoodCategory.MEAT:
      ref = [
        1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098,
        1.1,
      ];
      break;
    case FoodCategory.FRUIT:
      ref = [10, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      break;
  }

  if (ref === null) {
    return 0;
  }
  return ref[_level];
};

/**
 * Get `Stat` from category and number of items used.
 * @param category Category to use as reference
 * @param number_of_items_used Number of items with `category` used
 * @returns
 */
export const getCategoryStatPayload = (
  category: FoodCategory,
  number_of_items_used: number,
): StatPayload => {
  const amount = getCategoryStatAmount(
    category,
    number_of_items_used,
  );

  let stats: Stat[] = [];
  let conditionals: Conditional[] = [];
  switch (category) {
    case FoodCategory.MEAT:
      stats = [makeStat(StatShorthands.POT, amount)];
      break;
    case FoodCategory.VEGETABLE:
      stats = [makeStat(StatTypes.DMG_RESIST, amount)];
      break;
    case FoodCategory.SEAFOOD:
      stats = [makeStat(StatTypes.HP_BOOST, amount)];
      break;
    case FoodCategory.FRUIT:
      stats = [makeStat(StatTypes.PP, amount)];
      break;
  }

  return makeStatPayload(stats, conditionals);
};

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

const MEAT_EFFECT_REF = [
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
];
const SEAFOOD_EFFECT_REF = [
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
];
const VEGETABLE_EFFECT_REF = [
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
];
const FRUIT_EFFECT_REF = [10, 12, 13, 14, 15, 16, 17, 18, 19, 20];
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

  let ref: null | number[];
  switch (category) {
    case FoodCategory.VEGETABLE:
      ref = VEGETABLE_EFFECT_REF;
      break;
    case FoodCategory.SEAFOOD:
      ref = SEAFOOD_EFFECT_REF;
      break;
    case FoodCategory.MEAT:
      ref = MEAT_EFFECT_REF;
      break;
    case FoodCategory.FRUIT:
      ref = FRUIT_EFFECT_REF;
      break;
    default:
      ref = null;
      break;
  }

  if (ref === null) {
    return 1;
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
      stats = [makeStat(StatShorthands.HP_BOOST, amount)];
      break;
    case FoodCategory.FRUIT:
      stats = [makeStat(StatTypes.PP, amount)];
      break;
    default:
      return makeStatPayload([], []);
  }

  return makeStatPayload(stats, conditionals);
};

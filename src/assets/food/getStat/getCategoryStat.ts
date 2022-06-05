import { FoodCategory } from "../types";
import { Stat, StatTypes, makeStat } from "../../stats";

const MEAT_BUFF_REF = Object.freeze([
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
]);
const VEGETABLE_BUFF_REF = Object.freeze([
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
]);
const SEAFOOD_BUFF_REF = Object.freeze([
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
]);
const FRUIT_BUFF_REF = Object.freeze([
  10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);

/**
 * Getter for stat amount.
 * Should be useful when we need the amount.
 * Like in tooltips.
 * @param category Category use as reference
 * @param level 1-10
 * @returns
 */
export const getStatAmountFromCategory = (
  category: FoodCategory,
  level: number,
): number => {
  if (level < 1) {
    return category === FoodCategory.FRUIT ? 0 : 1;
  }
  const _level = level > 10 ? 9 : level - 1;
  let ref = MEAT_BUFF_REF;
  switch (category) {
    case FoodCategory.VEGETABLE:
      ref = VEGETABLE_BUFF_REF;
      break;
    case FoodCategory.SEAFOOD:
      ref = SEAFOOD_BUFF_REF;
      break;
    case FoodCategory.FRUIT:
      ref = FRUIT_BUFF_REF;
      break;
  }
  return ref[_level];
};

/**
 * Get `Stat` from category and number of items used.
 * @param category Category to use as reference
 * @param number_of_items_used Number of items with `category` used
 * @returns
 */
export const getStatFromCategory = (
  category: FoodCategory,
  number_of_items_used: number,
): Stat => {
  const amount = getStatAmountFromCategory(
    category,
    number_of_items_used,
  );

  let stat = StatTypes.POT;
  switch (category) {
    case FoodCategory.VEGETABLE:
      stat = StatTypes.DMG_RES;
      break;
    case FoodCategory.SEAFOOD:
      stat = StatTypes.HP_BOOST;
      break;
    case FoodCategory.FRUIT:
      stat = StatTypes.PP;
      break;
  }
  return makeStat(stat, amount);
};

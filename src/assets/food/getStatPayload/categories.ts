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

const MIN_CATEGORY_LEVEL = 1;
const MAX_CATEGORY_LEVEL = 10;

const MEAT_REF = [
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
];
const SEAFOOD_REF = [
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
];
const VEGETABLE_REF = [
  1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
];
const FRUIT_REF = [10, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/**
 * Takes a category and effect level,
 * and return the appropriate magnitude.
 * @param category attribute to use.
 * @param level number from 1 to 10.
 * @returns
 */
export const getCategoryStatAmount = (
  category: FoodCategory,
  level: number,
): number => {
  if (level < MIN_CATEGORY_LEVEL) {
    throw Error(
      `Food category level must be between 1 and 10 inclusive. ${level} is too low`,
    );
  } else if (level > MAX_CATEGORY_LEVEL) {
    throw Error(
      `Food category level must be between 1 and 10 inclusive. ${level} is too high`,
    );
  }

  let ref: null | number[];
  switch (category) {
    case FoodCategory.VEGETABLE:
      ref = VEGETABLE_REF;
      break;
    case FoodCategory.SEAFOOD:
      ref = SEAFOOD_REF;
      break;
    case FoodCategory.MEAT:
      ref = MEAT_REF;
      break;
    case FoodCategory.FRUIT:
      ref = FRUIT_REF;
      break;
  }

  const index = level - 1;
  return ref[index];
};

/**
 * Take an category and effect level,
 * and create an appropriate `StatPayload` ojbect.
 * @param category category to use as reference
 * @param level level of effect from 1 to 7.
 * @returns
 */
export const getStatPayloadFromCategory = (
  category: FoodCategory,
  level: number,
): StatPayload => {
  let stats: Stat[] = [];
  let conditionals: Conditional[] = [];

  const amount = getCategoryStatAmount(category, level);

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
  }

  return makeStatPayload(stats, conditionals);
};

import {
  Conditional,
  FoodAttribute,
  FoodCategory,
  Stat,
  StatTypes,
} from "../../types";
import { OFFENSIVE_POT } from "../../utility";
import {
  makeConditional,
  makeManyStatsWithSameAmount,
  makeStat,
} from "../makeStat";

const MAX_CATEGORY_LEVEL = 9;
// ref data
export const MEAT_VEGETABLE_SEAFOOD_REF = (level: number) => {
  const REF = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];
  if (level === 0) return 1;
  if (level > MAX_CATEGORY_LEVEL) return REF[MAX_CATEGORY_LEVEL];
  return REF[level - 1];
};
export const FRUIT_REF = (level: number) => {
  const REF = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  if (level === 0) return 0;
  if (level > MAX_CATEGORY_LEVEL) return REF[MAX_CATEGORY_LEVEL];
  return REF[level - 1];
};

export const getStatFromCategory = (
  category: FoodCategory,
  food_amount: number,
): Stat[] => {
  switch (category) {
    case FoodCategory.MEAT:
      return [
        ...makeManyStatsWithSameAmount(
          OFFENSIVE_POT,
          MEAT_VEGETABLE_SEAFOOD_REF(food_amount),
        ),
      ];

    case FoodCategory.VEGETABLE:
      return [
        makeStat(
          StatTypes.DMG_RES,
          MEAT_VEGETABLE_SEAFOOD_REF(food_amount),
        ),
      ];
    case FoodCategory.SEAFOOD:
      return [
        makeStat(
          StatTypes.HP_BOOST,
          MEAT_VEGETABLE_SEAFOOD_REF(food_amount),
        ),
      ];
    case FoodCategory.FRUIT:
      return [makeStat(StatTypes.PP, FRUIT_REF(food_amount))];
  }
};

// ref data
const MAX_ATTRIBUTE_LEVEL = 6;
export const CRISPY_REF = (level: number) => {
  const REF = [1.01, 1.02, 1.03, 1.035, 1.04, 1.045, 1.05];
  if (level < 4) return 1;
  if (level > MAX_ATTRIBUTE_LEVEL) return REF[MAX_ATTRIBUTE_LEVEL];
  return REF[level - 4];
};
export const LIGHT_REF = (level: number) => {
  const REF = [1.1, 1.12, 1.14, 1.16, 1.18, 1.19, 1.2];
  if (level < 4) return 1;
  if (level > MAX_ATTRIBUTE_LEVEL) return REF[MAX_ATTRIBUTE_LEVEL];
  return REF[level - 4];
};
export const ROBUST_REF = (level: number) => {
  const REF = [1.1, 1.2, 1.3, 1.35, 1.4, 1.45, 1.5];
  if (level < 4) return 1;
  if (level > MAX_ATTRIBUTE_LEVEL) return REF[MAX_ATTRIBUTE_LEVEL];
  return REF[level - 4];
};
export const RICH_REF = (level: number) => {
  const REF = [0.95, 0.945, 0.94, 0.935, 0.93, 0.925, 0.92];
  if (level < 4) return 1;
  if (level > MAX_ATTRIBUTE_LEVEL) return REF[MAX_ATTRIBUTE_LEVEL];
  return REF[level - 4];
};

export const getStatFromAttribute = (
  attribute: FoodAttribute,
  food_amount: number,
): Stat[] | Conditional[] => {
  switch (attribute) {
    case FoodAttribute.CRISPY:
      return [
        makeConditional(
          [makeStat(StatTypes.DMG_BOOST, CRISPY_REF(food_amount))],
          "When hitting weak point",
        ),
      ];

    case FoodAttribute.LIGHT:
      return [
        ...makeManyStatsWithSameAmount(
          [StatTypes.PASSIVE_PP_GAIN, StatTypes.ACTIVE_PP_GAIN],
          LIGHT_REF(food_amount),
        ),
      ];
    case FoodAttribute.ROBUST:
      return [
        makeStat(
          StatTypes.HP_RECOVERY_BOOST,
          ROBUST_REF(food_amount),
        ),
      ];
    case FoodAttribute.RICH:
      return [makeStat(StatTypes.PP_USAGE, RICH_REF(food_amount))];
  }
};

import { FoodAttribute } from "../types";
import {
  Stat,
  StatTypes,
  makeStat,
  Conditional,
  makeConditional,
  StatPayload,
  makeStatPayload,
  StatShorthands,
} from "../../stats";

const CRISPY_EFFECT_REF = [
  1.01, 1.02, 1.03, 1.035, 1.04, 1.045, 1.05,
];
const ROBUST_EFFECT_REF = [1.1, 1.2, 1.3, 1.35, 1.4, 1.45, 1.5];
const RICH_EFFECT_REF = [0.95, 0.945, 0.94, 0.935, 0.93, 0.925, 0.92];
const LIGHT_EFFECT_REF = [1.1, 1.12, 1.14, 1.16, 1.18, 1.19, 1.2];
/**
 * Getter for stat amount.
 * Should be useful when we need the amount.
 * Like in tooltips.
 * @param attribute Attribute to use as reference
 * @param level 1-7
 * @returns
 */
export const getAttributeStatAmount = (
  attribute: FoodAttribute,
  level: number,
): number => {
  if (level < 1) {
    return 1;
  }
  const _level = level > 7 ? 6 : level - 1;

  let ref: null | number[] = null;
  switch (attribute) {
    case FoodAttribute.CRISPY:
      ref = CRISPY_EFFECT_REF;
      break;
    case FoodAttribute.LIGHT:
      ref = LIGHT_EFFECT_REF;
      break;
    case FoodAttribute.ROBUST:
      ref = ROBUST_EFFECT_REF;
      break;
    case FoodAttribute.RICH:
      ref = RICH_EFFECT_REF;
      break;
  }

  if (ref === null) {
    return 1;
  }
  return ref[_level];
};
/**
 * @param attribute Attribute to use as reference
 * @param number_of_items_used Number of items with `attribute` used
 * @returns
 */
export const getAttributeStatPayload = (
  attribute: FoodAttribute,
  number_of_items_used: number,
): StatPayload => {
  const amount = getAttributeStatAmount(
    attribute,
    number_of_items_used - 3,
  );

  let stats: Stat[] = [];
  let conditionals: Conditional[] = [];
  switch (attribute) {
    case FoodAttribute.CRISPY:
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.DMG_BOOST, amount)],
          "is attacking weak point",
        ),
      ];
      break;
    case FoodAttribute.LIGHT:
      stats = [makeStat(StatShorthands.PP_RECOVERY, amount)];
      break;
    case FoodAttribute.ROBUST:
      stats = [makeStat(StatTypes.HP_RECOVERY_BOOST, amount)];
      break;
    case FoodAttribute.RICH:
      stats = [makeStat(StatTypes.PP_COST, amount)];
      break;
  }

  return makeStatPayload(stats, conditionals);
};

import { FoodAttribute } from "../types";
import {
  Stat,
  StatTypes,
  makeStat,
  Conditional,
  makeConditional,
} from "../../stats";

const CRISPY_BUFF_REF = Object.freeze([
  1.01, 1.02, 1.03, 1.035, 1.04, 1.045, 1.05,
]);
const LIGHT_BUFF_REF = Object.freeze([
  1.1, 1.12, 1.14, 1.16, 1.18, 1.19, 1.2,
]);
const ROBUST_BUFF_REF = Object.freeze([
  1.1, 1.2, 1.3, 1.35, 1.4, 1.45, 1.5,
]);
const RICH_BUFF_REF = Object.freeze([
  0.95, 0.945, 0.94, 0.935, 0.93, 0.925, 0.92,
]);

/**
 * Getter for stat amount.
 * Should be useful when we need the amount.
 * Like in tooltips.
 * @param attribute Attribute to use as reference
 * @param level 1-7
 * @returns
 */
export const getStatAmountFromAttribute = (
  attribute: FoodAttribute,
  level: number,
): number => {
  if (level < 1) {
    return 1;
  }
  const _level = level > 7 ? 6 : level - 1;
  let ref = CRISPY_BUFF_REF;
  switch (attribute) {
    case FoodAttribute.LIGHT:
      ref = LIGHT_BUFF_REF;
      break;
    case FoodAttribute.ROBUST:
      ref = ROBUST_BUFF_REF;
      break;
    case FoodAttribute.RICH:
      ref = RICH_BUFF_REF;
      break;
  }
  return ref[_level];
};
/**
 * @param attribute Attribute to use as reference
 * @param number_of_items_used Number of items with `attribute` used
 * @returns
 */
export const getStatFromAttribute = (
  attribute: FoodAttribute,
  number_of_items_used: number,
): Stat | Conditional => {
  const amount = getStatAmountFromAttribute(
    attribute,
    number_of_items_used - 3,
  );

  if (attribute === FoodAttribute.CRISPY) {
    return makeConditional(
      [makeStat(StatTypes.DMG_BOOST, amount)],
      "is attacking weak point.",
    );
  }

  let stat = StatTypes.PP_GAIN;
  switch (attribute) {
    case FoodAttribute.ROBUST:
      stat = StatTypes.HP_RECOVERY_BOOST;
      break;
    case FoodAttribute.RICH:
      stat = StatTypes.PP_USAGE;
      break;
  }
  return makeStat(stat, amount);
};

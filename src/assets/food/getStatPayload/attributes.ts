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

const MIN_ATTRIBUTE_LEVEL = 1;
const MAX_ATTRIBUTE_LEVEL = 7;

const CRISPY_REF = [1.01, 1.02, 1.03, 1.035, 1.04, 1.045, 1.05];
const ROBUST_REF = [1.1, 1.2, 1.3, 1.35, 1.4, 1.45, 1.5];
const RICH_REF = [0.95, 0.945, 0.94, 0.935, 0.93, 0.925, 0.92];
const LIGHT_REF = [1.1, 1.12, 1.14, 1.16, 1.18, 1.19, 1.2];

/**
 * Take an attribute and effect level,
 * and return the appropriate magnitude.
 * @param attribute attribute to use.
 * @param level number from 1 to 7.
 * @returns
 */
export const getAttributeStatAmount = (
  attribute: FoodAttribute,
  level: number,
): number => {
  if (level < MIN_ATTRIBUTE_LEVEL) {
    throw Error(
      `Food attribute level must be between 1 and 7 inclusive. ${level} is too low`,
    );
  } else if (level > MAX_ATTRIBUTE_LEVEL) {
    throw Error(
      `Food attribute level must be between 1 and 7 inclusive. ${level} is too high.`,
    );
  }

  let ref: null | number[];
  switch (attribute) {
    case FoodAttribute.CRISPY:
      ref = CRISPY_REF;
      break;
    case FoodAttribute.LIGHT:
      ref = LIGHT_REF;
      break;
    case FoodAttribute.ROBUST:
      ref = ROBUST_REF;
      break;
    case FoodAttribute.RICH:
      ref = RICH_REF;
      break;
    default:
      throw Error(
        "Unknown food attribute is used to index stat amount.",
      );
  }
  const index = level - 1;
  return ref[index];
};

/**
 * Take an attribute and effect level,
 * and create an appropriate `StatPayload` ojbect.
 * @param attribute attribute to use as reference.
 * @param level level of effect from 1 to 7.
 * @returns
 */
export const getStatPayloadFromAttribute = (
  attribute: FoodAttribute,
  level: number,
): StatPayload => {
  const amount = getAttributeStatAmount(attribute, level);

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

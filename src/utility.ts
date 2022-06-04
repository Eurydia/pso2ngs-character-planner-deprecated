import { Stat, StatTypes } from "./types";

export const STACK_BY_ADDING = [
  StatTypes.BP,
  StatTypes.HP,
  StatTypes.PP,
  StatTypes.ATK,
  StatTypes.DEF,
  StatTypes.CRIT_CHANCE,
];

export const DISPLAY_AS_ADD = [
  StatTypes.BP,
  StatTypes.HP,
  StatTypes.PP,
  StatTypes.ATK,
  StatTypes.DEF,
];

export const OFFENSIVE_POT = [
  StatTypes.MEL_POT,
  StatTypes.RNG_POT,
  StatTypes.TEC_POT,
];

export const AILMENT_RES = [
  StatTypes.BURN_RES,
  StatTypes.FREEZE_RES,
  StatTypes.SHOCK_RES,
  StatTypes.BLIND_RES,
  StatTypes.PANIC_RES,
  StatTypes.POISON_RES,
  StatTypes.PHYDOWN_RES,
];

const roman_keys: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
/**
 * Convert a number to roman string
 * @param num
 * @returns
 */
export const convertToRoman = (num: number): string => {
  if (num === 0) {
    return "";
  }
  let temp = num;
  let roman = "";
  for (const key of Object.keys(roman_keys)) {
    const q = Math.floor(temp / roman_keys[key]);
    temp -= q * roman_keys[key];
    roman += key.repeat(q);
  }
  return roman;
};

/**
 * Parse value according to the stacking type.
 * @param stat
 * @returns
 */
export const parseStatToDisplay = (stat: Stat): string => {
  let parsed_value: string;
  let default_value: number;
  if (DISPLAY_AS_ADD.includes(stat.stat_type)) {
    default_value = 0;
    parsed_value = stat.amount.toString();
  } else {
    default_value = 1;
    const temp = Math.round((stat.amount - 1) * 10000) / 100;
    parsed_value = `${temp.toPrecision(3)}%`;
    // parsed_value = temp.toString();
  }

  let sign = stat.amount < default_value ? "" : "+";
  return `${sign}${parsed_value}`;
};

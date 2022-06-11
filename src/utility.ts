import {
  Stat,
  StatTypes,
  expandPotShorthand,
  expandPPGainShorthand,
  expandAilmentResShorthand,
  getMulStatsDisplayAsAdd,
  getAdditiveStats,
  makeStat,
  StatShorthands,
} from "./assets/stats";

/**
 * Convert a number to roman string
 * @param num
 * @returns
 */
export const convertToRoman = (num: number): string => {
  if (num === 0) {
    return "";
  }

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

  let temp = num;
  let roman = "";
  for (const key of Object.keys(roman_keys)) {
    const q = Math.floor(temp / roman_keys[key]);
    temp -= q * roman_keys[key];
    roman += key.repeat(q);
  }
  return roman;
};

export const parseNumberToDisplay = (
  num: number,
  display_as_add: boolean,
): string => {
  let parsed_value: string;
  let default_value: number;
  if (display_as_add) {
    default_value = 0;
    parsed_value = num.toString();
  } else {
    default_value = 1;
    const temp = Math.round((num - 1) * 10000) / 100;
    parsed_value = `${temp.toPrecision(3)}%`;
  }

  const sign = num < default_value ? "" : "+";
  return `${sign}${parsed_value}`;
};

/**
 * Parse value according to the stacking type.
 * @param stat
 * @returns
 */
export const parseStatToDisplay = (stat: Stat): string => {
  const is_shorthand = Object.keys(StatShorthands).includes(
    stat.stat_type,
  );

  const display_as_add = getAdditiveStats().includes(stat.stat_type);
  return parseNumberToDisplay(stat.amount, display_as_add);
};

export const tallyStats = (stats: Stat[]): Stat[] => {
  // TODO: expand shorthands in here, instead
  let template: { [key in StatTypes]: number } = {
    "BP": 0,
    "HP": 0,
    "PP": 0,
    "ATK": 0,
    "DEF": 0,

    "HP boost": 1,
    "HP recovery boost": 1,
    "active PP recovery": 1,
    "natural PP recovery": 1,
    "PP cost": 1,
    "PB gauge charge rate": 1,

    "DMG": 1,
    "MEL pot": 1,
    "RNG pot": 1,
    "TEC pot": 1,
    "floor pot": 1,
    "crit chance": 1,
    "crit DMG": 1,

    "DMG resist": 1,
    "burn resist": 1,
    "freeze resist": 1,
    "shock resist": 1,
    "blind resist": 1,
    "panic resist": 1,
    "poison resist": 1,
    "physical down resist": 1,
    "ailment duration": 1,
  };
  for (const stat of stats) {
    const { stat_type, amount } = stat;

    if (getMulStatsDisplayAsAdd.includes(stat_type)) {
      template[stat_type]! += amount - 1;
    } else if (getAdditiveStats.includes(stat_type)) {
      template[stat_type]! += amount;
    } else {
      template[stat_type]! *= amount;
    }
  }

  let tallied: Stat[] = [];
  for (const key of Object.keys(template)) {
    const _key = key as StatTypes;
    const amount = template[_key]!;
    if (
      (DISPLAY_AS_ADD.includes(_key) && amount === 0) ||
      amount === 1
    ) {
      continue;
    }
    tallied.push(makeStat(_key, amount));
  }

  return tallied;
};

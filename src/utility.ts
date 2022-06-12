import {
  Stat,
  StatTypes,
  makeStat,
  StatShorthands,
  getStatTemplate,
  getAddStatTypes,
  getAddPercentageStatTypes,
  getExpandedShorthand,
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
  let stat_type = stat.stat_type;
  if (stat_type === StatShorthands.POT) {
    stat_type = StatTypes.MEL_POT;
  } else if (stat_type === StatShorthands.AILMENT_RES) {
    stat_type = StatTypes.BURN_RES;
  } else if (stat_type === StatShorthands.PP_GAIN) {
    stat_type = StatTypes.PASSIVE_PP_GAIN;
  }
  const display_stat_as_add = getAddStatTypes().includes(stat_type);
  console.log(display_stat_as_add, stat_type);

  return parseNumberToDisplay(stat.amount, display_stat_as_add);
};

export const tallyStats = (stats: Stat[]): Stat[] => {
  const add_stat_types = getAddStatTypes();
  const add_percentage_stat_types = getAddPercentageStatTypes();
  const shorthands = Object.keys(StatShorthands);

  let template: { [key in StatTypes]: number } = getStatTemplate();
  for (const stat of stats) {
    if (shorthands.includes(stat.stat_type)) {
      const expanded_stat_types = getExpandedShorthand(
        stat.stat_type as StatShorthands,
      );
      expanded_stat_types.forEach(
        (_s) => (template[_s] *= stat.amount),
      );
    } else {
      const _s = stat.stat_type as StatTypes;
      if (add_percentage_stat_types.includes(_s)) {
        template[_s] += stat.amount - 1;
      } else if (add_stat_types.includes(_s)) {
        template[_s] += stat.amount;
      } else {
        template[_s] *= stat.amount;
      }
    }
  }

  let tallied: Stat[] = [];
  for (const key of Object.keys(template)) {
    const _key = key as StatTypes;
    const amount = template[_key]!;
    if (
      (add_stat_types.includes(_key) && amount === 0) ||
      amount === 1
    ) {
      continue;
    }
    tallied.push(makeStat(_key, amount));
  }

  return tallied;
};

import {
  Conditional,
  STAT_SHORTHANDS,
  Stat,
  StatTypes,
  makeManyStatsWithSameAmount,
  OFFENSIVE_POT,
  PP_RECOVERY,
  AILMENT_RES,
} from "./assets/stats";

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
  const display_as_add = DISPLAY_AS_ADD.includes(stat.stat_type);
  return parseNumberToDisplay(stat.amount, display_as_add);
};

export const stackStats = (base: Stat[], extra: Stat[]): Stat[] => {
  let seen: StatTypes[] = base.map((stat) => stat.stat_type);
  let stats: Stat[] = base.map((stat) => ({ ...stat }));

  for (const stat of extra) {
    const target = seen.findIndex((s) => s === stat.stat_type);
    if (target !== -1) {
      if (STACK_BY_ADDING.includes(stat.stat_type)) {
        stats[target].amount += stat.amount;
        // Crit chance is displayed as percentage
        // This entures that value doesn't exceed 2
        if (stat.stat_type === StatTypes.CRIT_CHANCE) {
          stats[target].amount -= 1;
        } else {
          stats[target].amount *= stat.amount;
        }
      }
    } else {
      stats.push(stat);
      seen.push(stat.stat_type);
    }
  }
  return stats;
};

export const tallyStats = (stats: Stat[]): Stat[] => {
  let tallied: Stat[] = [];

  for (const stat of stats) {
    let to_stack = [stat];
    if (stat.stat_type === StatTypes.POT) {
      to_stack = makeManyStatsWithSameAmount(
        OFFENSIVE_POT,
        stat.amount,
      );
    } else if (stat.stat_type === StatTypes.PP_GAIN) {
      to_stack = makeManyStatsWithSameAmount(
        PP_RECOVERY,
        stat.amount,
      );
    } else if (stat.stat_type === StatTypes.AILMENT_RES) {
      to_stack = makeManyStatsWithSameAmount(
        AILMENT_RES,
        stat.amount,
      );
    }
    tallied = stackStats(tallied, to_stack);
    console.log(tallied);
  }
  return tallied;
};

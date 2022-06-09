import {
  StatTypes,
  Stat,
  Conditional,
  StatWithManyAmounts,
} from "./types";

export const makeStat = (
  stat_type: StatTypes,
  amount: number,
): Stat => {
  return {
    stat_type,
    amount,
  };
};

export const makeStatWithManyAmounts = (
  stat_type: StatTypes,
  many_amount: number[],
): StatWithManyAmounts => {
  return {
    stat_type,
    many_amount,
  };
};

export const makeConditional = (
  stats: Stat[],
  condition: string,
): Conditional => {
  return {
    stats,
    condition,
  };
};

export const makeManyStatsWithSameAmount = (
  stat_types: StatTypes[],
  amount: number,
): Stat[] => {
  let result: Stat[] = [];
  for (const stat_type of stat_types) {
    result.push(makeStat(stat_type, amount));
  }
  return result;
};

export const makeManyStatsWithSameManyAmounts = (
  stat_types: StatTypes[],
  many_amount: number[],
): StatWithManyAmounts[] => {
  let result: StatWithManyAmounts[] = [];
  for (const stat_type of stat_types) {
    result.push(makeStatWithManyAmounts(stat_type, many_amount));
  }
  return result;
};

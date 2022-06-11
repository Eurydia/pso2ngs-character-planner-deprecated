import {
  StatTypes,
  Stat,
  Conditional,
  StatPayload,
  StatShorthands,
} from "./types";

export const makeStat = (
  stat_type: StatTypes | StatShorthands,
  amount: number,
): Stat => {
  return Object.freeze({
    stat_type,
    amount,
  });
};

export const makeConditional = (
  stats: Stat[],
  condition: string,
): Conditional => {
  return Object.freeze({
    stats,
    condition,
  });
};

export const makeStatPayload = (
  stats: Stat[],
  conditionals: Conditional[] = [],
): StatPayload => {
  return Object.freeze({
    stats,
    conditionals,
  });
};

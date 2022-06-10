import {
  Conditional,
  ConditionalWithManyAmounts,
  makeConditional,
  makeStat,
  Stat,
  StatWithManyAmounts,
} from "../stats";
import { PotentialData } from "./types";

export const makePotential = (
  series_name: string,
  stats: StatWithManyAmounts[],
  conditionals: ConditionalWithManyAmounts[] = [],
): PotentialData => {
  let res: PotentialData = {
    series_name,
  };

  for (let i = 0; i < 4; i++) {
    res[i + 1] = {
      stats: stats.map(({ stat_type, many_amount }) =>
        makeStat(stat_type, many_amount[i]),
      ),
      conditionals: conditionals.map(
        ({ condition, stats_with_many_amounts }) =>
          makeConditional(
            stats_with_many_amounts.map(
              ({ stat_type, many_amount }) =>
                makeStat(stat_type, many_amount[i]),
            ),
            condition,
          ),
      ),
    };
  }

  return Object.freeze(res);
};

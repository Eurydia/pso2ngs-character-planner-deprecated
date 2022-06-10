import {
  StatTypes,
  Stat,
  StatWithManyAmounts,
  makeStat,
  Conditional,
  ConditionalWithManyAmounts,
  makeConditional,
  makeStatPayload,
} from "../stats";
import { AugmentData, AugmentGroups } from "./types";

// TODO: Clean up this file
export const makeAugmentData = (
  name: string,
  level: number,
  group: AugmentGroups,
  conflict: AugmentGroups[],
  stats: Stat[],
  conditionals: Conditional[] = [],
  isSType: boolean = false,
): AugmentData => {
  const payload = makeStatPayload(stats, conditionals);
  return {
    name,
    level,
    isSType,
    group,
    conflict,
    payload,
  };
};

const getStatsFromStatsWMAmounts = (
  stat_w_m_amounts_arr: StatWithManyAmounts[],
  index: number,
): Stat[] => {
  let stats: Stat[] = [];
  for (const stat_w_m_amounts of stat_w_m_amounts_arr) {
    const { stat_type, many_amount } = stat_w_m_amounts;
    stats.push(makeStat(stat_type, many_amount[index]));
  }
  return stats;
};

/**
 * Make multiple augments all at once,
 * keep in mind that this function
 * doesn't have a param for `isSType`.
 * @param name base name for augments to be built
 * @param level
 * @param group
 * @param conflict
 * @param stat_w_m_amounts_arr
 * @param conditional_w_m_amounts_arr
 * @returns
 */
export const makeManyAugments = (
  name: string,
  level: number,
  group: AugmentGroups,
  conflict: AugmentGroups[],
  stat_w_m_amounts_arr: StatWithManyAmounts[],
  conditional_w_m_amounts_arr: ConditionalWithManyAmounts[] = [],
): AugmentData[] => {
  let result: AugmentData[] = [];
  for (let i = 0; i < level; i++) {
    const stats = getStatsFromStatsWMAmounts(stat_w_m_amounts_arr, i);
    const conditionals = conditional_w_m_amounts_arr.map(
      (conditional) =>
        makeConditional(
          getStatsFromStatsWMAmounts(
            conditional.stats_with_many_amounts,
            i,
          ),
          conditional.condition,
        ),
    );
    result.push(
      makeAugmentData(
        name,
        i + 1,
        group,
        conflict,
        stats,
        conditionals,
      ),
    );
  }
  return result;
};

export const DOUBLE_STATS = [
  [StatTypes.MEL_POT, StatTypes.RNG_POT],
  [StatTypes.MEL_POT, StatTypes.TEC_POT],
  [StatTypes.RNG_POT, StatTypes.TEC_POT],
];

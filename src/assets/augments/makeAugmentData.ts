import { Stat, Conditional, makeStatPayload } from "../stats";
import { AugmentData, AugmentGroups } from "./types";

/**
 * Make an augment using provided infomation
 * @param name
 * @param level level of this augment. Use 0 if it doesn't have a level.
 * @param group the group that this augment belongs to.
 * @param conflict augment groups that can't be used with this augment.
 * @param stats stats of the augment.
 * @param conditionals
 * @param [isSType] is the augment an "s" variant. Default to `false`.
 * @returns an augment data
 */
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
  return Object.freeze({
    name,
    level,
    isSType,
    group,
    conflict,
    payload,
  });
};

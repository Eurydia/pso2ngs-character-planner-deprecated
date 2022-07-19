import { Stat, Conditional, makeStatPayload } from "../stats";
import { AugmentData, AugmentGroups } from "./types";

/**
 * Make an `AugmentData`.
 *
 * @function
 * @param {string} name Augment name.
 * @param {nubmer} level Augment level. 0 if it doesn't have a level.
 * @param {string | AugmentGroups} group Augment group.
 * @param {(string | AugmentGroups)[]} conflict Augment groups that conflict with this augment.
 * @param {Stat[]} stats Augment stats.
 * @param {Conditional[]} conditionals Augment conditional stats.
 * @param {boolean} isSType Is augment an S variant.
 * @returns {AugmentData} A An `AugmentData`.
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

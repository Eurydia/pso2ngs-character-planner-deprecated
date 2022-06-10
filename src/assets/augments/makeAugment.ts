import { Stat, Conditional, makeStatPayload } from "../stats";
import { AugmentData, AugmentGroups } from "./types";

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

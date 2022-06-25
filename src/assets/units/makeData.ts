import { Conditional, makeStatPayload, Stat } from "../stats";
import { UnitData, GrowthRate } from "./types";

export const makeGrowthRate = (
  enhancement: number,
  bonus: number,
): GrowthRate => {
  return {
    enhancement,
    bonus,
  };
};

export const makeUnitData = (
  name: string,
  rarity: number,
  level_required: number,
  base_defense: number,
  stats: Stat[],
  conditionals: Conditional[] = [],
): UnitData => {
  const payload = makeStatPayload(stats, conditionals);
  return Object.freeze({
    name,
    rarity,
    level_required,
    base_defense,
    payload,
  });
};

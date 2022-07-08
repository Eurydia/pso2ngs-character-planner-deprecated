import { Conditional, makeStatPayload, Stat } from "../stats";
import { UnitData } from "./types";

/**
 * make a unit
 * @param name
 * @param rarity
 * @param level_required
 * @param base_defense
 * @param stats
 * @param conditionals
 * @returns a unit data
 */
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

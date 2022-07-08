import {
  Conditional,
  makeStatPayload,
  Stat,
  StatPayload,
} from "../stats";
import { PotentialData, WeaponData } from "./types";

export const makePotentialData = (
  name: string,
  getPayload: (pot_level: number) => StatPayload,
): PotentialData => {
  return { name, getPayload };
};

/**
 * Make a weapon
 * @param name
 * @param rarity
 * @param level_required
 * @param potential
 * @param base_attack
 * @param stats
 * @param conditionals
 * @returns {WeaponData}
 */
export const makeWeaponData = (
  name: string,
  rarity: number,
  level_required: number,
  potential: PotentialData,
  base_attack: number,
  stats: Stat[],
  conditionals: Conditional[] = [],
): WeaponData => {
  const payload = makeStatPayload(stats, conditionals);
  return {
    name,
    rarity,
    level_required,
    potential,
    base_attack,
    payload,
  };
};

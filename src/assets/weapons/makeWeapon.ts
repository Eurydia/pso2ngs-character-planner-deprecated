import { Stat } from "../stats";
import { PotentialData } from "../potentials";
import { WeaponData } from "./types";

/**
 * Make a weapon
 * @param name
 * @param rarity
 * @param potential
 * @param level_required
 * @param base_attack
 * @param stats
 * @returns {WeaponData}
 */
export const makeWeapon = (
  name: string,
  rarity: number,
  potential: PotentialData,
  level_required: number,
  base_attack: number,
  stats: Stat[],
): WeaponData => {
  return Object.freeze({
    name,
    rarity,
    level_required,
    potential,
    base_attack,
    stats,
  });
};

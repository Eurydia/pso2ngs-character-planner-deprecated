import { Stat } from "../stats";
import { WeaponSeries } from "../weapon-potentials";
import { WeaponData } from "./types";

/**
 * Make a weapon
 * @param name
 * @param series
 * @param rarity
 * @param level_required
 * @param base_attack
 * @param stats
 * @returns
 */
export const makeWeapon = (
  name: string,
  series: WeaponSeries,
  rarity: number,
  level_required: number,
  base_attack: number,
  stats: Stat[],
): WeaponData => {
  return Object.freeze({
    name,
    rarity,
    level_required,
    series,
    base_attack,
    stats,
  });
};

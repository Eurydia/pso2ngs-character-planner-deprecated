import { Stat } from "../stats";
import { WeaponSeries, Weapon } from "./types";

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
): Weapon => {
  return Object.freeze({
    name,
    rarity,
    level_required,
    series,
    base_attack,
    stats,
  });
};

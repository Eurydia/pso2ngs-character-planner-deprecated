import {
  Stat,
  Rarity,
  Weapon,
  PotentialSeries,
  Elements,
} from "../../types";

export const makeWeapon = (
  name: string,
  level_required: number,
  element: Elements,
  stats_without_bp: Stat[],
  potential_series: PotentialSeries,
  rarity: Rarity,
): Weapon => {
  return {
    name,
    level_required,
    element,
    stats: stats_without_bp,
    potential_series,
    rarity,
  };
};

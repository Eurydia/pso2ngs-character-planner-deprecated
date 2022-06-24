import {
  Conditional,
  makeStat,
  makeStatPayload,
  Stat,
  StatPayload,
  StatTypes,
} from "../stats";
import { WeaponData } from "./types";

interface GrowthRate {
  enhancement: number;
  bonus: number;
}
const makeGrowthRate = (
  enhancement: number,
  bonus: number,
): GrowthRate => {
  return {
    enhancement,
    bonus,
  };
};

export const getWeaponATKAmount = (
  base_atk: number,
  rarity: number,
  enhancement: number,
): number => {
  // default growth rate is one star rarity
  let growth_rate: GrowthRate[] = [
    makeGrowthRate(10, 22),
    makeGrowthRate(20, 46),
    makeGrowthRate(30, 63),
    makeGrowthRate(40, 82),
    makeGrowthRate(50, 161),
  ];
  switch (rarity) {
    case 2:
      // growth rate for two star rarity
      growth_rate = [
        makeGrowthRate(10, 16),
        makeGrowthRate(20, 33),
        makeGrowthRate(30, 50),
        makeGrowthRate(40, 69),
        makeGrowthRate(50, 143),
      ];
      break;
    case 3:
      // growth rate for three star rarity
      growth_rate = [
        makeGrowthRate(10, 10),
        makeGrowthRate(20, 21),
        makeGrowthRate(30, 32),
        makeGrowthRate(40, 47),
        makeGrowthRate(50, 115),
      ];
      break;
    case 4:
      // growth rate for four star rarity
      growth_rate = [
        makeGrowthRate(10, 10),
        makeGrowthRate(20, 20),
        makeGrowthRate(30, 30),
        makeGrowthRate(40, 40),
        makeGrowthRate(50, 108),
      ];
      break;
    case 5:
      // growth rate for five star rarity
      growth_rate = [
        makeGrowthRate(10, 10),
        makeGrowthRate(20, 20),
        makeGrowthRate(30, 30),
        makeGrowthRate(40, 40),
        makeGrowthRate(50, 92),
      ];
      break;
  }

  let bonus = 0;
  for (let i = growth_rate.length - 1; i >= 0; i--) {
    const rate = growth_rate[i];

    if (enhancement >= rate.enhancement) {
      bonus += rate.bonus;

      if (i < growth_rate.length - 1) {
        const ceiling = growth_rate[i + 1];
        bonus +=
          ((enhancement - rate.enhancement) /
            (ceiling.enhancement - rate.enhancement)) *
          (ceiling.bonus - rate.bonus);
      }
      break;
    } else if (enhancement < rate.enhancement && i === 0) {
      bonus = (enhancement / rate.enhancement) * rate.bonus;
    }
  }
  return base_atk + Math.round(bonus);
};

export const getWeaponStatPayload = (
  weapon: WeaponData,
  enhancement: number,
  pot_level: number,
  avg_floor_pot: number,
): StatPayload => {
  const atk_amount = getWeaponATKAmount(
    weapon.base_attack,
    weapon.rarity,
    enhancement,
  );
  const crit_chance_amount = 1.05;
  const bp_from_pot_level = pot_level * 10;
  const bp_from_atk = atk_amount * avg_floor_pot;

  const atk = makeStat(StatTypes.ATK, atk_amount);
  const crit_chance = makeStat(
    StatTypes.CRIT_CHANCE,
    crit_chance_amount,
  );
  const bp = makeStat(
    StatTypes.BP,
    Math.floor(bp_from_pot_level + bp_from_atk),
  );
  const pot_payload = weapon.potential.getPayload(pot_level);
  const weapon_payload = weapon.payload;
  const stats: Stat[] = [
    bp,
    atk,
    ...weapon_payload.stats,
    ...pot_payload.stats,
    crit_chance,
  ];
  const conditionals: Conditional[] = [
    ...weapon_payload.conditionals,
    ...pot_payload.conditionals,
  ];

  return makeStatPayload(stats, conditionals);
};

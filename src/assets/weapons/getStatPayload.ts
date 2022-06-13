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
  return Object.freeze({
    enhancement,
    bonus,
  });
};

const ONE_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> = Object.freeze(
  [
    makeGrowthRate(10, 22),
    makeGrowthRate(20, 46),
    makeGrowthRate(30, 63),
    makeGrowthRate(40, 82),
    makeGrowthRate(50, 161),
  ],
);
const TWO_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> = Object.freeze(
  [
    makeGrowthRate(10, 16),
    makeGrowthRate(20, 33),
    makeGrowthRate(30, 50),
    makeGrowthRate(40, 69),
    makeGrowthRate(50, 143),
  ],
);
const THREE_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> =
  Object.freeze([
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 21),
    makeGrowthRate(30, 32),
    makeGrowthRate(40, 47),
    makeGrowthRate(50, 115),
  ]);
const FOUR_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> =
  Object.freeze([
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 20),
    makeGrowthRate(30, 30),
    makeGrowthRate(40, 40),
    makeGrowthRate(50, 108),
  ]);
const FIVE_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> =
  Object.freeze([
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 20),
    makeGrowthRate(30, 30),
    makeGrowthRate(40, 40),
    makeGrowthRate(50, 92),
  ]);

export const getWeaponAtk = (
  base_atk: number,
  rarity: number,
  enhancement: number,
): Stat => {
  let growth_rate = ONE_STAR_GROWTH_RATE;
  switch (rarity) {
    case 2:
      growth_rate = TWO_STAR_GROWTH_RATE;
      break;
    case 3:
      growth_rate = THREE_STAR_GROWTH_RATE;
      break;
    case 4:
      growth_rate = FOUR_STAR_GROWTH_RATE;
      break;
    case 5:
      growth_rate = FIVE_STAR_GROWTH_RATE;
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
  return makeStat(StatTypes.ATK, base_atk + Math.round(bonus));
};

export const getWeaponStatPayload = (
  weapon: WeaponData,
  enhancement: number,
  pot_level: number,
): StatPayload => {
  const bp_from_pot_level = makeStat(StatTypes.BP, pot_level * 10);
  const atk = getWeaponAtk(
    weapon.base_attack,
    weapon.rarity,
    enhancement,
  );

  const pot_payload = weapon.potential.getPayload(pot_level);
  const weapon_payload = weapon.payload;

  const stats: Stat[] = [
    bp_from_pot_level,
    atk,
    ...weapon_payload.stats,
    ...pot_payload.stats,
  ];

  const conditionals: Conditional[] = [
    ...weapon_payload.conditionals,
    ...pot_payload.conditionals,
  ];

  return makeStatPayload(stats, conditionals);
};

import {
  makeStat,
  makeStatPayload,
  Stat,
  StatPayload,
  StatTypes,
} from "../stats";
import { UnitData } from "./types";

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
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 20),
    makeGrowthRate(30, 30),
    makeGrowthRate(40, 40),
    makeGrowthRate(50, 50),
  ],
);
const TWO_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> = Object.freeze(
  [
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 20),
    makeGrowthRate(30, 30),
    makeGrowthRate(40, 40),
    makeGrowthRate(50, 50),
  ],
);
const THREE_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> =
  Object.freeze([
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 20),
    makeGrowthRate(30, 30),
    makeGrowthRate(40, 40),
    makeGrowthRate(50, 50),
  ]);
const FOUR_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> =
  Object.freeze([
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 20),
    makeGrowthRate(30, 30),
    makeGrowthRate(40, 41),
    makeGrowthRate(50, 51),
  ]);
const FIVE_STAR_GROWTH_RATE: ReadonlyArray<GrowthRate> =
  Object.freeze([
    makeGrowthRate(10, 10),
    makeGrowthRate(20, 20),
    makeGrowthRate(30, 30),
    makeGrowthRate(40, 41),
    makeGrowthRate(50, 51),
  ]);

export const getUnitDEFAmount = (
  base_def: number,
  rarity: number,
  enhancement: number,
): number => {
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
  return base_def + Math.round(bonus);
};

export const getUnitStatPayload = (
  unit: UnitData,
  enhancement: number,
): StatPayload => {
  const def_amount = getUnitDEFAmount(
    unit.base_defense,
    unit.rarity,
    enhancement,
  );

  let bp_amount = Math.floor(def_amount / 2);
  for (const stat of unit.payload.stats) {
    if (stat.stat_type === StatTypes.HP) {
      bp_amount += Math.round(stat.amount / 10);
    }
    if (stat.stat_type === StatTypes.PP) {
      bp_amount += stat.amount;
    }
  }
  const bp = makeStat(StatTypes.BP, bp_amount);
  const def = makeStat(StatTypes.DEF, def_amount);

  const stats = [bp, def, ...unit.payload.stats];
  // this is intentional
  const conditionals = [...unit.payload.conditionals];

  return makeStatPayload(stats, conditionals);
};

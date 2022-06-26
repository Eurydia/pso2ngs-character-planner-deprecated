import { POTENTIAL_MAX, POTENTIAL_MIN } from "../../../stores";
import {
  makeConditional,
  makeStat,
  makeStatPayload,
  StatPayload,
  StatTypes,
  StatShorthands,
} from "../../stats";
import { makePotentialData } from "../makeData";
import { PotentialSeries } from "../types";

// -----------------------
const payloadGetterWrapper = (
  pot_level: number,
  payloadGetter: (pot_level: number) => StatPayload,
): StatPayload => {
  if (pot_level <= POTENTIAL_MIN) {
    return makeStatPayload([], []);
  }
  const _level =
    pot_level > POTENTIAL_MAX ? POTENTIAL_MAX - 1 : pot_level - 1;

  return payloadGetter(_level);
};
// -----------------------

// -----------------------
export const RECYCLER_UNIT = makePotentialData(
  PotentialSeries.RECYCLER_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.18, 1.2, 1.23, 1.24];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const INDOMITABLE_UNIT = makePotentialData(
  PotentialSeries.INDOMITABLE_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.18, 1.2, 1.23, 1.24];
      const ailment_res = index < 3 ? 1.1 : 1.2;

      const stats = [
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatShorthands.AILMENT_RES, ailment_res),
      ];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const DEFENSIVE_FORMATION = makePotentialData(
  PotentialSeries.DEFENSEIVE_FORMATION,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.22];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const OFFENSIVE_FORMATION = makePotentialData(
  PotentialSeries.OFFENSIVE_FORMATION,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.22];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const VALOROUS_UNIT = makePotentialData(
  PotentialSeries.VALOROUS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.08, 1.1, 1.13, 1.14];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const DYNAMO_UNIT = makePotentialData(
  PotentialSeries.DYNAMO_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.16, 1.18, 1.21, 1.21];
      const crit_chance = index < 3 ? 1.15 : 1.18;

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      const conditionals = [
        makeConditional(
          [makeStat(StatTypes.CRIT_CHANCE, crit_chance)],
          "has successfully sidestepped",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

// -----------------------
export const MUSTERED_MIGHT_UNIT = makePotentialData(
  PotentialSeries.MUSTERED_MIGHT_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.17, 1.2, 1.21];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const BASTION_UNIT = makePotentialData(
  PotentialSeries.BASTION_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.18, 1.2, 1.23, 1.24];
      const dmg_res = index < 3 ? 1.4 : 1.5;

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      const conditionals = [
        makeConditional(
          [makeStat(StatTypes.DMG_RESIST, dmg_res)],
          "is at max HP",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

// -----------------------
export const MEDITATION_UNIT = makePotentialData(
  PotentialSeries.MEDITATION_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.18, 1.2, 1.23, 1.24];
      const pp_gain = index < 3 ? 1.1 : 1.15;

      const stats = [
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatShorthands.PP_RECOVERY, pp_gain),
      ];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const BERSERK_UNIT = makePotentialData(
  PotentialSeries.BERSERK_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.21, 1.23, 1.26, 1.27];
      const dmg_res = index < 3 ? 0.9 : 0.92;

      const stats = [
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.DMG_RESIST, dmg_res),
      ];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const SOULSPRING_UNIT = makePotentialData(
  PotentialSeries.SOULSPRING_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.2, 1.22, 1.25, 1.26];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      const conditionals = [
        makeConditional(
          [makeStat(StatTypes.PB_GAUGE_CHARGE_RATE, 1.2)],
          "is attacking",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

// -----------------------
export const FORTRESS_UNIT = makePotentialData(
  PotentialSeries.FORTRESS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.23];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      const conditionals = [
        makeConditional(
          [makeStat(StatTypes.DMG_RESIST, 1.5)],
          "has barrier active",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

// -----------------------
export const REINVIGORATING_UNIT = makePotentialData(
  PotentialSeries.REINVIGORATING_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.23];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const FOCUSED_UNIT = makePotentialData(
  PotentialSeries.FOCUSED_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.17, 1.2, 1.21];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const FIGHTING_SPIRIT_UNIT = makePotentialData(
  PotentialSeries.FIGHTING_SPIRIT_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.14, 1.16, 1.19, 1.2];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      const conditionals = [
        makeConditional(
          [makeStat(StatShorthands.POT, 1.04)],
          "is attacking boss enemy",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

// -----------------------
export const VIGOROUS_UNIT = makePotentialData(
  PotentialSeries.VIGOROUS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.21, 1.23, 1.26, 1.27];

      const stats = [
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.DMG_RESIST, 1.1),
        makeStat(StatTypes.HP_RECOVERY_BOOST, 1.2),
      ];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const EXPLOSIVE_UNIT = makePotentialData(
  PotentialSeries.EXPLOSIVE_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.17, 1.2, 1.21];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const HARMONIOUS_UNIT = makePotentialData(
  PotentialSeries.HARMONIOUS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.12, 1.14, 1.17, 1.18];

      const stats = [
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.CRIT_CHANCE, 1.15),
      ];
      const conditionals = [
        makeConditional(
          [makeStat(StatTypes.CRIT_CHANCE, 1.1)],
          "has 80% or more HP",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

// -----------------------
export const IMBUED_UNIT = makePotentialData(
  PotentialSeries.IMBUED_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.23, 1.26, 1.27];

      const stats = [
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.PP_COST, 0.9),
      ];
      const conditionals = [
        makeConditional(
          [makeStat(StatShorthands.PP_RECOVERY, 1.2)],
          "is attacking",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

// -----------------------
export const VIRTUOSO_UNIT = makePotentialData(
  PotentialSeries.VIRTUOSO_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.18, 1.22, 1.26];

      const stats = [makeStat(StatShorthands.POT, POTENCY[index])];
      return makeStatPayload(stats);
    }),
);

// -----------------------
export const UNASSAILABLE_UNIT = makePotentialData(
  PotentialSeries.UNASSAILABLE_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.18, 1.21, 1.22];

      const stats = [
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.DMG_RESIST, 1.05),
      ];
      const conditionals = [
        makeConditional(
          [
            makeStat(StatShorthands.POT, 1.05),
            makeStat(StatTypes.DMG_RESIST, 1.5),
          ],
          "is in Geometric Labyrinth",
        ),
      ];
      return makeStatPayload(stats, conditionals);
    }),
);

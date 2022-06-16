import { POTENTIAL_MAX, POTENTIAL_MIN } from "../../../stores";
import {
  makeConditional,
  makeStat,
  makeStatPayload,
  StatPayload,
  StatTypes,
  StatShorthands,
} from "../../stats";
import { makePotentialData } from "../makeWeaponData";
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
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const INDOMITABLE_UNIT = makePotentialData(
  PotentialSeries.INDOMITABLE_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.18, 1.2, 1.23, 1.24];
      const ailment_res = index < 3 ? 1.1 : 1.2;
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatShorthands.AILMENT_RES, ailment_res),
      ]);
    }),
);

// -----------------------
export const DEFENSIVE_FORMATION = makePotentialData(
  PotentialSeries.DEFENSEIVE_FORMATION,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.22];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const OFFENSIVE_FORMATION = makePotentialData(
  PotentialSeries.OFFENSIVE_FORMATION,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.22];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const VALOROUS_UNIT = makePotentialData(
  PotentialSeries.VALOROUS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.08, 1.1, 1.13, 1.14];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.DMG_BOOST, 1.1),
      ]);
    }),
);

// -----------------------
export const DYNAMO_UNIT = makePotentialData(
  PotentialSeries.DYNAMO_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.16, 1.18, 1.21, 1.21];
      const crit_change = index < 3 ? 1.15 : 1.8;
      return makeStatPayload(
        [makeStat(StatShorthands.POT, POTENCY[index])],
        [
          makeConditional(
            [makeStat(StatTypes.CRIT_CHANCE, crit_change)],
            "has successfully sidestepped",
          ),
        ],
      );
    }),
);

// -----------------------
export const MUSTERED_MIGHT_UNIT = makePotentialData(
  PotentialSeries.MUSTERED_MIGHT_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.17, 1.2, 1.21];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const BASTION_UNIT = makePotentialData(
  PotentialSeries.BASTION_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.18, 1.2, 1.23, 1.24];
      const dmg_res = index < 3 ? 1.4 : 1.5;
      return makeStatPayload(
        [makeStat(StatShorthands.POT, POTENCY[index])],
        [
          makeConditional(
            [makeStat(StatTypes.DMG_RESIST, dmg_res)],
            "is at max HP",
          ),
        ],
      );
    }),
);

// -----------------------
export const MEDITATION_UNIT = makePotentialData(
  PotentialSeries.MEDITATION_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.18, 1.2, 1.23, 1.24];
      const pp_gain = index < 3 ? 1.1 : 1.15;
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatShorthands.PP_RECOVERY, pp_gain),
      ]);
    }),
);

// -----------------------
export const BERSERK_UNIT = makePotentialData(
  PotentialSeries.BERSERK_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.21, 1.23, 1.26, 1.27];
      const dmg_res = index < 3 ? 0.9 : 0.92;
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.DMG_RESIST, dmg_res),
      ]);
    }),
);

// -----------------------
export const SOULSPRING_UNIT = makePotentialData(
  PotentialSeries.SOULSPRING_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.2, 1.22, 1.25, 1.26];
      return makeStatPayload(
        [makeStat(StatShorthands.POT, POTENCY[index])],
        [
          makeConditional(
            [makeStat(StatTypes.PB_GAUGE_CHARGE_RATE, 1.2)],
            "is attacking",
          ),
        ],
      );
    }),
);

// -----------------------
export const FORTRESS_UNIT = makePotentialData(
  PotentialSeries.FORTRESS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.23];
      return makeStatPayload(
        [makeStat(StatShorthands.POT, POTENCY[index])],
        [
          makeConditional(
            [makeStat(StatTypes.DMG_RESIST, 1.5)],
            "has barrier active",
          ),
        ],
      );
    }),
);

// -----------------------
export const REINVIGORATING_UNIT = makePotentialData(
  PotentialSeries.REINVIGORATING_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.19, 1.22, 1.23];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const FOCUSED_UNIT = makePotentialData(
  PotentialSeries.FOCUSED_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.17, 1.2, 1.21];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const FIGHTING_SPIRIT_UNIT = makePotentialData(
  PotentialSeries.FIGHTING_SPIRIT_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.14, 1.16, 1.19, 1.2];
      return makeStatPayload(
        [makeStat(StatShorthands.POT, POTENCY[index])],
        [
          makeConditional(
            [makeStat(StatShorthands.POT, 1.04)],
            "is attacking boss enemy",
          ),
        ],
      );
    }),
);

// -----------------------
export const VIGOROUS_UNIT = makePotentialData(
  PotentialSeries.VIGOROUS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.21, 1.23, 1.26, 1.27];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
        makeStat(StatTypes.DMG_RESIST, 1.1),
        makeStat(StatTypes.HP_RECOVERY_BOOST, 1.2),
      ]);
    }),
);

// -----------------------
export const EXPLOSIVE_UNIT = makePotentialData(
  PotentialSeries.EXPLOSIVE_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.17, 1.2, 1.21];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const HARMONIOUS_UNIT = makePotentialData(
  PotentialSeries.HARMONIOUS_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.12, 1.14, 1.17, 1.18];
      return makeStatPayload(
        [
          makeStat(StatShorthands.POT, POTENCY[index]),
          makeStat(StatTypes.CRIT_CHANCE, 1.15),
        ],
        [
          makeConditional(
            [makeStat(StatTypes.CRIT_CHANCE, 1.1)],
            "has 80% or more HP",
          ),
        ],
      );
    }),
);

// -----------------------
export const IMBUED_UNIT = makePotentialData(
  PotentialSeries.IMBUED_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.17, 1.23, 1.26, 1.27];
      return makeStatPayload(
        [
          makeStat(StatShorthands.POT, POTENCY[index]),
          makeStat(StatTypes.PP_COST, 0.9),
        ],
        [
          makeConditional(
            [makeStat(StatShorthands.PP_RECOVERY, 1.2)],
            "is attacking",
          ),
        ],
      );
    }),
);

// -----------------------
export const VIRTUOSO_UNIT = makePotentialData(
  PotentialSeries.VIRTUOSO_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.18, 1.22, 1.26];
      return makeStatPayload([
        makeStat(StatShorthands.POT, POTENCY[index]),
      ]);
    }),
);

// -----------------------
export const UNASSAILABLE_UNIT = makePotentialData(
  PotentialSeries.UNASSAILABLE_UNIT,
  (pot_level: number) =>
    payloadGetterWrapper(pot_level, (index: number) => {
      const POTENCY = [1.15, 1.18, 1.21, 1.22];
      return makeStatPayload(
        [
          makeStat(StatShorthands.POT, POTENCY[index]),
          makeStat(StatTypes.DMG_RESIST, 1.05),
        ],
        [
          makeConditional(
            [
              makeStat(StatShorthands.POT, 1.05),
              makeStat(StatTypes.DMG_RESIST, 1.5),
            ],
            "is in Geometric Labyrinth",
          ),
        ],
      );
    }),
);

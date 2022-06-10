import {
  Conditional,
  makeConditional,
  makeStat,
  makeStatWithManyAmounts,
  StatTypes,
  StatWithManyAmounts,
} from "../stats";
import { WeaponSeries, PotentialData } from "./types";

// primm, silver primm, gold primm, n-exp
const RECYCLER_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.18, 1.2, 1.23, 1.24]),
];
// tzvia
const INDOMITABLE_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.18, 1.18, 1.23, 1.24]),
  makeStatWithManyAmounts(
    StatTypes.AILMENT_RES,
    [1.1, 1.1, 1.1, 1.2],
  ),
];
// theseus
const DEFENSIVE_FORMATION_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.17, 1.19, 1.22, 1.22]),
];
// trois de
const OFFENSIVE_FORMATION_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.17, 1.19, 1.22, 1.22]),
];
// elemental
const VALOROUS_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.08, 1.1, 1.13, 1.14]),
];
// resurgia
const DYNAMO_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.16, 1.18, 1.21, 1.21]),
];
// cattleya
const MUSTERED_MIGHT_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.15, 1.17, 1.2, 1.21]),
];
// foursis
const BASTION_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.18, 1.2, 1.23, 1.24]),
];
// vialto
const MEDITATION_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.18, 1.2, 1.23, 1.24]),
  makeStatWithManyAmounts(StatTypes.PP_GAIN, [1.1, 1.1, 1.1, 1.15]),
];
// straga
const BERSERK_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.21, 1.23, 1.26, 1.27]),
  makeStatWithManyAmounts(StatTypes.DMG_RES, [0.9, 0.9, 0.9, 0.92]),
];
// evolcoat
const SOULSPRING_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.2, 1.22, 1.25, 1.26]),
];
// quintel
const FORTRESS_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.17, 1.19, 1.22, 1.23]),
];
// gothica
const REINVIGORATING_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.17, 1.19, 1.22, 1.23]),
];
// fivla
const FOCUSED_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.15, 1.17, 1.2, 1.21]),
];
// greaga
const FIGHTING_SPIRIT_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.14, 1.16, 1.19, 1.2]),
];
// relik tank
const VIGOROUS_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.21, 1.23, 1.26, 1.27]),
  makeStatWithManyAmounts(
    StatTypes.DMG_RES,
    [1.01, 1.01, 1.01, 1.01],
  ),
  makeStatWithManyAmounts(
    StatTypes.HP_RECOVERY_BOOST,
    [1.2, 1.2, 1.2, 1.2],
  ),
];
// relik melee dps
const EXPLOSIVE_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.15, 1.17, 1.2, 1.21]),
];
// relik ranged dps
const HARMONIOUS_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.12, 1.14, 1.27, 1.18]),
  makeStatWithManyAmounts(
    StatTypes.CRIT_CHANCE,
    [1.15, 1.15, 1.15, 1.15],
  ),
];
// relik tech
const IMBUED_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.17, 1.23, 1.26, 1.27]),
  makeStatWithManyAmounts(StatTypes.PP_USAGE, [0.9, 0.9, 0.9, 0.9]),
];
// cinquem
const VIRTUOSO_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.15, 1.18, 1.22, 1.26]),
];
// kuku
const UNASSAILABLE_UNIT_STATS = [
  makeStatWithManyAmounts(StatTypes.POT, [1.15, 1.18, 1.21, 1.2]),
  makeStatWithManyAmounts(
    StatTypes.DMG_RES,
    [1.05, 1.05, 1.05, 1.05],
  ),
];
export const getPotentialStats = (
  series: WeaponSeries,
  level: number,
): PotentialData => {
  if (level < 1) {
    return { stats: [], conditionals: [] };
  }
  const _level = level > 4 ? 3 : level - 1;

  let stats_data: StatWithManyAmounts[] = [];
  let conditionals: Conditional[] = [];

  switch (series) {
    case WeaponSeries.RECYCLER_UNIT:
      stats_data = RECYCLER_UNIT_STATS;
      break;
    case WeaponSeries.INDOMITABLE_UNIT:
      stats_data = INDOMITABLE_UNIT_STATS;
      break;
    case WeaponSeries.DEFENSEIVE_FORMATION:
      stats_data = DEFENSIVE_FORMATION_STATS;
      break;
    case WeaponSeries.OFFENSIVE_FORMATION:
      stats_data = OFFENSIVE_FORMATION_STATS;
      break;
    case WeaponSeries.VALOROUS_UNIT:
      stats_data = VALOROUS_UNIT_STATS;
      break;
    case WeaponSeries.DYNAMO_UNIT:
      stats_data = DYNAMO_UNIT_STATS;
      const crit_rate = level < 4 ? 1.15 : 1.18;
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.CRIT_CHANCE, crit_rate)],
          "has successfully sidestepped",
        ),
      ];
      break;
    case WeaponSeries.MUSTERED_MIGHT_UNIT:
      stats_data = MUSTERED_MIGHT_UNIT_STATS;
      break;
    case WeaponSeries.BASTION_UNIT:
      stats_data = BASTION_UNIT_STATS;
      const dmg_res = level < 4 ? 1.4 : 1.5;
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.DMG_RES, dmg_res)],
          "is at max HP",
        ),
      ];
      break;
    case WeaponSeries.MEDITATION_UNIT:
      stats_data = MEDITATION_UNIT_STATS;
      break;
    case WeaponSeries.BERSERK_UNIT:
      stats_data = BERSERK_UNIT_STATS;
      break;
    case WeaponSeries.SOULSPRING_UNIT:
      stats_data = SOULSPRING_UNIT_STATS;
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.PB_GAUGE_GAIN, 1.2)],
          "is attacking",
        ),
      ];
      break;
    case WeaponSeries.FORTRESS_UNIT:
      stats_data = FORTRESS_UNIT_STATS;
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.DMG_RES, 1.5)],
          "has barrier active",
        ),
      ];
      break;
    case WeaponSeries.REINVIGORATING_UNIT:
      stats_data = REINVIGORATING_UNIT_STATS;
      break;
    case WeaponSeries.FOCUSED_UNIT:
      stats_data = FOCUSED_UNIT_STATS;
      break;
    case WeaponSeries.FIGHTING_SPIRIT_UNIT:
      stats_data = FIGHTING_SPIRIT_UNIT_STATS;
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.POT, 1.04)],
          "is attacking boss enemy",
        ),
      ];
      break;
    case WeaponSeries.VIGOROUS_UNIT:
      stats_data = VIGOROUS_UNIT_STATS;
      break;
    case WeaponSeries.EXPLOSIVE_UNIT:
      stats_data = EXPLOSIVE_UNIT_STATS;
      break;
    case WeaponSeries.HARMONIOUS_UNIT:
      stats_data = HARMONIOUS_UNIT_STATS;
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.CRIT_CHANCE, 1.1)],
          "has 80% HP or more",
        ),
      ];
      break;
    case WeaponSeries.IMBUED_UNIT:
      stats_data = IMBUED_UNIT_STATS;
      conditionals = [
        makeConditional(
          [makeStat(StatTypes.PP_GAIN, 1.2)],
          "is attacking",
        ),
      ];
      break;
    case WeaponSeries.VIRTUOSO_UNIT:
      stats_data = VIRTUOSO_UNIT_STATS;
      break;
    case WeaponSeries.UNASSAILABLE_UNIT:
      stats_data = UNASSAILABLE_UNIT_STATS;
      conditionals = [
        makeConditional(
          [
            makeStat(StatTypes.POT, 1.05),
            makeStat(StatTypes.DMG_RES, 1.5),
          ],
          "is in Geometric Labyrinth",
        ),
      ];
      break;
  }
  const stats = stats_data.map(({ stat_type, many_amount }) =>
    makeStat(stat_type, many_amount[_level]),
  );
  return { stats, conditionals };
};

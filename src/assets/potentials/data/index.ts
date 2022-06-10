import { makeStatWithManyAmounts, StatTypes } from "../../stats";
import { makePotential } from "../makePotential";

// primm, silver primm, gold primm, n-exp
export const RECYCLER_UNIT = makePotential("recycler unit", [
  makeStatWithManyAmounts(StatTypes.POT, [1.18, 1.2, 1.23, 1.24]),
]);
// tzvia
export const INDOMITABLE_UNIT = makePotential("indomitable unit", [
  makeStatWithManyAmounts(StatTypes.POT, [1.18, 1.18, 1.23, 1.24]),
  makeStatWithManyAmounts(
    StatTypes.AILMENT_RES,
    [1.1, 1.1, 1.1, 1.2],
  ),
]);
// theseus
export const DEFENSIVE_FORMATION = makePotential(
  "defensive formation",
  [makeStatWithManyAmounts(StatTypes.POT, [1.17, 1.19, 1.22, 1.22])],
);
// trois de
export const OFFENSIVE_FORMATION = makePotential(
  "offensive formation",
  [makeStatWithManyAmounts(StatTypes.POT, [1.17, 1.19, 1.22, 1.22])],
);
// elemental
export const VALOROUS_UNIT = makePotential("valorous unit", [
  makeStatWithManyAmounts(StatTypes.POT, [1.08, 1.1, 1.13, 1.14]),
]);
// resurgia
export const DYNAMO_UNIT = makePotential(
  "dynamo unit",
  [makeStatWithManyAmounts(StatTypes.POT, [1.16, 1.18, 1.21, 1.21])],
  [],
);
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

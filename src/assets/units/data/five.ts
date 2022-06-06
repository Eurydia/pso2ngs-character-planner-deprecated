import {
  StatTypes,
  makeStat,
  makeManyStatsWithSameAmount,
  OFFENSIVE_POT,
} from "../../stats";
import { makeUnit, SUFFIXES } from "../makeUnit";
import { UnitData } from "../types";

// -------------------------
const RARITY = 5;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// vidal
units.push(
  makeUnit("vidal armor", RARITY, 24, 22, [
    makeStat(StatTypes.HP, 45),
    makeStat(StatTypes.DMG_RES, 1.01),
  ]),
);

// -------------------------
// vijf
units.push(
  makeUnit("vijf armor", RARITY, 24, 17, [
    makeStat(StatTypes.HP, 30),
    makeStat(StatTypes.PP, 4),
  ]),
);
// vijf arga, belta, sheza
SUFFIXES.forEach((suffix) =>
  units.push(
    makeUnit(`vijf armor ${suffix.name}`, RARITY, 31, 18, [
      makeStat(StatTypes.HP, 20),
      makeStat(StatTypes.PP, 7),
      ...makeManyStatsWithSameAmount(suffix.stat_types, 1.01),
    ]),
  ),
);

// -------------------------
// vios
units.push(
  makeUnit("vios armor", RARITY, 24, 15, [
    makeStat(StatTypes.PP, 8),
    makeStat(StatTypes.POT, 1.01),
  ]),
);

// -------------------------
// vindalun
units.push(
  makeUnit("vindalun armor", RARITY, 26, 20, [
    makeStat(StatTypes.HP, 70),
  ]),
);

// -------------------------
// viosel
units.push(
  makeUnit("viosel armor", RARITY, 26, 10, [
    makeStat(StatTypes.PP, 14),
    makeStat(StatTypes.AILMENT_RES, 1.2),
  ]),
);

// -------------------------
// gres
units.push(
  makeUnit("gres armor", RARITY, 31, 21, [
    makeStat(StatTypes.HP, -40),
    makeStat(StatTypes.PP, 13),
    makeStat(StatTypes.POT, 1.02),
    makeStat(StatTypes.AILMENT_RES, 0.5),
  ]),
);
// -------------------------
// schwarz
const schwar = ["schwarzest", "schwarzgarde", "schwarzrosso"];
schwar.forEach((name, i) =>
  units.push(
    makeUnit(`${name} armor`, RARITY, 31, 20, [
      makeStat(StatTypes.HP, 25),
      makeStat(StatTypes.PP, 3),
      makeStat(OFFENSIVE_POT[i], 1.02),
      makeStat(StatTypes.DMG_RES, 1.01),
    ]),
  ),
);

export default units;

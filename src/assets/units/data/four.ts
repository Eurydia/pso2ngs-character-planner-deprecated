import {
  StatTypes,
  makeStat,
  makeManyStatsWithSameAmount,
} from "../../stats";
import { makeUnit, SUFFIXES } from "../makeUnit";
import { UnitData } from "../types";

// -------------------------
const RARITY = 4;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// quad de
units.push(
  makeUnit("qual de armor", RARITY, 10, 8, [
    makeStat(StatTypes.PP, 6),
  ]),
);
// qual da arga, belta, sheza
SUFFIXES.forEach((suffix) =>
  units.push(
    makeUnit(`qual de armor ${suffix.name}`, RARITY, 12, 13, [
      makeStat(StatTypes.PP, 4),
      ...makeManyStatsWithSameAmount(suffix.stat_types, 1.01),
    ]),
  ),
);

// -------------------------
// cattleya
units.push(
  makeUnit("cattleya armor", RARITY, 10, 12, [
    makeStat(StatTypes.HP, 20),
    makeStat(StatTypes.PP, 2),
  ]),
);

// -------------------------
// vialto
units.push(
  makeUnit("vialto armor", RARITY, 10, 14, [
    makeStat(StatTypes.HP, 30),
    makeStat(StatTypes.DMG_RES, 1.01),
  ]),
);
// vialto arga, belta, sheza
SUFFIXES.forEach((suffix) =>
  units.push(
    makeUnit(`vialto armor ${suffix.name}`, RARITY, 12, 16, [
      makeStat(StatTypes.HP, 25),
      ...makeManyStatsWithSameAmount(suffix.stat_types, 1.005),
      makeStat(StatTypes.DMG_RES, 1.01),
    ]),
  ),
);

// -------------------------
// geant
units.push(
  makeUnit("geant armor", RARITY, 15, 15, [
    makeStat(StatTypes.HP, -20),
    makeStat(StatTypes.PP, 10),
    makeStat(StatTypes.POT, 1.02),
    makeStat(StatTypes.AILMENT_RES, 0.5),
  ]),
);

export default units;

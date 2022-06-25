import { StatTypes, makeStat, StatShorthands } from "../../stats";
import { makeUnitData } from "../makeData";
import { UnitData } from "../types";

// -------------------------
const RARITY = 4;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// quad de
units.push(
  makeUnitData("qual de armor", RARITY, 10, 8, [
    makeStat(StatTypes.PP, 6),
  ]),
);
// arga
units.push(
  makeUnitData("qual de armor arga", RARITY, 12, 13, [
    makeStat(StatTypes.PP, 4),
    makeStat(StatTypes.MEL_POT, 1.01),
    makeStat(StatTypes.RNG_POT, 1.01),
  ]),
);
// belta
units.push(
  makeUnitData("qual de armor belta", RARITY, 12, 13, [
    makeStat(StatTypes.PP, 4),
    makeStat(StatTypes.RNG_POT, 1.01),
    makeStat(StatTypes.TEC_POT, 1.01),
  ]),
);
// sheza
units.push(
  makeUnitData("qual de armor sheza", RARITY, 12, 13, [
    makeStat(StatTypes.PP, 4),
    makeStat(StatTypes.MEL_POT, 1.01),
    makeStat(StatTypes.TEC_POT, 1.01),
  ]),
);

// -------------------------
// cattleya
units.push(
  makeUnitData("cattleya armor", RARITY, 10, 12, [
    makeStat(StatTypes.HP, 20),
    makeStat(StatTypes.PP, 2),
  ]),
);

// -------------------------
// vialto
units.push(
  makeUnitData("vialto armor", RARITY, 10, 14, [
    makeStat(StatTypes.HP, 30),
    makeStat(StatTypes.DMG_RESIST, 1.01),
  ]),
);
// arga
units.push(
  makeUnitData("vialto armor arga", RARITY, 12, 16, [
    makeStat(StatTypes.HP, 25),
    makeStat(StatTypes.MEL_POT, 1.005),
    makeStat(StatTypes.RNG_POT, 1.005),
    makeStat(StatTypes.DMG_RESIST, 1.01),
  ]),
);
// belta
units.push(
  makeUnitData("vialto armor belta", RARITY, 12, 16, [
    makeStat(StatTypes.HP, 25),
    makeStat(StatTypes.RNG_POT, 1.005),
    makeStat(StatTypes.TEC_POT, 1.005),
    makeStat(StatTypes.DMG_RESIST, 1.01),
  ]),
);
// sheza
units.push(
  makeUnitData("vialto armor sheza", RARITY, 12, 16, [
    makeStat(StatTypes.HP, 25),
    makeStat(StatTypes.MEL_POT, 1.005),
    makeStat(StatTypes.TEC_POT, 1.005),
    makeStat(StatTypes.DMG_RESIST, 1.01),
  ]),
);

// -------------------------
// geant
units.push(
  makeUnitData("geant armor", RARITY, 15, 15, [
    makeStat(StatTypes.HP, -20),
    makeStat(StatTypes.PP, 10),
    makeStat(StatShorthands.POT, 1.02),
    makeStat(StatShorthands.AILMENT_RES, 0.5),
  ]),
);

export default units;

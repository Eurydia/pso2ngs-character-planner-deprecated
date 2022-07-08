import { StatTypes, makeStat, StatShorthands } from "../../stats";
import { makeUnitData } from "../makeData";
import { UnitData } from "../types";

// -------------------------
const RARITY = 6;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// defrozza
units.push(
  makeUnitData("defrozza armor", RARITY, 42, 22, [
    makeStat(StatTypes.PP, 50),
    makeStat(StatShorthands.POT, 1.01),
    makeStat(StatTypes.DMG_RESIST, 1.01),
    makeStat(StatTypes.FREEZE_RESIST, 1.2),
  ]),
);

// -------------------------
// defrozzi
units.push(
  makeUnitData("defrozzi armor", RARITY, 42, 20, [
    makeStat(StatTypes.PP, 9),
    makeStat(StatShorthands.POT, 1.02),
    makeStat(StatTypes.FREEZE_RESIST, 1.2),
  ]),
);

// -------------------------
// sestato
units.push(
  makeUnitData("sestato armor", RARITY, 42, 21, [
    makeStat(StatTypes.HP, 35),
    makeStat(StatTypes.PP, 5),
    makeStat(StatShorthands.POT, 1.015),
    makeStat(StatTypes.FREEZE_RESIST, 1.2),
  ]),
);
// arga
units.push(
  makeUnitData("sestato armor arga", RARITY, 47, 20, [
    makeStat(StatTypes.HP, 30),
    makeStat(StatTypes.PP, 4),
    makeStat(StatTypes.MEL_POT, 1.0225),
    makeStat(StatTypes.RNG_POT, 1.0225),
    makeStat(StatTypes.PHYDOWN_RESIST, 1.3),
  ]),
);
// belta
units.push(
  makeUnitData("sestato armor belta", RARITY, 47, 20, [
    makeStat(StatTypes.HP, 30),
    makeStat(StatTypes.PP, 4),
    makeStat(StatTypes.RNG_POT, 1.0225),
    makeStat(StatTypes.TEC_POT, 1.0225),
    makeStat(StatTypes.PHYDOWN_RESIST, 1.3),
  ]),
);
// sheza
units.push(
  makeUnitData("sestato armor sheza", RARITY, 47, 20, [
    makeStat(StatTypes.HP, 30),
    makeStat(StatTypes.PP, 4),
    makeStat(StatTypes.MEL_POT, 1.0225),
    makeStat(StatTypes.TEC_POT, 1.0225),
    makeStat(StatTypes.PHYDOWN_RESIST, 1.3),
  ]),
);

// -------------------------
// behlgren
units.push(
  makeUnitData("behlgren armor", RARITY, 52, 26, [
    makeStat(StatTypes.HP, -40),
    makeStat(StatTypes.PP, 13),
    makeStat(StatShorthands.POT, 1.0275),
    makeStat(StatShorthands.AILMENT_RES, 0.5),
  ]),
);

export default units;

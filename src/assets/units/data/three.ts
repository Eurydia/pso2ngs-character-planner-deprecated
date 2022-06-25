import { StatTypes, makeStat } from "../../stats";
import { makeUnitData } from "../makeData";
import { UnitData } from "../types";

// -------------------------
const RARITY = 3;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// theseus
units.push(
  makeUnitData("theseus armor", RARITY, 5, 10, [
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 1),
  ]),
);

// -------------------------
// gold primm
units.push(
  makeUnitData("gold primm armor", RARITY, 5, 10, [
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 1),
  ]),
);
export default units;

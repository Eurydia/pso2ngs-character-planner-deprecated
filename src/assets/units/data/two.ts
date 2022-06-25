import { StatTypes, makeStat } from "../../stats";
import { makeUnitData } from "../makeData";
import { UnitData } from "../types";

// -------------------------
const RARITY = 2;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// tzvia
units.push(
  makeUnitData("tzvia armor", RARITY, 1, 9, [
    makeStat(StatTypes.PP, 2),
  ]),
);

// -------------------------
// silver primm
units.push(
  makeUnitData("silver primm armor", RARITY, 1, 9, [
    makeStat(StatTypes.PP, 2),
  ]),
);

// -------------------------
// n-exp
units.push(
  makeUnitData("n-exp armor", RARITY, 1, 9, [
    makeStat(StatTypes.PP, 2),
  ]),
);
export default units;

import { StatTypes, makeStat } from "../../stats";
import { makeUnit } from "../makeUnit";
import { UnitData } from "../types";

// -------------------------
const RARITY = 2;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// tzvia
units.push(
  makeUnit("tzvia armor", RARITY, 1, 9, [makeStat(StatTypes.PP, 2)]),
);

// -------------------------
// silver primm
units.push(
  makeUnit("silver primm armor", RARITY, 1, 9, [
    makeStat(StatTypes.PP, 2),
  ]),
);

// -------------------------
// n-exp
units.push(
  makeUnit("n-exp armor", RARITY, 1, 9, [makeStat(StatTypes.PP, 2)]),
);
export default units;

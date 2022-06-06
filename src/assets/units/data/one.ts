import { StatTypes, makeStat } from "../../stats";
import { makeUnit } from "../makeUnit";
import { UnitData } from "../types";

// -------------------------
const RARITY = 1;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// primm
units.push(
  makeUnit("primm armor", RARITY, 1, 8, [makeStat(StatTypes.HP, 10)]),
);
export default units;

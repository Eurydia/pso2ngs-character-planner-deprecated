import { StatTypes, Unit, Rarity } from "../../../types";
import { makeStat } from "../../stats/makeStat";
import { makeUnit } from "../makeUnit";

const RARITY = Rarity.ONE;
let units: Unit[] = [];

units.push(
  makeUnit(
    "primm armor",
    1,
    [makeStat(StatTypes.DEF, 8), makeStat(StatTypes.HP, 10)],
    RARITY,
  ),
);
export default units;

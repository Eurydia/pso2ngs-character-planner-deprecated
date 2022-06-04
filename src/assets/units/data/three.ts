import { StatTypes, Unit, Rarity } from "../../../types";
import { makeStat } from "../../stats/makeStat";
import { makeUnit } from "../makeUnit";

const RARITY = Rarity.THREE;
let units: Unit[] = [];

units.push(
  makeUnit(
    "theseus armor",
    5,
    [
      makeStat(StatTypes.DEF, 10),
      makeStat(StatTypes.HP, 10),
      makeStat(StatTypes.PP, 1),
    ],
    RARITY,
  ),
);
units.push(
  makeUnit(
    "gold primm armor",
    5,
    [
      makeStat(StatTypes.DEF, 10),
      makeStat(StatTypes.HP, 10),
      makeStat(StatTypes.PP, 1),
    ],
    RARITY,
  ),
);
export default units;

import { StatTypes, Unit, Rarity } from "../../../types";
import { makeStat } from "../../stats/makeStat";
import { makeUnit } from "../makeUnit";

const RARITY = Rarity.TWO;
let units: Unit[] = [];

units.push(
  makeUnit(
    "tzvia armor",
    1,
    [makeStat(StatTypes.DEF, 9), makeStat(StatTypes.PP, 2)],
    RARITY,
  ),
);
units.push(
  makeUnit(
    "silver primm armor",
    1,
    [makeStat(StatTypes.DEF, 9), makeStat(StatTypes.PP, 2)],
    RARITY,
  ),
);
units.push(
  makeUnit(
    "n-exp armor",
    1,
    [makeStat(StatTypes.DEF, 9), makeStat(StatTypes.PP, 2)],
    RARITY,
  ),
);
export default units;

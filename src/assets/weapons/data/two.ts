import {
  StatTypes,
  Rarity,
  Weapon,
  PotentialSeries,
  Elements,
} from "../../../types";
import { makeStat } from "../../makeStat";
import { makeWeapon } from "../makeWeapon";

const RARITY = Rarity.TWO;
let weapons: Weapon[] = [];

weapons.push(
  makeWeapon(
    "tzvia weapons",
    4,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 195),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.INDOMITABLE_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "silver primm sword",
    5,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 195),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.RECYCLER_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "n-exp weapon",
    5,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 195),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.RECYCLER_UNIT,
    RARITY,
  ),
);
export default weapons;

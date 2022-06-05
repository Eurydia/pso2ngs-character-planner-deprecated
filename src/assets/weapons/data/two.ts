import { StatTypes, makeStat } from "../../stats";
import { makeWeapon } from "../makeWeapon";
import { Weapon, WeaponSeries } from "../types";

// -----------------------
const RARITY = 2;
let weapons: Weapon[] = [];
// -----------------------

weapons.push(
  makeWeapon(
    "tzvia weapons",
    WeaponSeries.INDOMITABLE_UNIT,
    RARITY,
    4,
    195,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "silver primm sword",
    WeaponSeries.RECYCLER_UNIT,
    RARITY,
    5,
    195,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "n-exp weapon",
    WeaponSeries.RECYCLER_UNIT,
    RARITY,
    5,
    195,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
export default weapons;

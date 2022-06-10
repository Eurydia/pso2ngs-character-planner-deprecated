import { StatTypes, makeStat } from "../../stats";
import { makeWeaponData } from "../makeWeaponData";
import { INDOMITABLE_UNIT, RECYCLER_UNIT } from "../potential-data";
import { WeaponData } from "../types";

// -----------------------
const RARITY = 2;
let weapons: WeaponData[] = [];
// -----------------------

// -----------------------
weapons.push(
  makeWeaponData("tzvia weapons", RARITY, 4, INDOMITABLE_UNIT, 195, [
    makeStat(StatTypes.FLOOR_POT, 1.7),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "silver primm sword",
    RARITY,
    5,
    RECYCLER_UNIT,
    195,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData("n-exp weapon", RARITY, 5, RECYCLER_UNIT, 195, [
    makeStat(StatTypes.FLOOR_POT, 1.7),
  ]),
);

export default weapons;

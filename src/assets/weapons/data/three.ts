import { StatTypes, makeStat } from "../../stats";
import { makeWeapon } from "../makeWeapon";
import { WeaponData } from "../types";
import { WeaponSeries } from "../../potentials";

// -----------------------
const RARITY = 3;
let weapons: WeaponData[] = [];
// -----------------------

weapons.push(
  makeWeapon(
    "theseus weapons",
    WeaponSeries.DEFENSEIVE_FORMATION,
    RARITY,
    8,
    223,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "trois de weapons",
    WeaponSeries.OFFENSIVE_FORMATION,
    RARITY,
    8,
    223,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "gold primm sword",
    WeaponSeries.RECYCLER_UNIT,
    RARITY,
    10,
    223,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "glissen weapons",
    WeaponSeries.VALOROUS_UNIT,
    RARITY,
    13,
    225,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "frostel weapons",
    WeaponSeries.VALOROUS_UNIT,
    RARITY,
    13,
    225,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
export default weapons;

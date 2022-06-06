import { StatTypes, makeStat } from "../../stats";
import { makeWeapon } from "../makeWeapon";
import { WeaponData, WeaponSeries } from "../types";

// -----------------------
const RARITY = 1;
let weapons: WeaponData[] = [];
// -----------------------

weapons.push(
  makeWeapon(
    "primm weapons",
    WeaponSeries.RECYCLER_UNIT,
    RARITY,
    1,
    177,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
export default weapons;

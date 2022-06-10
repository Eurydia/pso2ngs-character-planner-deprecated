import { StatTypes, makeStat } from "../../stats";
import { makeWeaponData } from "../makeWeaponData";
import { RECYCLER_UNIT } from "../potential-data";
import { WeaponData } from "../types";

// -----------------------
const RARITY = 1;
let weapons: WeaponData[] = [];
// -----------------------

// -----------------------
weapons.push(
  makeWeaponData("primm weapons", RARITY, 1, RECYCLER_UNIT, 177, [
    makeStat(StatTypes.FLOOR_POT, 1.7),
  ]),
);

export default weapons;

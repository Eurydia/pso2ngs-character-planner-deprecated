import { StatTypes, makeStat } from "../../stats";
import { makeWeaponData } from "../makeData";
import { INDOMITABLE_UNIT, RECYCLER_UNIT } from "../potential-data";
import { WeaponData } from "../types";

const RARITY = 2;

let data: WeaponData[] = [];

// -----------------------
data.push(
  makeWeaponData("tzvia weapons", RARITY, 4, INDOMITABLE_UNIT, 195, [
    makeStat(StatTypes.FLOOR_POT, 1.7),
  ]),
);

// -----------------------
data.push(
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
data.push(
  makeWeaponData("n-exp weapon", RARITY, 5, RECYCLER_UNIT, 195, [
    makeStat(StatTypes.FLOOR_POT, 1.7),
  ]),
);

export default data;

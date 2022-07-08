import { StatTypes, makeStat } from "../../stats";
import { makeWeaponData } from "../makeData";
import { CITADEL_UNIT, TEMPERED_FORM } from "../potential-data";
import { WeaponData } from "../types";

// -----------------------
const RARITY = 7;
let weapons: WeaponData[] = [];
// -----------------------

// -----------------------
weapons.push(
  makeWeaponData(
    "rugged weapons (citadel)",
    RARITY,
    57,
    CITADEL_UNIT,
    490,
    [makeStat(StatTypes.FLOOR_POT, 1.5)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "rugged weapons (pursuit)",
    RARITY,
    57,
    CITADEL_UNIT,
    490,
    [makeStat(StatTypes.FLOOR_POT, 1.5)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "rugged weapons (gyrating)",
    RARITY,
    57,
    CITADEL_UNIT,
    490,
    [makeStat(StatTypes.FLOOR_POT, 1.5)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData("kaizaar weapons", RARITY, 60, TEMPERED_FORM, 485, [
    makeStat(StatTypes.FLOOR_POT, 1.5),
  ]),
);

export default weapons;

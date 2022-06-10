import { StatTypes, makeStat, makeConditional } from "../../stats";
import { makeWeaponData } from "../makeWeaponData";
import {
  DEFENSIVE_FORMATION,
  OFFENSIVE_FORMATION,
  RECYCLER_UNIT,
  VALOROUS_UNIT,
} from "../potential-data";
import { WeaponData } from "../types";

// -----------------------
const RARITY = 3;
let weapons: WeaponData[] = [];
// -----------------------

// -----------------------
weapons.push(
  makeWeaponData(
    "theseus weapons",
    RARITY,
    8,
    DEFENSIVE_FORMATION,
    223,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "trois de weapons",
    RARITY,
    8,
    OFFENSIVE_FORMATION,
    223,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData("gold primm sword", RARITY, 10, RECYCLER_UNIT, 223, [
    makeStat(StatTypes.FLOOR_POT, 1.7),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "glissen weapons",
    RARITY,
    13,
    VALOROUS_UNIT,
    225,
    [
      makeStat(StatTypes.FLOOR_POT, 1.7),
      makeStat(StatTypes.DMG_BOOST, 1.1),
    ],
    [
      makeConditional(
        [makeStat(StatTypes.DMG_BOOST, 1.05)],
        "is attacking enemy weak to lightning",
      ),
    ],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "frostel weapons",
    RARITY,
    13,
    VALOROUS_UNIT,
    225,
    [
      makeStat(StatTypes.FLOOR_POT, 1.7),
      makeStat(StatTypes.DMG_BOOST, 1.1),
    ],
    [
      makeConditional(
        [makeStat(StatTypes.DMG_BOOST, 1.05)],
        "is attacking enemy weak to ice",
      ),
    ],
  ),
);

export default weapons;

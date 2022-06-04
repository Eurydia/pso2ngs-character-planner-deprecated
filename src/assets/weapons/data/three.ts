import {
  StatTypes,
  Rarity,
  Weapon,
  PotentialSeries,
  Elements,
} from "../../../types";
import { makeStat } from "../../stats/makeStat";
import { makeWeapon } from "../makeWeapon";

const RARITY = Rarity.THREE;
let weapons: Weapon[] = [];

weapons.push(
  makeWeapon(
    "theseus weapons",
    8,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 223),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.DEFENSEIVE_FORMATION,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "trois de weapons",
    8,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 223),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.OFFENSIVE_FORMATION,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "gold primm sword",
    10,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 223),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.RECYCLER_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "glissen weapons",
    13,
    Elements.LIGHTNING,
    [
      makeStat(StatTypes.ATK, 225),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.VALOROUS_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "frostel weapons",
    13,
    Elements.ICE,
    [
      makeStat(StatTypes.ATK, 225),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.VALOROUS_UNIT,
    RARITY,
  ),
);
export default weapons;

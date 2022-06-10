import { StatTypes, makeStat, makeConditional } from "../../stats";
import { makeWeaponData } from "../makeWeaponData";
import {
  BASTION_UNIT,
  BERSERK_UNIT,
  DYNAMO_UNIT,
  MEDITATION_UNIT,
  MUSTERED_MIGHT_UNIT,
  SOULSPRING_UNIT,
  VALOROUS_UNIT,
} from "../potential-data";
import { WeaponData } from "../types";

// -----------------------
const RARITY = 4;
let weapons: WeaponData[] = [];
// -----------------------

// -----------------------
weapons.push(
  makeWeaponData("resurgia weapons", RARITY, 11, DYNAMO_UNIT, 240, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "cattleya weapons",
    RARITY,
    14,
    MUSTERED_MIGHT_UNIT,
    242,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData("foursis weapons", RARITY, 14, BASTION_UNIT, 242, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData("vialto weapons", RARITY, 14, MEDITATION_UNIT, 242, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData("straga weapons", RARITY, 15, BERSERK_UNIT, 243, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "evolcoat weapons",
    RARITY,
    15,
    SOULSPRING_UNIT,
    242,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "flamel weapons",
    RARITY,
    14,
    VALOROUS_UNIT,
    240,
    [
      makeStat(StatTypes.FLOOR_POT, 1.7),
      makeStat(StatTypes.DMG_BOOST, 1.1),
    ],
    [
      makeConditional(
        [makeStat(StatTypes.DMG_BOOST, 1.05)],
        "is attacking enemy weak to fire",
      ),
    ],
  ),
);

export default weapons;

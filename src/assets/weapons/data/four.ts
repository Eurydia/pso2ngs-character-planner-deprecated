import { StatTypes, makeStat } from "../../stats";
import { makeWeapon } from "../makeWeapon";
import { Weapon, WeaponSeries } from "../types";

// -----------------------
const RARITY = 4;
let weapons: Weapon[] = [];
// -----------------------

weapons.push(
  makeWeapon(
    "resurgia weapons",
    WeaponSeries.DYNAMO_UNIT,
    RARITY,
    11,
    240,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "cattleya weapons",
    WeaponSeries.OFFENSIVE_FORMATION,
    RARITY,
    14,
    242,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "foursis weapons",
    WeaponSeries.BASTION_UNIT,
    RARITY,
    14,
    242,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "vialto weapons",
    WeaponSeries.MEDITATION_UNIT,
    RARITY,
    14,
    242,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "straga weapons",
    WeaponSeries.BERSERK_UNIT,
    RARITY,
    15,
    243,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "evolcoat weapons",
    WeaponSeries.SOULSPRING_UNIT,
    RARITY,
    15,
    242,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "flamel weapons",
    WeaponSeries.VALOROUS_UNIT,
    RARITY,
    14,
    240,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
export default weapons;

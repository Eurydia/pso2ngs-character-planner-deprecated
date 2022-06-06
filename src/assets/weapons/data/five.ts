import { StatTypes, makeStat } from "../../stats";
import { makeWeapon } from "../makeWeapon";
import { WeaponData, WeaponSeries } from "../types";

// -----------------------
const RARITY = 4;
let weapons: WeaponData[] = [];
// -----------------------

weapons.push(
  makeWeapon(
    "quintel weapons",
    WeaponSeries.FORTRESS_UNIT,
    RARITY,
    21,
    277,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "gothica weapons",
    WeaponSeries.REINVIGORATING_UNIT,
    RARITY,
    21,
    277,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "fivla weapons",
    WeaponSeries.FOCUSED_UNIT,
    RARITY,
    21,
    277,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "greaga weapons",
    WeaponSeries.FIGHTING_SPIRIT_UNIT,
    RARITY,
    27,
    280,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "kukuhroziat  weapons",
    WeaponSeries.UNASSAILABLE_UNIT,
    RARITY,
    27,
    280,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "relik weapons (vigorous)",
    WeaponSeries.VIGOROUS_UNIT,
    RARITY,
    31,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "relik weapons (explosive)",
    WeaponSeries.EXPLOSIVE_UNIT,
    RARITY,
    31,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "relik weapons (harmonious)",
    WeaponSeries.HARMONIOUS_UNIT,
    RARITY,
    31,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "relik weapons (imbued)",
    WeaponSeries.IMBUED_UNIT,
    RARITY,
    31,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "cinquem weapons",
    WeaponSeries.VIRTUOSO_UNIT,
    RARITY,
    36,
    293,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);
weapons.push(
  makeWeapon(
    "tempesta weapons",
    WeaponSeries.VALOROUS_UNIT,
    RARITY,
    15,
    263,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "lumiere weapons",
    WeaponSeries.VALOROUS_UNIT,
    RARITY,
    15,
    263,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
weapons.push(
  makeWeapon(
    "obscura weapons",
    WeaponSeries.VALOROUS_UNIT,
    RARITY,
    15,
    263,
    [makeStat(StatTypes.FLOOR_POT, 1.7)],
  ),
);
export default weapons;

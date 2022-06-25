import { StatTypes, makeStat, makeConditional } from "../../stats";
import { makeWeaponData } from "../makeData";
import {
  EXPLOSIVE_UNIT,
  FIGHTING_SPIRIT_UNIT,
  FOCUSED_UNIT,
  FORTRESS_UNIT,
  HARMONIOUS_UNIT,
  IMBUED_UNIT,
  REINVIGORATING_UNIT,
  UNASSAILABLE_UNIT,
  VALOROUS_UNIT,
  VIGOROUS_UNIT,
  VIRTUOSO_UNIT,
} from "../potential-data";
import { WeaponData } from "../types";

// -----------------------
const RARITY = 5;
let weapons: WeaponData[] = [];
// -----------------------

// -----------------------
weapons.push(
  makeWeaponData("quintel weapons", RARITY, 21, FORTRESS_UNIT, 277, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "gothica weapons",
    RARITY,
    21,
    REINVIGORATING_UNIT,
    277,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData("fivla weapons", RARITY, 21, FOCUSED_UNIT, 277, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "greaga weapons",
    RARITY,
    27,
    FIGHTING_SPIRIT_UNIT,
    280,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "kukuhroziat  weapons",
    RARITY,
    27,
    UNASSAILABLE_UNIT,
    280,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "relik weapons (vigorous)",
    RARITY,
    31,
    VIGOROUS_UNIT,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "relik weapons (explosive)",
    RARITY,
    31,
    EXPLOSIVE_UNIT,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "relik weapons (harmonious)",
    RARITY,
    31,
    HARMONIOUS_UNIT,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "relik weapons (imbued)",
    RARITY,
    31,
    IMBUED_UNIT,
    284,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData("cinquem weapons", RARITY, 36, VIRTUOSO_UNIT, 293, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "tempesta weapons",
    RARITY,
    15,
    VALOROUS_UNIT,
    263,
    [
      makeStat(StatTypes.FLOOR_POT, 1.7),
      makeStat(StatTypes.DMG_BOOST, 1.1),
    ],
    [
      makeConditional(
        [makeStat(StatTypes.DMG_BOOST, 1.05)],
        "is attacking enemy weak to wind",
      ),
    ],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "lumiere weapons",
    RARITY,
    15,
    VALOROUS_UNIT,
    263,
    [
      makeStat(StatTypes.FLOOR_POT, 1.7),
      makeStat(StatTypes.DMG_BOOST, 1.1),
    ],
    [
      makeConditional(
        [makeStat(StatTypes.DMG_BOOST, 1.05)],
        "is attacking enemy weak to light",
      ),
    ],
  ),
);

// -----------------------
weapons.push(
  makeWeaponData(
    "obscura weapons",
    RARITY,
    15,
    VALOROUS_UNIT,
    263,
    [
      makeStat(StatTypes.FLOOR_POT, 1.7),
      makeStat(StatTypes.DMG_BOOST, 1.1),
    ],
    [
      makeConditional(
        [makeStat(StatTypes.DMG_BOOST, 1.05)],
        "is attacking enemy weak to dark",
      ),
    ],
  ),
);

export default weapons;

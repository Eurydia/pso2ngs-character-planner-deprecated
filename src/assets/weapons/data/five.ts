import {
  StatTypes,
  Rarity,
  Weapon,
  PotentialSeries,
  Elements,
} from "../../../types";
import { makeStat } from "../../stats/makeStat";
import { makeWeapon } from "../makeWeapon";

const RARITY = Rarity.FIVE;
let weapons: Weapon[] = [];

weapons.push(
  makeWeapon(
    "quintel weapons",
    21,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 277),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.FORTRESS_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "gothica weapons",
    21,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 277),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.REINVIGORATING_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "fivla weapons",
    21,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 277),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.FOCUSED_UNIT,
    RARITY,
  ),
);

weapons.push(
  makeWeapon(
    "greaga weapons",
    27,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 280),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.FIGHTING_SPIRIT_UNIT,
    RARITY,
  ),
);

weapons.push(
  makeWeapon(
    "relik weapons (vigorous)",
    31,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 284),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.VIGOROUS_UNIT,
    RARITY,
  ),
);

weapons.push(
  makeWeapon(
    "relik weapons (explosive)",
    31,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 284),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.EXPLOSIVE_UNIT,
    RARITY,
  ),
);

weapons.push(
  makeWeapon(
    "relik weapons (harmonious)",
    31,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 284),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.HARMONIOUS_UNIT,
    RARITY,
  ),
);

weapons.push(
  makeWeapon(
    "relik weapons (imbued)",
    31,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 284),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.IMBUED_UNIT,
    RARITY,
  ),
);

weapons.push(
  makeWeapon(
    "cinquem weapons",
    36,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 293),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.VIRTUOSO_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "kukuhroziat  weapons",
    27,
    Elements.NONE,
    [
      makeStat(StatTypes.ATK, 280),
      makeStat(StatTypes.FLOOR_POT, 1.75),
    ],
    PotentialSeries.UNASSAILABLE_UNIT,
    RARITY,
  ),
);

weapons.push(
  makeWeapon(
    "tempesta weapons",
    15,
    Elements.WIND,
    [
      makeStat(StatTypes.ATK, 263),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.VALOROUS_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "lumiere weapons",
    15,
    Elements.LIGHT,
    [
      makeStat(StatTypes.ATK, 263),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.VALOROUS_UNIT,
    RARITY,
  ),
);
weapons.push(
  makeWeapon(
    "obscura weapons",
    15,
    Elements.DARK,
    [
      makeStat(StatTypes.ATK, 263),
      makeStat(StatTypes.FLOOR_POT, 1.7),
    ],
    PotentialSeries.VALOROUS_UNIT,
    RARITY,
  ),
);
export default weapons;

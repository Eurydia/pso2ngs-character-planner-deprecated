import { StatTypes, Unit, Rarity } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
  makeManyStatsWithSameAmount,
  makeStat,
} from "../../stats/makeStat";
import { makeUnit, SUFFIXES } from "../makeUnit";

const RARITY = Rarity.FIVE;
let units: Unit[] = [];

units.push(
  makeUnit(
    "vidal armor",
    24,
    [
      makeStat(StatTypes.DEF, 22),
      makeStat(StatTypes.HP, 45),
      makeStat(StatTypes.DMG_RES, 1.01),
    ],
    RARITY,
  ),
);

units.push(
  makeUnit(
    "vijf armor",
    24,
    [
      makeStat(StatTypes.DEF, 17),
      makeStat(StatTypes.HP, 30),
      makeStat(StatTypes.PP, 4),
    ],
    RARITY,
  ),
);

SUFFIXES.forEach((data) => {
  units.push(
    makeUnit(
      `vijf armor ${data.name}`,
      31,
      [
        makeStat(StatTypes.DEF, 18),
        makeStat(StatTypes.HP, 20),
        makeStat(StatTypes.PP, 7),
        ...makeManyStatsWithSameAmount(data.stats, 1.01),
      ],
      RARITY,
    ),
  );
});

units.push(
  makeUnit(
    "vios armor",
    24,
    [
      makeStat(StatTypes.DEF, 15),
      makeStat(StatTypes.PP, 8),
      ...makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.01),
    ],
    RARITY,
  ),
);

units.push(
  makeUnit(
    "vindalun armor",
    26,
    [makeStat(StatTypes.DEF, 20), makeStat(StatTypes.HP, 70)],
    RARITY,
  ),
);

units.push(
  makeUnit(
    "viosel armor",
    26,
    [
      makeStat(StatTypes.DEF, 10),
      makeStat(StatTypes.PP, 14),
      makeStat(StatTypes.AILMENT_RES, 1.2),
    ],
    RARITY,
  ),
);

units.push(
  makeUnit(
    "gres armor",
    31,
    [
      makeStat(StatTypes.DEF, 21),
      makeStat(StatTypes.HP, -40),
      makeStat(StatTypes.PP, 13),
      makeStat(StatTypes.POT, 1.02),
      makeStat(StatTypes.AILMENT_RES, 0.5),
    ],
    RARITY,
  ),
);

const schwar = ["schwarzest", "schwarzgarde", "schwarzrosso"];
schwar.forEach((name, i) => {
  const stat = OFFENSIVE_POT[i];
  units.push(
    makeUnit(
      `${name} armor`,
      31,
      [
        makeStat(StatTypes.DEF, 20),
        makeStat(StatTypes.HP, 25),
        makeStat(StatTypes.PP, 3),
        makeStat(stat, 1.02),
        makeStat(StatTypes.DMG_RES, 1.01),
      ],
      RARITY,
    ),
  );
});

export default units;

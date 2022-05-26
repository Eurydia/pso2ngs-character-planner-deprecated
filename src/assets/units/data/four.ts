import { Rarity, StatTypes, Unit } from "../../../types";
import { AILMENT_RES, OFFENSIVE_POT } from "../../../utility";
import {
    makeManyStatsWithSameAmount,
    makeStat,
} from "../../makeStat";
import { makeUnit, SUFFIXES } from "../makeUnit";

const RARITY = Rarity.FOUR;
let units: Unit[] = [];

units.push(
    makeUnit(
        "qual de armor",
        10,
        [makeStat(StatTypes.DEF, 8), makeStat(StatTypes.PP, 6)],
        RARITY,
    ),
);

SUFFIXES.forEach((data) => {
    units.push(
        makeUnit(
            `qual de armor ${data.name}`,
            12,
            [
                makeStat(StatTypes.DEF, 13),
                makeStat(StatTypes.PP, 4),
                ...makeManyStatsWithSameAmount(data.stats, 1.01),
            ],
            RARITY,
        ),
    );
});

units.push(
    makeUnit(
        "cattleya armor",
        10,
        [
            makeStat(StatTypes.DEF, 12),
            makeStat(StatTypes.HP, 20),
            makeStat(StatTypes.PP, 2),
        ],
        RARITY,
    ),
);

units.push(
    makeUnit(
        "vialto armor",
        10,
        [
            makeStat(StatTypes.DEF, 14),
            makeStat(StatTypes.HP, 30),
            makeStat(StatTypes.DMG_RES, 1.01),
        ],
        RARITY,
    ),
);

SUFFIXES.forEach((data) => {
    units.push(
        makeUnit(
            `vialto armor ${data.name}`,
            12,
            [
                makeStat(StatTypes.DEF, 16),
                makeStat(StatTypes.HP, 25),
                ...makeManyStatsWithSameAmount(data.stats, 1.005),
                makeStat(StatTypes.DMG_RES, 1.01),
            ],
            RARITY,
        ),
    );
});

units.push(
    makeUnit(
        "geant armor",
        15,
        [
            makeStat(StatTypes.DEF, 15),
            makeStat(StatTypes.HP, -20),
            makeStat(StatTypes.PP, 10),
            ...makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.02),
            ...makeManyStatsWithSameAmount(AILMENT_RES, 0.5),
        ],
        RARITY,
    ),
);
export default units;

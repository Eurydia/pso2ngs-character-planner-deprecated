import {
    StatTypes,
    Rarity,
    Weapon,
    PotentialSeries,
    Elements,
} from "../../../types";
import { makeStat } from "../../makeStat";
import { makeWeapon } from "../makeWeapon";

const RARITY = Rarity.FOUR;
let weapons: Weapon[] = [];

weapons.push(
    makeWeapon(
        "resurgia weapons",
        11,
        Elements.NONE,
        [
            makeStat(StatTypes.ATK, 240),
            makeStat(StatTypes.FLOOR_POT, 1.75),
        ],
        PotentialSeries.DYNAMO_UNIT,
        RARITY,
    ),
);
weapons.push(
    makeWeapon(
        "cattleya weapons",
        14,
        Elements.NONE,
        [
            makeStat(StatTypes.ATK, 242),
            makeStat(StatTypes.FLOOR_POT, 1.75),
        ],
        PotentialSeries.OFFENSIVE_FORMATION,
        RARITY,
    ),
);
weapons.push(
    makeWeapon(
        "foursis weapons",
        14,
        Elements.NONE,
        [
            makeStat(StatTypes.ATK, 242),
            makeStat(StatTypes.FLOOR_POT, 1.75),
        ],
        PotentialSeries.BASTION_UNIT,
        RARITY,
    ),
);

weapons.push(
    makeWeapon(
        "vialto weapons",
        14,
        Elements.NONE,
        [
            makeStat(StatTypes.ATK, 242),
            makeStat(StatTypes.FLOOR_POT, 1.75),
        ],
        PotentialSeries.MEDITATION_UNIT,
        RARITY,
    ),
);

weapons.push(
    makeWeapon(
        "straga weapons",
        15,
        Elements.NONE,
        [
            makeStat(StatTypes.ATK, 243),
            makeStat(StatTypes.FLOOR_POT, 1.75),
        ],
        PotentialSeries.BERSERK_UNIT,
        RARITY,
    ),
);

weapons.push(
    makeWeapon(
        "evolcoat weapons",
        15,
        Elements.NONE,
        [
            makeStat(StatTypes.ATK, 242),
            makeStat(StatTypes.FLOOR_POT, 1.75),
        ],
        PotentialSeries.SOULSPRING_UNIT,
        RARITY,
    ),
);

weapons.push(
    makeWeapon(
        "flamel weapons",
        14,
        Elements.FIRE,
        [
            makeStat(StatTypes.ATK, 240),
            makeStat(StatTypes.FLOOR_POT, 1.7),
        ],
        PotentialSeries.VALOROUS_UNIT,
        RARITY,
    ),
);
export default weapons;

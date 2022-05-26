import {
    StatTypes,
    Rarity,
    Weapon,
    PotentialSeries,
    Elements,
} from "../../../types";
import { makeStat } from "../../makeStat";
import { makeWeapon } from "../makeWeapon";

const RARITY = Rarity.ONE;
let weapons: Weapon[] = [];

weapons.push(
    makeWeapon(
        "primm weapons",
        1,
        Elements.NONE,
        [
            makeStat(StatTypes.ATK, 177),
            makeStat(StatTypes.FLOOR_POT, 1.7),
        ],
        PotentialSeries.RECYCLER_UNIT,
        RARITY,
    ),
);
export default weapons;

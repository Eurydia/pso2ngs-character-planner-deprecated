import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
    makeStat,
    makeManyStatsWithSameAmount,
} from "../../makeStat";
import { makeAugment } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.FUSIA;
const CONFLICT = [AugmentGroups.FUSIA];
let augments: Augment[] = [];
// --------------------------------------

augments.push(
    makeAugment(
        "megas fusia",
        0,
        [
            makeStat(StatTypes.BP, 4),
            ...makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.01),
        ],
        GROUP,
        CONFLICT,
    ),
);

export default augments;

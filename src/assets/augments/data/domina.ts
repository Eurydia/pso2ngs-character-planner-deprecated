import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
    makeStat,
    makeManyStatsWithSameAmount,
} from "../../makeStat";
import { makeAugment } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.DOMINA;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DOMINA];
let augments: Augment[] = [];
// --------------------------------------
// ael
augments.push(
    makeAugment(
        "ael domina",
        0,
        [
            makeStat(StatTypes.BP, 8),
            makeStat(StatTypes.HP, 5),
            makeStat(StatTypes.PP, 3),
            ...makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.015),
        ],
        GROUP,
        CONFLICT,
    ),
);
// ret
augments.push(
    makeAugment(
        "ret domina",
        0,
        [
            makeStat(StatTypes.BP, 8),
            makeStat(StatTypes.HP, 15),
            ...makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.015),
        ],
        GROUP,
        CONFLICT,
    ),
);
export default augments;

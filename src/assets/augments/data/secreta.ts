import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
    makeStatWithManyAmounts,
    makeManyStatsWithSameManyAmounts,
} from "../../makeStat";
import { makeManyAugments } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.SECRETA;
const CONFLICT = [AugmentGroups.SECRETA];
let augments: Augment[] = [];
// --------------------------------------

augments.push(
    ...makeManyAugments(
        "alts secreata",
        3,
        [
            makeStatWithManyAmounts(StatTypes.BP, [3, 4, 5]),
            makeStatWithManyAmounts(StatTypes.HP, [-10, -10, -10]),
            ...makeManyStatsWithSameManyAmounts(
                OFFENSIVE_POT,
                [1.01, 1.015, 1.02],
            ),
            makeStatWithManyAmounts(
                StatTypes.FLOOR_POT,
                [1.01, 1.015, 1.02],
            ),
            makeStatWithManyAmounts(
                StatTypes.DMG_RES,
                [0.985, 0.985, 0.985],
            ),
        ],
        GROUP,
        CONFLICT,
    ),
);

export default augments;

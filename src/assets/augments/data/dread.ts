import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { makeStatWithManyAmounts } from "../../makeStat";
import { makeManyAugments } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.DREAD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DREAD];
let augments: Augment[] = [];
// --------------------------------------

// dread keeper
augments.push(
    ...makeManyAugments(
        "dread keeper",
        3,
        [
            makeStatWithManyAmounts(StatTypes.BP, [7, 7.5, 10]),
            makeStatWithManyAmounts(StatTypes.HP, [10, 15, 30]),
            makeStatWithManyAmounts(StatTypes.PP, [3, 4, 7]),
            makeStatWithManyAmounts(
                StatTypes.FLOOR_POT,
                [1.01, 1.015, 1.02],
            ),
            makeStatWithManyAmounts(
                StatTypes.DMG_RES,
                [1.01, 1.015, 1.02],
            ),
        ],
        GROUP,
        CONFLICT,
    ),
);
export default augments;

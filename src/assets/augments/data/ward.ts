import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { AILMENT_RES } from "../../../utility";
import {
    makeManyStatsWithSameManyAmounts,
    makeStatWithManyAmounts,
} from "../../makeStat";
import { makeManyAugments } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.WARD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.WARD];
let augments: Augment[] = [];
// --------------------------------------

const names = [
    "burn",
    "freeze",
    "shock",
    "blind",
    "panic",
    "poison",
    "pain",
];
names.forEach((name, i) => {
    const stat = AILMENT_RES[i];

    augments.push(
        ...makeManyAugments(
            `${name} ward`,
            3,
            [
                makeStatWithManyAmounts(StatTypes.BP, [4, 5, 6]),
                makeStatWithManyAmounts(stat, [1.2, 1.25, 1.3]),
            ],
            GROUP,
            CONFLICT,
        ),
    );
});

augments.push(
    ...makeManyAugments(
        "sovereign ward",
        3,
        [
            makeStatWithManyAmounts(StatTypes.BP, [4, 5, 6]),
            ...makeManyStatsWithSameManyAmounts(
                AILMENT_RES,
                [1.2, 1.25, 1.3],
            ),
        ],
        GROUP,
        CONFLICT,
    ),
);
export default augments;

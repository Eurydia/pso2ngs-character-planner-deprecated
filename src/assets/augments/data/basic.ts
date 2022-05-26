import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
    makeStatWithManyAmounts,
    makeManyStatsWithSameManyAmounts,
    makeStat,
} from "../../makeStat";
import { makeAugment, makeManyAugments } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.BASIC;
const CONFLICT: AugmentGroups[] = [AugmentGroups.FUSED];
let augments: Augment[] = [];
// --------------------------------------

// stamina
augments.push(
    ...makeManyAugments(
        `stamina`,
        2,
        [
            makeStatWithManyAmounts(StatTypes.BP, [3, 4]),
            makeStatWithManyAmounts(StatTypes.HP, [5, 10]),
        ],
        GROUP,
        CONFLICT,
    ),
);
augments.push(
    makeAugment(
        "stamina (s)",
        3,
        [makeStat(StatTypes.BP, 5), makeStat(StatTypes.HP, 15)],
        GROUP,
        CONFLICT,
    ),
);
// spirit
augments.push(
    ...makeManyAugments(
        `spirit`,
        3,
        [
            makeStatWithManyAmounts(StatTypes.BP, [2, 3, 4]),
            makeStatWithManyAmounts(StatTypes.PP, [3, 4, 5]),
        ],
        GROUP,
        CONFLICT,
    ),
);
augments.push(
    makeAugment(
        "spirit (s)",
        3,
        [makeStat(StatTypes.BP, 4), makeStat(StatTypes.PP, 5)],
        GROUP,
        CONFLICT,
    ),
);
// might, precision, technique
const names = ["might", "precision", "technique"];
names.forEach((name, i) => {
    const stat = OFFENSIVE_POT[i];
    augments.push(
        ...makeManyAugments(
            name,
            2,
            [
                makeStatWithManyAmounts(StatTypes.BP, [4, 5, 6]),
                makeStatWithManyAmounts(stat, [1.01, 1.015, 1.02]),
            ],
            GROUP,
            CONFLICT,
        ),
    );
    augments.push(
        makeAugment(
            `${name} (s)`,
            3,
            [makeStat(StatTypes.BP, 6), makeStat(stat, 1.02)],
            GROUP,
            CONFLICT,
        ),
    );
});
// deftness
augments.push(
    ...makeManyAugments(
        `deftness`,
        3,
        [
            makeStatWithManyAmounts(StatTypes.BP, [3, 4, 5]),
            makeStatWithManyAmounts(
                StatTypes.FLOOR_POT,
                [1.01, 1.015, 1.02],
            ),
        ],
        GROUP,
        CONFLICT,
    ),
);
// guard
augments.push(
    ...makeManyAugments(
        `guard`,
        3,
        [
            makeStatWithManyAmounts(StatTypes.BP, [2, 3, 4]),
            makeStatWithManyAmounts(
                StatTypes.DMG_RES,
                [1.01, 1.015, 1.02],
            ),
        ],
        GROUP,
        CONFLICT,
    ),
);
// mastery
augments.push(
    ...makeManyAugments(
        `mastery`,
        4,
        [
            makeStatWithManyAmounts(StatTypes.BP, [6, 8, 10, 12]),
            ...makeManyStatsWithSameManyAmounts(
                OFFENSIVE_POT,
                [1.01, 1.015, 1.02, 1.025],
            ),
            makeStatWithManyAmounts(
                StatTypes.FLOOR_POT,
                [1.01, 1.015, 1.02, 1.025],
            ),
            makeStatWithManyAmounts(
                StatTypes.DMG_RES,
                [1.01, 1.015, 1.02, 1.025],
            ),
        ],
        GROUP,
        CONFLICT,
    ),
);
export default augments;

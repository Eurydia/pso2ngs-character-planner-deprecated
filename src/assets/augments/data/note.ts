import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
    makeStat,
    makeManyStatsWithSameAmount,
} from "../../makeStat";
import { DOUBLE_STATS, makeAugment } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.NOTE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.NOTE];
let augments: Augment[] = [];
// --------------------------------------

const suffixes = ["b", "c", "d"];
// ael
augments.push(
    makeAugment(
        "ael note a",
        0,
        [
            makeStat(StatTypes.BP, 5),
            makeStat(StatTypes.HP, 5),
            makeStat(StatTypes.PP, 3),
        ],
        GROUP,
        CONFLICT,
    ),
);
suffixes.forEach((suffix, i) => {
    const stats = DOUBLE_STATS[i];

    augments.push(
        makeAugment(
            `ael note ${suffix}`,
            0,
            [
                makeStat(StatTypes.BP, 4),
                ...makeManyStatsWithSameAmount(stats, 1.01),
            ],
            GROUP,
            CONFLICT,
        ),
    );
});

const ael_combat_names = ["magnus", "lab", "resola"];
ael_combat_names.forEach((name, i) => {
    const stat = OFFENSIVE_POT[i];

    augments.push(
        makeAugment(
            `${name} note`,
            0,
            [makeStat(StatTypes.BP, 5), makeStat(stat, 1.015)],
            GROUP,
            CONFLICT,
        ),
    );
});

// ret
augments.push(
    makeAugment(
        "ret note a",
        0,
        [makeStat(StatTypes.BP, 5), makeStat(StatTypes.HP, 10)],
        GROUP,
        CONFLICT,
    ),
);
suffixes.forEach((suffix, i) => {
    const stats = DOUBLE_STATS[i];

    augments.push(
        makeAugment(
            `ret note ${suffix}`,
            0,
            [
                makeStat(StatTypes.BP, 4),
                ...makeManyStatsWithSameAmount(stats, 1.0075),
            ],
            GROUP,
            CONFLICT,
        ),
    );
});

augments.push(
    makeAugment(
        `alno note`,
        0,
        [
            makeStat(StatTypes.BP, 5),
            makeStat(StatTypes.HP, 10),
            makeStat(StatTypes.PP, 3),
            makeStat(StatTypes.FLOOR_POT, 1.02),
        ],
        GROUP,
        CONFLICT,
    ),
);

augments.push(
    makeAugment(
        `maqea note`,
        0,
        [
            makeStat(StatTypes.BP, 5),
            ...makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.0125),
        ],
        GROUP,
        CONFLICT,
    ),
);
export default augments;

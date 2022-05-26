import { Augment, AugmentGroups, StatTypes } from "../../../types";
import {
    makeManyStatsWithSameAmount,
    makeManyStatsWithSameManyAmounts,
    makeStat,
    makeStatWithManyAmounts,
} from "../../makeStat";
import {
    DOUBLE_STATS,
    makeAugment,
    makeManyAugments,
} from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.DUALBLE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DUALBLE];
let augments: Augment[] = [];
// --------------------------------------

const names = ["melra", "meltech", "ratech"];

names.forEach((name, i) => {
    const stats = DOUBLE_STATS[i];

    augments.push(
        ...makeManyAugments(
            `${name} dualble`,
            2,
            [
                makeStatWithManyAmounts(StatTypes.BP, [4, 5]),
                ...makeManyStatsWithSameManyAmounts(
                    stats,
                    [1.0075, 1.0125],
                ),
            ],
            GROUP,
            CONFLICT,
        ),
    );
    augments.push(
        makeAugment(
            `${name} dualble (s)`,
            3,
            [
                makeStat(StatTypes.BP, 6),
                ...makeManyStatsWithSameAmount(stats, 1.0175),
            ],
            GROUP,
            CONFLICT,
        ),
    );
});

export default augments;

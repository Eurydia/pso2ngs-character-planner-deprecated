import { Augment, AugmentGroups } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
    makeConditional,
    makeManyStatsWithSameAmount,
} from "../../makeStat";
import { makeAugment } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.ELEMENTAL;
const CONFLICT: AugmentGroups[] = [AugmentGroups.ELEMENTAL];
let augments: Augment[] = [];
// --------------------------------------

const elements = [
    "fire",
    "ice",
    "lightning",
    "light",
    "wind",
    "dark",
];
elements.forEach((element, i) => {
    augments.push(
        makeAugment(`${element} exploit`, 1, [], GROUP, CONFLICT, [
            makeConditional(
                makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.025),
                `against enemies weak to ${element}`,
            ),
        ]),
    );
});

export default augments;

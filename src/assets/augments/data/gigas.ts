import { Augment, AugmentGroups, StatTypes } from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import { makeStatWithManyAmounts } from "../../makeStat";
import { makeManyAugments } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.GIGAS;
const CONFLICT: AugmentGroups[] = [AugmentGroups.GIGAS];
let augments: Augment[] = [];
// --------------------------------------

const names = ["might", "precision", "technique"];
names.forEach((name, i) => {
    const stat = OFFENSIVE_POT[i];

    augments.push(
        ...makeManyAugments(
            `gigas ${name}`,
            3,
            [
                makeStatWithManyAmounts(StatTypes.BP, [6, 8, 10]),
                makeStatWithManyAmounts(StatTypes.HP, [5, 10, 15]),
                makeStatWithManyAmounts(stat, [1.015, 1.02, 1.025]),
            ],
            GROUP,
            CONFLICT,
        ),
    );
});
export default augments;

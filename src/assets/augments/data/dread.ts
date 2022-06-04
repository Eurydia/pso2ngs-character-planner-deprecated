import { makeStatWithManyAmounts, StatTypes } from "../../stats";
import { makeManyAugments } from "../makeAugment";
import { Augment, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DREAD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DREAD];
let augments: Augment[] = [];
// --------------------------------------

// --------------------------------------
// dread keeper
augments.push(
  ...makeManyAugments("dread keeper", 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [7, 7.5, 10]),
    makeStatWithManyAmounts(StatTypes.HP, [10, 15, 30]),
    makeStatWithManyAmounts(StatTypes.PP, [3, 4, 7]),
    makeStatWithManyAmounts(StatTypes.FLOOR_POT, [1.01, 1.015, 1.02]),
    makeStatWithManyAmounts(StatTypes.DMG_RES, [1.01, 1.015, 1.02]),
  ]),
);

export default augments;

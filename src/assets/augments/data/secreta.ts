import { makeStatWithManyAmounts, StatTypes } from "../../stats";
import { makeManyAugments } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.SECRETA;
const CONFLICT = [AugmentGroups.SECRETA];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// alt
augments.push(
  ...makeManyAugments("alts secreata", 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [3, 4, 5]),
    makeStatWithManyAmounts(StatTypes.HP, [-10, -10, -10]),
    makeStatWithManyAmounts(StatTypes.POT, [1.01, 1.015, 1.02]),
    makeStatWithManyAmounts(StatTypes.FLOOR_POT, [1.01, 1.015, 1.02]),
    makeStatWithManyAmounts(StatTypes.DMG_RES, [0.985, 0.985, 0.985]),
  ]),
);

export default augments;

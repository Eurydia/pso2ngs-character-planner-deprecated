import { AILMENT_RES } from "../../../utility";
import { makeStatWithManyAmounts, StatTypes } from "../../stats";
import { makeManyAugments } from "../makeAugment";
import { Augment, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.WARD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.WARD];
let augments: Augment[] = [];
// --------------------------------------

// --------------------------------------
// ward
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
  const stat = makeStatWithManyAmounts(
    AILMENT_RES[i],
    [1.2, 1.25, 1.3],
  );

  augments.push(
    ...makeManyAugments(`${name} ward`, 3, GROUP, CONFLICT, [
      makeStatWithManyAmounts(StatTypes.BP, [4, 5, 6]),
      stat,
    ]),
  );
});

// --------------------------------------
// sovereign ward
augments.push(
  ...makeManyAugments("sovereign ward", 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [4, 5, 6]),
    makeStatWithManyAmounts(StatTypes.AILMENT_RES, [1.2, 1.25, 1.3]),
  ]),
);

export default augments;

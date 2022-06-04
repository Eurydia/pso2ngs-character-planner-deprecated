import { OFFENSIVE_POT } from "../../../utility";
import {
  makeStatWithManyAmounts,
  makeStat,
  StatTypes,
} from "../../stats";
import { makeAugment, makeManyAugments } from "../makeAugment";
import { Augment, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.BASIC;
const CONFLICT: AugmentGroups[] = [AugmentGroups.FUSED];
let augments: Augment[] = [];
// --------------------------------------

// --------------------------------------
// stamina
augments.push(
  ...makeManyAugments(`stamina`, 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [3, 4, 5]),
    makeStatWithManyAmounts(StatTypes.HP, [5, 10, 15]),
  ]),
);
// stamina s
augments.push(
  makeAugment(
    "stamina",
    3,
    AugmentGroups.S,
    CONFLICT,
    [makeStat(StatTypes.BP, 5), makeStat(StatTypes.HP, 15)],
    [],
    true,
  ),
);

// --------------------------------------
// spirit
augments.push(
  ...makeManyAugments(`spirit`, 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [2, 3, 4]),
    makeStatWithManyAmounts(StatTypes.PP, [3, 4, 5]),
  ]),
);
// spirit s
augments.push(
  makeAugment(
    "spirit",
    3,
    AugmentGroups.S,
    CONFLICT,
    [makeStat(StatTypes.BP, 4), makeStat(StatTypes.PP, 5)],
    [],
    true,
  ),
);

const names = ["might", "precision", "technique"];
names.forEach((name, i) => {
  const stat = OFFENSIVE_POT[i];

  // --------------------------------------
  // might, precision, technique
  augments.push(
    ...makeManyAugments(name, 3, GROUP, CONFLICT, [
      makeStatWithManyAmounts(StatTypes.BP, [4, 5, 6]),
      makeStatWithManyAmounts(stat, [1.01, 1.015, 1.02]),
    ]),
  );
  // might, precision, technique s
  augments.push(
    makeAugment(
      `${name}`,
      3,
      AugmentGroups.S,
      CONFLICT,
      [makeStat(StatTypes.BP, 6), makeStat(stat, 1.02)],
      [],
      true,
    ),
  );
});

// --------------------------------------
// deftness
augments.push(
  ...makeManyAugments(`deftness`, 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [3, 4, 5]),
    makeStatWithManyAmounts(StatTypes.FLOOR_POT, [1.01, 1.015, 1.02]),
  ]),
);

// --------------------------------------
// guard
augments.push(
  ...makeManyAugments(`guard`, 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [2, 3, 4]),
    makeStatWithManyAmounts(StatTypes.DMG_RES, [1.01, 1.015, 1.02]),
  ]),
);

// --------------------------------------
// mastery
augments.push(
  ...makeManyAugments(`mastery`, 4, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [6, 8, 10, 12]),
    makeStatWithManyAmounts(
      StatTypes.POT,
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
  ]),
);

export default augments;

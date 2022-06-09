import {
  makeStatWithManyAmounts,
  StatTypes,
  OFFENSIVE_POT,
} from "../../stats";
import { makeManyAugments } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.SOUL;
const CONFLICT: AugmentGroups[] = [AugmentGroups.SOUL];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// alt soul
augments.push(
  ...makeManyAugments(`alts soul`, 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [5, 7, 9]),
    makeStatWithManyAmounts(StatTypes.HP, [5, 10, 15]),
    makeStatWithManyAmounts(StatTypes.DMG_RES, [1.01, 1.02, 1.025]),
  ]),
);

// --------------------------------------
// dolz soul
augments.push(
  ...makeManyAugments(`dolz soul`, 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [5, 6, 7]),
    makeStatWithManyAmounts(StatTypes.PP, [5, 5, 5]),
    makeStatWithManyAmounts(StatTypes.FLOOR_POT, [1.01, 1.02, 1.025]),
  ]),
);

// --------------------------------------
// form, form machini, form sand soul
const form_names = ["forms", "forms machini", "forms sand"];
form_names.forEach((name, i) => {
  const stat = OFFENSIVE_POT[i];

  augments.push(
    ...makeManyAugments(`${name} soul`, 3, GROUP, CONFLICT, [
      makeStatWithManyAmounts(StatTypes.BP, [6, 8, 9]),
      makeStatWithManyAmounts(stat, [1.02, 1.02, 1.02]),
      makeStatWithManyAmounts(StatTypes.DMG_RES, [1, 1.02, 1.025]),
    ]),
  );
});

// --------------------------------------
// daityl, pettas, next soul
const boss_one_names = ["daityl", "pettas", "nex"];
boss_one_names.forEach((name, i) => {
  const stat = OFFENSIVE_POT[i];

  augments.push(
    ...makeManyAugments(`${name} soul`, 3, GROUP, CONFLICT, [
      makeStatWithManyAmounts(StatTypes.BP, [7, 8, 10]),
      makeStatWithManyAmounts(StatTypes.PP, [5, 5, 5]),
      makeStatWithManyAmounts(stat, [1.01, 1.02, 1.025]),
    ]),
  );
});

// --------------------------------------
// dust, ragras, renus soul
const boss_two_names = ["dust", "ragras", "renus"];
boss_two_names.forEach((name, i) => {
  const stat = OFFENSIVE_POT[i];

  augments.push(
    ...makeManyAugments(`${name} soul`, 3, GROUP, CONFLICT, [
      makeStatWithManyAmounts(StatTypes.BP, [7, 8, 10]),
      makeStatWithManyAmounts(StatTypes.HP, [15, 15, 15]),
      makeStatWithManyAmounts(stat, [1.01, 1.02, 1.025]),
    ]),
  );
});

// --------------------------------------
// eradi soul
augments.push(
  ...makeManyAugments(`eradi soul`, 3, GROUP, CONFLICT, [
    makeStatWithManyAmounts(StatTypes.BP, [7, 8, 10]),
    makeStatWithManyAmounts(StatTypes.HP, [10, 10, 10]),
    makeStatWithManyAmounts(StatTypes.PP, [4, 4, 4]),
    makeStatWithManyAmounts(StatTypes.POT, [1.01, 1.015, 1.02]),
  ]),
);
export default augments;

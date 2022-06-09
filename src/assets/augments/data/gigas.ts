import {
  makeStatWithManyAmounts,
  StatTypes,
  OFFENSIVE_POT,
} from "../../stats";
import { makeManyAugments } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.GIGAS;
const CONFLICT: AugmentGroups[] = [AugmentGroups.GIGAS];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// gigas might, prec, tech
const names = ["might", "precision", "technique"];
names.forEach((name, i) => {
  const stat = makeStatWithManyAmounts(
    OFFENSIVE_POT[i],
    [1.015, 1.02, 1.025],
  );
  augments.push(
    ...makeManyAugments(`gigas ${name}`, 3, GROUP, CONFLICT, [
      makeStatWithManyAmounts(StatTypes.BP, [6, 8, 10]),
      makeStatWithManyAmounts(StatTypes.HP, [5, 10, 15]),
      stat,
    ]),
  );
});
export default augments;

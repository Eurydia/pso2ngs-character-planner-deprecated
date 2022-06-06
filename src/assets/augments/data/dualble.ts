import {
  makeManyStatsWithSameAmount,
  makeManyStatsWithSameManyAmounts,
  makeStat,
  makeStatWithManyAmounts,
  StatTypes,
} from "../../stats";
import {
  DOUBLE_STATS,
  makeAugment,
  makeManyAugments,
} from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DUALBLE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DUALBLE];
let augments: AugmentData[] = [];
// --------------------------------------

const names = ["melra", "meltech", "ratech"];

names.forEach((name, i) => {
  const stats = DOUBLE_STATS[i];

  // --------------------------------------
  // melra, meltech, ratech
  augments.push(
    ...makeManyAugments(`${name} dualble`, 3, GROUP, CONFLICT, [
      makeStatWithManyAmounts(StatTypes.BP, [4, 5, 6]),
      ...makeManyStatsWithSameManyAmounts(
        stats,
        [1.0075, 1.0125, 1.0175],
      ),
    ]),
  );
  // melra, meltech, ratech s
  augments.push(
    makeAugment(
      `${name} dualble`,
      3,
      AugmentGroups.S,
      CONFLICT,
      [
        makeStat(StatTypes.BP, 6),
        ...makeManyStatsWithSameAmount(stats, 1.0175),
      ],
      [],
      true,
    ),
  );
});

export default augments;

import { makeStat, StatShorthands, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DUALBLE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DUALBLE];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// melra
(() => {
  const bps = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.MEL_POT, pot[level_index]),
      makeStat(StatTypes.RNG_POT, pot[level_index]),
    ];
    augments.push(
      makeAugmentData("melra dualble", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// meltech
(() => {
  const bps = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.MEL_POT, pot[level_index]),
      makeStat(StatTypes.TEC_POT, pot[level_index]),
    ];
    augments.push(
      makeAugmentData(
        "meltech dualble",
        level,
        GROUP,
        CONFLICT,
        stats,
      ),
    );
  });
})();

// --------------------------------------
// ratech
(() => {
  const bps = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.RNG_POT, pot[level_index]),
      makeStat(StatTypes.TEC_POT, pot[level_index]),
    ];
    augments.push(
      makeAugmentData(
        "ratech dualble",
        level,
        GROUP,
        CONFLICT,
        stats,
      ),
    );
  });
})();

// --------------------------------------
// triplble
augments.push(
  makeAugmentData("triplble", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 8),
    makeStat(StatShorthands.POT, 1.02),
  ]),
);

export default augments;

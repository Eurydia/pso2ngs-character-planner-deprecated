import { makeStat, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
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

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.MEL_POT, pot[i]),
      makeStat(StatTypes.RNG_POT, pot[i]),
    ];
    // generic
    augments.push(
      makeAugmentData("melra dualble", level, GROUP, CONFLICT, stats),
    );
    // s type
    if (level === 3) {
      augments.push(
        makeAugmentData(
          "melra dualble",
          level,
          GROUP,
          CONFLICT,
          stats,
          [],
          true,
        ),
      );
    }
  });
})();

// --------------------------------------
// meltech
(() => {
  const bps = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.MEL_POT, pot[i]),
      makeStat(StatTypes.TEC_POT, pot[i]),
    ];
    // generic
    augments.push(
      makeAugmentData(
        "meltech dualble",
        level,
        GROUP,
        CONFLICT,
        stats,
      ),
    );
    // s type
    if (level === 3) {
      augments.push(
        makeAugmentData(
          "meltech dualble",
          level,
          GROUP,
          CONFLICT,
          stats,
          [],
          true,
        ),
      );
    }
  });
})();

// --------------------------------------
// ratech
(() => {
  const bps = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.RNG_POT, pot[i]),
      makeStat(StatTypes.TEC_POT, pot[i]),
    ];
    // generic
    augments.push(
      makeAugmentData(
        "ratech dualble",
        level,
        GROUP,
        CONFLICT,
        stats,
      ),
    );
    // s type
    if (level === 3) {
      augments.push(
        makeAugmentData(
          "ratech dualble",
          level,
          GROUP,
          CONFLICT,
          stats,
          [],
          true,
        ),
      );
    }
  });
})();

export default augments;

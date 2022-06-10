import { makeStat, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DUALBLE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DUALBLE];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// melra
(() => {
  const bp = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
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
  }
})();

// --------------------------------------
// meltech
(() => {
  const bp = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
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
  }
})();

// --------------------------------------
// ratech
(() => {
  const bp = [4, 5, 6];
  const pot = [1.0075, 1.0125, 1.0175];

  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
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
  }
})();

export default augments;

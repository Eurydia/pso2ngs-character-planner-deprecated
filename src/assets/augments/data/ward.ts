import { StatTypes, AILMENT_RES, makeStat } from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.WARD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.WARD];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// ward
(() => {
  const names = [
    "burn",
    "freeze",
    "shock",
    "blind",
    "panic",
    "poison",
    "pain",
  ];

  const bp = [4, 5, 6];
  const ailment_res = [1.2, 1.25, 1.3];

  names.forEach((name, i) => {
    for (let i = 0; i < 3; i++) {
      const level = i + 1;
      const stats = [
        makeStat(StatTypes.BP, bp[i]),
        makeStat(AILMENT_RES[i], ailment_res[i]),
      ];

      augments.push(
        makeAugmentData(
          `${name} ward`,
          level,
          GROUP,
          CONFLICT,
          stats,
        ),
      );
    }
  });
})();

// --------------------------------------
// sovereign ward
(() => {
  const bps = [6, 8, 10];
  const ailemnt_res = [1.2, 1.25, 1.3];

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.AILMENT_RES, ailemnt_res[i]),
    ];
    augments.push(
      makeAugmentData(
        "sovereign ward",
        level,
        GROUP,
        CONFLICT,
        stats,
      ),
    );
  });
})();

export default augments;

import {
  StatTypes,
  expandPot,
  makeStat,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.SOUL;
const CONFLICT: AugmentGroups[] = [AugmentGroups.SOUL];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// alt soul
(() => {
  const bps = [5, 7, 9];
  const hp = [5, 10, 15];
  const dmg_res = [1.01, 1.02, 1.025];

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(StatTypes.DMG_RESIST, dmg_res[i]),
    ];

    augments.push(
      makeAugmentData("alts soul", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// dolz soul
(() => {
  const bps = [5, 6, 7];
  const pp = [5, 5, 5];
  const floor_pot = [1.01, 1.02, 1.025];

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.PP, pp[i]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[i]),
    ];
    augments.push(
      makeAugmentData("dolz soul", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// form | form machini | form sand soul
(() => {
  const bps = [6, 8, 9];
  const pot_type = expandPot();
  const pot = [1.02, 1.02, 1.02];
  const dmg_res = [1, 1.02, 1.025];

  const names = ["forms", "forms machini", "forms sand"];
  names.forEach((name, i) => {
    bps.forEach((bp, j) => {
      const level = j + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(pot_type[i], pot[j]),
        makeStat(StatTypes.DMG_RESIST, dmg_res[j]),
      ];

      augments.push(
        makeAugmentData(
          `${name} soul`,
          level,
          GROUP,
          CONFLICT,
          stats,
        ),
      );
    });
  });
})();

// --------------------------------------
// daityl | pettas | nex soul
(() => {
  const bps = [7, 8, 10];
  const pp = [5, 5, 5];
  const pot_type = expandPot();
  const pot = [1.01, 1.02, 1.025];

  const names = ["daityl", "pettas", "nex"];
  names.forEach((name, i) => {
    bps.forEach((bp, j) => {
      const level = j + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(StatTypes.PP, pp[j]),
        makeStat(pot_type[i], pot[j]),
      ];

      augments.push(
        makeAugmentData(
          `${name} soul`,
          level,
          GROUP,
          CONFLICT,
          stats,
        ),
      );
    });
  });
})();

// --------------------------------------
// dust | ragras | renus soul
(() => {
  const bps = [7, 8, 10];
  const hp = [15, 15, 15];
  const pot_type = expandPot();
  const pot = [1.01, 1.02, 1.025];

  const names = ["dust", "ragras", "renus"];
  names.forEach((name, i) => {
    bps.forEach((bp, j) => {
      const level = j + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(StatTypes.HP, hp[j]),
        makeStat(pot_type[i], pot[j]),
      ];

      augments.push(
        makeAugmentData(
          `${name} soul`,
          level,
          GROUP,
          CONFLICT,
          stats,
        ),
      );
    });
  });
})();

// --------------------------------------
// eradi soul
(() => {
  const bps = [7, 8, 10];
  const hp = [10, 10, 10];
  const pp = [4, 4, 4];
  const pot = [1.01, 1.015, 1.02];

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(StatTypes.PP, pp[i]),
      makeStat(StatShorthands.POT, pot[i]),
    ];
    augments.push(
      makeAugmentData("eradi soul", level, GROUP, CONFLICT, stats),
    );
  });
})();

export default augments;

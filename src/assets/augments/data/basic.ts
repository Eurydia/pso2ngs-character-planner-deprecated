import { makeStat, OFFENSIVE_POT, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.BASIC;
const CONFLICT: AugmentGroups[] = [AugmentGroups.FUSED];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// stamina
(() => {
  const bp = [3, 4, 5];
  const hp = [5, 10, 15];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.HP, hp[i]),
    ];
    // generic
    augments.push(
      makeAugmentData("stamina", level, GROUP, CONFLICT, stats),
    );
    if (level === 3) {
      // s type
      augments.push(
        makeAugmentData(
          "stamina",
          level,
          AugmentGroups.S,
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
// spirit
(() => {
  const bp = [2, 3, 4];
  const pp = [3, 4, 5];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.PP, pp[i]),
    ];
    // generic
    augments.push(
      makeAugmentData("spirit", level, GROUP, CONFLICT, stats),
    );

    if (level === 3) {
      // s type
      augments.push(
        makeAugmentData(
          "spirit",
          level,
          AugmentGroups.S,
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
// might | precision | techinque
(() => {
  const bp = [4, 5, 6];
  const pot = [1.01, 1.015, 1.02];

  const names = ["might", "precision", "technique"];
  names.forEach((name, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(OFFENSIVE_POT[i], pot[i]),
    ];
    // generic
    augments.push(
      makeAugmentData(name, level, GROUP, CONFLICT, stats),
    );
    // s type
    if (level === 3) {
      augments.push(
        makeAugmentData(
          name,
          level,
          AugmentGroups.S,
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
// deftness
(() => {
  const bp = [3, 4, 5];
  const floor_pot = [1.01, 1.015, 1.02];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[i]),
    ];
    // generic
    augments.push(
      makeAugmentData("deftness", level, GROUP, CONFLICT, stats),
    );
  }
})();

// --------------------------------------
// guard
(() => {
  const bp = [2, 3, 4];
  const dmg_res = [1.01, 1.015, 1.02];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.DMG_RES, dmg_res[i]),
    ];
    augments.push(
      makeAugmentData("guard", level, GROUP, CONFLICT, stats),
    );
  }
})();

// --------------------------------------
// mastery
(() => {
  const bp = [6, 8, 10, 12];
  const pot = [1.01, 1.015, 1.02, 1.025];
  const floor_pot = [1.01, 1.015, 1.02, 1.025];
  const dmg_res = [1.01, 1.015, 1.02, 1.025];
  for (let i = 0; i < 4; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.POT, pot[i]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[i]),
      makeStat(StatTypes.DMG_RES, dmg_res[i]),
    ];
    augments.push(
      makeAugmentData("mastery", level, GROUP, CONFLICT, stats),
    );
  }
})();

export default augments;

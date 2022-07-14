import {
  makeStat,
  expandPot,
  StatTypes,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.BASIC;
const CONFLICT: AugmentGroups[] = [AugmentGroups.FUSED];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// stamina
(() => {
  const bps = [3, 4, 5];
  const hp = [5, 10, 15];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[level_index]),
    ];
    augments.push(
      makeAugmentData("stamina", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// spirit
(() => {
  const bps = [2, 3, 4];
  const pp = [3, 4, 5];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.PP, pp[level_index]),
    ];
    augments.push(
      makeAugmentData("spirit", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// might | precision | techinque
(() => {
  const bps = [4, 5, 6];
  const pot_type = expandPot();
  const pot = [1.01, 1.015, 1.02];

  const names = ["might", "precision", "technique"];
  names.forEach((name, pot_index) => {
    bps.forEach((bp, level_index) => {
      const level = level_index + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(pot_type[pot_index], pot[level_index]),
      ];
      augments.push(
        makeAugmentData(name, level, GROUP, CONFLICT, stats),
      );
    });
  });
})();

// --------------------------------------
// deftness
(() => {
  const bps = [3, 4, 5];
  const floor_pot = [1.01, 1.015, 1.02];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.FLOOR_POT, floor_pot[level_index]),
    ];
    augments.push(
      makeAugmentData("deftness", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// guard
(() => {
  const bps = [2, 3, 4];
  const dmg_res = [1.01, 1.015, 1.02];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.DMG_RESIST, dmg_res[level_index]),
    ];
    augments.push(
      makeAugmentData("guard", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// mastery
(() => {
  const bps = [6, 8, 10, 12];
  const pot = [1.01, 1.015, 1.02, 1.025];
  const floor_pot = [1.01, 1.015, 1.02, 1.025];
  const dmg_res = [1.01, 1.015, 1.02, 1.025];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatShorthands.POT, pot[level_index]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[level_index]),
      makeStat(StatTypes.DMG_RESIST, dmg_res[level_index]),
    ];
    augments.push(
      makeAugmentData("mastery", level, GROUP, CONFLICT, stats),
    );
  });
})();

export default augments;

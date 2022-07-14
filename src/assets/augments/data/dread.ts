import { makeStat, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DREAD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DREAD];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// dread keeper
(() => {
  const bps = [7, 7.5, 10];
  const hp = [10, 15, 30];
  const pp = [3, 4, 7];
  const floor_pot = [1.01, 1.015, 1.02];
  const dmg_res = [1.01, 1.015, 1.02];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[level_index]),
      makeStat(StatTypes.PP, pp[level_index]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[level_index]),
      makeStat(StatTypes.DMG_RESIST, dmg_res[level_index]),
    ];
    augments.push(
      makeAugmentData("dread keeper", level, GROUP, CONFLICT, stats),
    );
  });
})();

export default augments;

import { makeStat, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
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

  bps.forEach((bp, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(StatTypes.PP, pp[i]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[i]),
      makeStat(StatTypes.DMG_RES, dmg_res[i]),
    ];
    augments.push(
      makeAugmentData("dread keeper", level, GROUP, CONFLICT, stats),
    );
  });
})();

export default augments;

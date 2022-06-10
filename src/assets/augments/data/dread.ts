import { makeStat, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DREAD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DREAD];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// dread keeper
(() => {
  const dk_bp = [7, 7.5, 10];
  const dk_hp = [10, 15, 30];
  const dk_pp = [3, 4, 7];
  const dk_floor_pot = [1.01, 1.015, 1.02];
  const dk_dmg_res = [1.01, 1.015, 1.02];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, dk_bp[i]),
      makeStat(StatTypes.HP, dk_hp[i]),
      makeStat(StatTypes.PP, dk_pp[i]),
      makeStat(StatTypes.FLOOR_POT, dk_floor_pot[i]),
      makeStat(StatTypes.DMG_RES, dk_dmg_res[i]),
    ];
    // generic
    augments.push(
      makeAugmentData("dread keeper", level, GROUP, CONFLICT, stats),
    );
  }
})();

export default augments;

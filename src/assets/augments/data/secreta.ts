import { makeStat, StatShorthands, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.SECRETA;
const CONFLICT = [AugmentGroups.SECRETA];

let data: AugmentData[] = [];

// --------------------------------------
// alt
(() => {
  const bps = [3, 4, 5];
  const hp = [-10, -10, -10];
  const pot = [1.01, 1.015, 1.02];
  const floor_pot = [1.01, 1.015, 1.02];
  const dmg_res = [0.985, 0.985, 0.985];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[level_index]),
      makeStat(StatShorthands.POT, pot[level_index]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[level_index]),
      makeStat(StatTypes.DMG_RESIST, dmg_res[level_index]),
    ];
    data.push(
      makeAugmentData("alts secreata", level, GROUP, CONFLICT, stats),
    );
  });
})();

export default data;

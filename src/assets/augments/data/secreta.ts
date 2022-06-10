import { makeStat, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.SECRETA;
const CONFLICT = [AugmentGroups.SECRETA];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// alt
(() => {
  const bp = [3, 4, 5];
  const hp = [-10, -10, -10];
  const pot = [1.01, 1.015, 1.02];
  const floor_pot = [1.01, 1.015, 1.02];
  const dmg_res = [0.985, 0.985, 0.985];

  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(StatTypes.POT, pot[i]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[i]),
      makeStat(StatTypes.DMG_RES, dmg_res[i]),
    ];

    augments.push(
      makeAugmentData("alts secreata", level, GROUP, CONFLICT, stats),
    );
  }
})();

export default augments;

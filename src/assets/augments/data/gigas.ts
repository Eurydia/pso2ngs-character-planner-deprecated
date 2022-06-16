import { StatTypes, expandPot, makeStat } from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.GIGAS;
const CONFLICT: AugmentGroups[] = [AugmentGroups.GIGAS];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// might | precicion | technique
(() => {
  const names = ["might", "precision", "technique"];

  const bps = [6, 8, 10];
  const hp = [5, 10, 15];
  const pot_type = expandPot();
  const pot = [1.015, 1.02, 1.025];
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
          `gigas ${name}`,
          level,
          GROUP,
          CONFLICT,
          stats,
        ),
      );
    });
  });
})();

export default augments;

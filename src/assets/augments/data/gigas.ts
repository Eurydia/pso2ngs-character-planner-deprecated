import { StatTypes, OFFENSIVE_POT, makeStat } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.GIGAS;
const CONFLICT: AugmentGroups[] = [AugmentGroups.GIGAS];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// might | precicion | technique
(() => {
  const bp = [6, 8, 10];
  const hp = [5, 10, 15];
  const pot = [1.015, 1.02, 1.025];

  const names = ["might", "precision", "technique"];
  names.forEach((name, i) => {
    const level = i + 1;

    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(OFFENSIVE_POT[i], pot[i]),
    ];
    augments.push(
      makeAugmentData(`gigas ${name}`, level, GROUP, CONFLICT, stats),
    );
  });
})();

export default augments;

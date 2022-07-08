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
  const bps = [6, 8, 10];
  const hp = [5, 10, 15];
  const pot_type = expandPot();
  const pot = [1.015, 1.02, 1.025];

  const names = ["might", "precision", "technique"];
  names.forEach((name, pot_type_index) => {
    bps.forEach((bp, level_index) => {
      const level = level_index + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(StatTypes.HP, hp[level_index]),
        makeStat(pot_type[pot_type_index], pot[level_index]),
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

// --------------------------------------
// aglai
augments.push(
  makeAugmentData("gigas aglai", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 15),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.RNG_POT, 1.025),
  ]),
);

// --------------------------------------
// euphroy
augments.push(
  makeAugmentData("gigas euphroy", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 15),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);

// --------------------------------------
// thali
augments.push(
  makeAugmentData("gigas thali", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 15),
    makeStat(StatTypes.RNG_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);
export default augments;

import { makeStat, StatTypes, OFFENSIVE_POT } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.FUSED;
const CONFLICT = [AugmentGroups.FUSED, AugmentGroups.BASIC];
let augments: AugmentData[] = [];
// --------------------------------------

(() => {
  const names = ["might", "precision", "technique"];
  names.forEach((name, i) => {
    const pot = makeStat(OFFENSIVE_POT[i], 1.02);

    // sta
    augments.push(
      makeAugmentData(`sta ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        makeStat(StatTypes.HP, 15),
        pot,
      ]),
    );

    // spi
    augments.push(
      makeAugmentData(`spi ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        makeStat(StatTypes.PP, 5),
        pot,
      ]),
    );

    // deft
    augments.push(
      makeAugmentData(`deft ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        pot,
        makeStat(StatTypes.FLOOR_POT, 1.02),
      ]),
    );

    // gua
    augments.push(
      makeAugmentData(`gua ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        pot,
        makeStat(StatTypes.DMG_RES, 1.02),
      ]),
    );
  });
})();

export default augments;

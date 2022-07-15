import { makeStat, StatTypes, expandPot } from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.FUSED;
const CONFLICT = [AugmentGroups.FUSED, AugmentGroups.BASIC];

let data: AugmentData[] = [];

// --------------------------------------
// fused
(() => {
  const pot_type = expandPot();

  const names = ["might", "precision", "technique"];
  names.forEach((name, pot_type_index) => {
    const pot = makeStat(pot_type[pot_type_index], 1.02);

    // sta
    data.push(
      makeAugmentData(`sta ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        makeStat(StatTypes.HP, 15),
        pot,
      ]),
    );

    // spi
    data.push(
      makeAugmentData(`spi ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        makeStat(StatTypes.PP, 5),
        pot,
      ]),
    );

    // deft
    data.push(
      makeAugmentData(`deft ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        pot,
        makeStat(StatTypes.FLOOR_POT, 1.02),
      ]),
    );

    // gua
    data.push(
      makeAugmentData(`gua ${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        pot,
        makeStat(StatTypes.DMG_RESIST, 1.02),
      ]),
    );
  });
})();

export default data;

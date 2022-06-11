import {
  makeStat,
  StatTypes,
  expandPotShorthand,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";
// --------------------------------------
const GROUP = AugmentGroups.ADDI;
const CONFLICT = [AugmentGroups.ADDI];
let augments: AugmentData[] = [];
// --------------------------------------

(() => {
  const pot_type = expandPotShorthand();
  const names = ["mel", "ra", "tech"];
  names.forEach((name, index) => {
    const pot = makeStat(pot_type[index], 1.025);

    // sta
    augments.push(
      makeAugmentData(`addi sta${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        makeStat(StatTypes.HP, 20),
        pot,
      ]),
    );

    // spi
    augments.push(
      makeAugmentData(`addi spi${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        pot,
        makeStat(StatTypes.FLOOR_POT, 1.025),
      ]),
    );

    // deft
    augments.push(
      makeAugmentData(`addi deft${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        makeStat(StatTypes.PP, 6),
        pot,
      ]),
    );

    // gua
    augments.push(
      makeAugmentData(`addi guard${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        pot,
        makeStat(StatTypes.DMG_RES, 1.025),
      ]),
    );

    // staspi
    augments.push(
      makeAugmentData(`add staspi${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        makeStat(StatTypes.HP, 10),
        makeStat(StatTypes.PP, 3),
        pot,
      ]),
    );

    // ward
    augments.push(
      makeAugmentData(`addi ward${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        pot,
        makeStat(StatShorthands.AILMENT_RES, 1.2),
      ]),
    );
  });
})();

export default augments;

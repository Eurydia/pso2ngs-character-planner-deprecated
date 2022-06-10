import { makeStat, StatTypes, OFFENSIVE_POT } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";
// --------------------------------------
const GROUP = AugmentGroups.ADDI;
const CONFLICT = [AugmentGroups.ADDI];
let augments: AugmentData[] = [];
// --------------------------------------

(() => {
  const names = ["mel", "ra", "tech"];

  for (let i = 0; i < 3; i++) {
    const name = names[i];
    const main_stat = makeStat(OFFENSIVE_POT[i], 1.025);

    // sta
    augments.push(
      makeAugmentData(`addi sta${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        makeStat(StatTypes.HP, 20),
        main_stat,
      ]),
    );

    // spi
    augments.push(
      makeAugmentData(`addi spi${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        main_stat,
        makeStat(StatTypes.FLOOR_POT, 1.025),
      ]),
    );

    // deft
    augments.push(
      makeAugmentData(`addi deft${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        makeStat(StatTypes.PP, 6),
        main_stat,
      ]),
    );

    // gua
    augments.push(
      makeAugmentData(`addi guard${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        main_stat,
        makeStat(StatTypes.DMG_RES, 1.025),
      ]),
    );

    // staspi
    augments.push(
      makeAugmentData(`add staspi${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        makeStat(StatTypes.HP, 10),
        makeStat(StatTypes.PP, 3),
        main_stat,
      ]),
    );

    // ward
    augments.push(
      makeAugmentData(`addi ward${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        main_stat,
        makeStat(StatTypes.AILMENT_RES, 1.2),
      ]),
    );
  }
})();

export default augments;

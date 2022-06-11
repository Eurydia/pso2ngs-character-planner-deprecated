import { makeStat, StatTypes, OFFENSIVE_POT } from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.TRIA;
const CONFLICT = [AugmentGroups.TRIA];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
(() => {
  const names = ["mel", "ra", "tech"];

  names.forEach((name, i) => {
    const pot = makeStat(OFFENSIVE_POT[i], 1.0225);

    // sta
    augments.push(
      makeAugmentData(`tria staro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        makeStat(StatTypes.HP, -5),
        pot,
      ]),
    );

    // spi
    augments.push(
      makeAugmentData(`tria spiro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        makeStat(StatTypes.PP, -3),
        pot,
      ]),
    );

    // deft
    augments.push(
      makeAugmentData(`tria deftro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        pot,
        makeStat(StatTypes.FLOOR_POT, 0.99),
      ]),
    );

    // gua
    augments.push(
      makeAugmentData(`tria guaro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        pot,
        makeStat(StatTypes.DMG_RES, 0.99),
      ]),
    );
  });
})();

export default augments;

import { makeStat, StatTypes, expandPot } from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.TRIA;
const CONFLICT = [AugmentGroups.TRIA];

let data: AugmentData[] = [];

// --------------------------------------
(() => {
  const pot_type = expandPot();

  const names = ["mel", "ra", "tech"];
  names.forEach((name, pot_type_index) => {
    const pot = makeStat(pot_type[pot_type_index], 1.0225);

    // sta
    data.push(
      makeAugmentData(`tria staro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        makeStat(StatTypes.HP, -5),
        pot,
      ]),
    );

    // spi
    data.push(
      makeAugmentData(`tria spiro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        makeStat(StatTypes.PP, -3),
        pot,
      ]),
    );

    // deft
    data.push(
      makeAugmentData(`tria deftro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        pot,
        makeStat(StatTypes.FLOOR_POT, 0.99),
      ]),
    );

    // gua
    data.push(
      makeAugmentData(`tria guaro${name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        pot,
        makeStat(StatTypes.DMG_RESIST, 0.99),
      ]),
    );
  });
})();

export default data;

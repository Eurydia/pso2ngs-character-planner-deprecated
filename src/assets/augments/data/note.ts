import {
  makeStat,
  StatTypes,
  expandPot,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.NOTE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.NOTE];

let data: AugmentData[] = [];

// --------------------------------------
// ael
// exploration
// a
data.push(
  makeAugmentData("ael note a", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 5),
    makeStat(StatTypes.PP, 3),
  ]),
);
// b
data.push(
  makeAugmentData("ael note b", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.01),
    makeStat(StatTypes.RNG_POT, 1.01),
  ]),
);
// c
data.push(
  makeAugmentData("ael note c", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.0075),
    makeStat(StatTypes.TEC_POT, 1.0075),
  ]),
);
// d
data.push(
  makeAugmentData("ael note d", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.RNG_POT, 1.0075),
    makeStat(StatTypes.TEC_POT, 1.0075),
  ]),
);
// combat
// magnus | lab | resola
(() => {
  const names = ["magnus", "lab", "resola"];

  const pot_type = expandPot();
  names.forEach((name, i) => {
    const stats = [
      makeStat(StatTypes.BP, 5),
      makeStat(pot_type[i], 1.015),
    ];
    data.push(
      makeAugmentData(`${name} note`, 0, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// ret
// exploration
// a
data.push(
  makeAugmentData("ret note a", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
  ]),
);
// b
data.push(
  makeAugmentData("ret note b", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.0075),
    makeStat(StatTypes.RNG_POT, 1.0075),
  ]),
);
// c
data.push(
  makeAugmentData("ret note c", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.0075),
    makeStat(StatTypes.TEC_POT, 1.0075),
  ]),
);
// d
data.push(
  makeAugmentData("ret note d", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.RNG_POT, 1.0075),
    makeStat(StatTypes.TEC_POT, 1.0075),
  ]),
);
// combat
// alno
data.push(
  makeAugmentData(`alno note`, 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 3),
    makeStat(StatTypes.FLOOR_POT, 1.02),
  ]),
);
// maqea
data.push(
  makeAugmentData(`maqea note`, 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatShorthands.POT, 1.0125),
  ]),
);

// --------------------------------------
// kvar
// exploration
// a
data.push(
  makeAugmentData("kvar note a", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 5),
  ]),
);
// b
data.push(
  makeAugmentData("kvar note b", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.02),
    makeStat(StatTypes.RNG_POT, 1.02),
    makeStat(StatTypes.DMG_RESIST, 0.98),
  ]),
);
// c
data.push(
  makeAugmentData("kvar note c", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.02),
    makeStat(StatTypes.TEC_POT, 1.02),
    makeStat(StatTypes.DMG_RESIST, 0.98),
  ]),
);
// d
data.push(
  makeAugmentData("kvar note d", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.RNG_POT, 1.02),
    makeStat(StatTypes.TEC_POT, 1.02),
    makeStat(StatTypes.DMG_RESIST, 0.98),
  ]),
);
// combat
// lostral
data.push(
  makeAugmentData("lostral note", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
    makeStat(StatShorthands.POT, 1.025),
  ]),
);
// belgan
data.push(
  makeAugmentData("lostral note", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 3),
    makeStat(StatShorthands.POT, 1.025),
  ]),
);

export default data;

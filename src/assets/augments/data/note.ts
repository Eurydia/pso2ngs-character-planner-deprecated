import {
  makeStat,
  StatTypes,
  getExpandedPot,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.NOTE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.NOTE];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// ael
// exploration
// a
augments.push(
  makeAugmentData("ael note a", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 5),
    makeStat(StatTypes.PP, 3),
  ]),
);
// b
augments.push(
  makeAugmentData("ael note b", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.01),
    makeStat(StatTypes.RNG_POT, 1.01),
  ]),
);

// c
augments.push(
  makeAugmentData("ael note c", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.0075),
    makeStat(StatTypes.TEC_POT, 1.0075),
  ]),
);

// d
augments.push(
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

  const pot_type = getExpandedPot();
  names.forEach((name, i) => {
    const stats = [
      makeStat(StatTypes.BP, 5),
      makeStat(pot_type[i], 1.015),
    ];
    augments.push(
      makeAugmentData(`${name} note`, 0, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// ret
// exploration
// a
augments.push(
  makeAugmentData("ret note a", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
  ]),
);

// b
augments.push(
  makeAugmentData("ret note b", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.0075),
    makeStat(StatTypes.RNG_POT, 1.0075),
  ]),
);

// c
augments.push(
  makeAugmentData("ret note c", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.MEL_POT, 1.0075),
    makeStat(StatTypes.TEC_POT, 1.0075),
  ]),
);

// d
augments.push(
  makeAugmentData("ret note d", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.RNG_POT, 1.0075),
    makeStat(StatTypes.TEC_POT, 1.0075),
  ]),
);
// combat
// alno
augments.push(
  makeAugmentData(`alno note`, 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 3),
    makeStat(StatTypes.FLOOR_POT, 1.02),
  ]),
);

// maqea
augments.push(
  makeAugmentData(`maqea note`, 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatShorthands.POT, 1.0125),
  ]),
);

export default augments;

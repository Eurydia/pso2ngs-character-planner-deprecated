import {
  makeStat,
  makeManyStatsWithSameAmount,
  StatTypes,
  OFFENSIVE_POT,
} from "../../stats";
import { DOUBLE_STATS, makeAugment } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.NOTE;
const CONFLICT: AugmentGroups[] = [AugmentGroups.NOTE];
let augments: AugmentData[] = [];
// --------------------------------------

const suffixes = ["b", "c", "d"];

// --------------------------------------
// ael exploration
// note a
augments.push(
  makeAugment("ael note a", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 5),
    makeStat(StatTypes.PP, 3),
  ]),
);
//  note b, c, d
suffixes.forEach((suffix, i) => {
  const stats = makeManyStatsWithSameAmount(DOUBLE_STATS[i], 1.01);

  augments.push(
    makeAugment(`ael note ${suffix}`, 0, GROUP, CONFLICT, [
      makeStat(StatTypes.BP, 4),
      ...stats,
    ]),
  );
});

// --------------------------------------
// ael combat
// magnus, lab, resola
const ael_combat_names = ["magnus", "lab", "resola"];
ael_combat_names.forEach((name, i) => {
  const stat = makeStat(OFFENSIVE_POT[i], 10.15);

  augments.push(
    makeAugment(`${name} note`, 0, GROUP, CONFLICT, [
      makeStat(StatTypes.BP, 5),
      stat,
    ]),
  );
});

// --------------------------------------
// ret exploration
// note a
augments.push(
  makeAugment("ret note a", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
  ]),
);
// note b, c, d
suffixes.forEach((suffix, i) => {
  const stats = makeManyStatsWithSameAmount(DOUBLE_STATS[i], 1.0075);

  augments.push(
    makeAugment(`ret note ${suffix}`, 0, GROUP, CONFLICT, [
      makeStat(StatTypes.BP, 4),
      ...stats,
    ]),
  );
});

// --------------------------------------
// ret combat
// alno
augments.push(
  makeAugment(`alno note`, 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 3),
    makeStat(StatTypes.FLOOR_POT, 1.02),
  ]),
);
// maqea
augments.push(
  makeAugment(`maqea note`, 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 5),
    makeStat(StatTypes.POT, 1.0125),
  ]),
);

export default augments;

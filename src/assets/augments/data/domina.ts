import { makeStat, StatTypes } from "../../stats";
import { makeAugment } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DOMINA;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DOMINA];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// ael
augments.push(
  makeAugment("ael domina", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 8),
    makeStat(StatTypes.HP, 5),
    makeStat(StatTypes.PP, 3),
    makeStat(StatTypes.POT, 1.015),
  ]),
);

// --------------------------------------
// ret
augments.push(
  makeAugment("ret domina", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 8),
    makeStat(StatTypes.HP, 15),
    makeStat(StatTypes.POT, 1.015),
  ]),
);

export default augments;

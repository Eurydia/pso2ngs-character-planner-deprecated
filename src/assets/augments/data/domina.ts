import { makeStat, StatShorthands, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.DOMINA;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DOMINA];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// ael
augments.push(
  makeAugmentData("ael domina", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 8),
    makeStat(StatTypes.HP, 5),
    makeStat(StatTypes.PP, 3),
    makeStat(StatShorthands.POT, 1.015),
  ]),
);

// --------------------------------------
// ret
augments.push(
  makeAugmentData("ret domina", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 8),
    makeStat(StatTypes.HP, 15),
    makeStat(StatShorthands.POT, 1.015),
  ]),
);

export default augments;

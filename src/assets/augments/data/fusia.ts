import { makeStat, StatTypes } from "../../stats";
import { makeAugment } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.FUSIA;
const CONFLICT = [AugmentGroups.FUSIA];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// fusia
augments.push(
  makeAugment("megas fusia", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatTypes.POT, 1.01),
  ]),
);

export default augments;

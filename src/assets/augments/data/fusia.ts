import { makeStat, StatShorthands, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.FUSIA;
const CONFLICT = [AugmentGroups.FUSIA];

let data: AugmentData[] = [];

// --------------------------------------
// fusia
data.push(
  makeAugmentData("megas fusia", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 4),
    makeStat(StatShorthands.POT, 1.01),
  ]),
);

export default data;

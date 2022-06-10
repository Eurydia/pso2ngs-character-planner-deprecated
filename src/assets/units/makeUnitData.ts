import {
  Conditional,
  makeStatPayload,
  Stat,
  StatTypes,
} from "../stats";
import { UnitData } from "./types";

interface Suffix {
  name: string;
  stat_types: StatTypes[];
}
const makeSuffix = (
  name: string,
  stat_types: StatTypes[],
): Suffix => {
  return Object.freeze({
    name,
    stat_types,
  });
};
export const SUFFIXES = Object.freeze([
  makeSuffix("arga", [StatTypes.MEL_POT, StatTypes.RNG_POT]),
  makeSuffix("belta", [StatTypes.RNG_POT, StatTypes.TEC_POT]),
  makeSuffix("sheza", [StatTypes.MEL_POT, StatTypes.TEC_POT]),
]);

export const makeUnitData = (
  name: string,
  rarity: number,
  level_required: number,
  base_defense: number,
  stats: Stat[],
  conditionals: Conditional[] = [],
): UnitData => {
  const payload = makeStatPayload(stats, conditionals);
  return Object.freeze({
    name,
    rarity,
    level_required,
    base_defense,
    payload,
  });
};

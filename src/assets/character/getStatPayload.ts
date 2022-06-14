import {
  Conditional,
  makeStat,
  makeStatPayload,
  Stat,
  StatPayload,
  StatTypes,
} from "../stats";
import { ClassData } from "./types";

const getHPAmount = (base_hp: number, level: number): number => {
  return base_hp * 1.1 ** ((level - 1) / 5);
};

const getATKAmount = (base_attack: number, level: number): number => {
  return base_attack * 1.1 ** ((level - 1) / 5) + (base_attack - 450);
};

const getDEFAmount = (
  base_defense: number,
  level: number,
): number => {
  return 300 * 1.08 ** ((level - 1) / 5) + (base_defense - 300);
};

export const getStatPayload = (
  character_class: ClassData,
  level: number,
): StatPayload => {
  const hp = makeStat(
    StatTypes.HP,
    getHPAmount(character_class.base_hp, level),
  );
  const pp = makeStat(StatTypes.PP, character_class.base_pp);
  const atk = makeStat(
    StatTypes.ATK,
    getATKAmount(character_class.base_attack, level),
  );
  const def = makeStat(
    StatTypes.DEF,
    getDEFAmount(character_class.base_defense, level),
  );
  const crit_chance = makeStat(StatTypes.CRIT_CHANCE, 1.05);

  let stats: Stat[] = [hp, pp, atk, def, crit_chance];
  let conditionals: Conditional[] = [];
  return makeStatPayload(stats, conditionals);
};

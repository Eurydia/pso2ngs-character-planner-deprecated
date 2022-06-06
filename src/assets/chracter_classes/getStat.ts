import { makeStat, Stat, StatTypes } from "../stats";
import { CharacterClassData } from "./types";

const getHPAmount = (base_hp: number, level: number): number => {
  return base_hp * 1.1 ** ((level - 1) / 5);
};

const getAttackAmount = (
  base_attack: number,
  level: number,
): number => {
  return base_attack * 1.1 ** ((level - 1) / 5) + (base_attack - 450);
};

const getDefenseAmount = (
  base_defense: number,
  level: number,
): number => {
  return 300 * 1.08 ** ((level - 1) / 5) + (base_defense - 300);
};

export const getStatsFromClass = (
  character_class: CharacterClassData,
  level: number,
): Stat[] => {
  const hp = makeStat(
    StatTypes.HP,
    getHPAmount(character_class.base_hp, level),
  );
  const attack = makeStat(
    StatTypes.ATK,
    getAttackAmount(character_class.base_attack, level),
  );
  const defense = makeStat(
    StatTypes.DEF,
    getDefenseAmount(character_class.base_defense, level),
  );
  return [hp, attack, defense];
};

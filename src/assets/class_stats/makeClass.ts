import { Class, ClassNames, Skill } from "../../types";

export const makeClassSkill = (
  name: string,
  max_level: number,
): Skill => {
  return {
    name,
    max_level,
  };
};

export const makeClass = (
  name: ClassNames,
  base_atk: number,
  base_def: number,
  base_hp: number,
  non_combat_passive: Skill[],
): Class => {
  return {
    name,
    base_atk,
    base_def,
    base_hp,
    base_pp: 100,
  };
};

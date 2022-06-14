import { ClassData } from "./types";

// export const makeClassSkill = (
//   name: string,
//   max_level: number,
// ): Skill => {
//   return {
//     name,
//     max_level,
//   };
// };

export const makeClassData = (
  name: string,
  base_attack: number,
  base_defense: number,
  base_hp: number,
  base_pp: number = 100,
): ClassData => {
  return {
    name,
    base_attack,
    base_defense,
    base_hp,
    base_pp,
  };
};

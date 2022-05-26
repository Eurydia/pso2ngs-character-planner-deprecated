export enum ClassNames {
  HUNTER = "HUNTER",
  FIGHTER = "FIGHTER",
  RANGER = "RANGER",
  GUNNER = "GUNNER",
  FORCE = "FORCE",
  TECHTER = "TECHTER",
  BRAVER = "BRAVER",
  BOUNCER = "BOUNCER",
}

export type Skill = {
  name: string;
  max_level: number;
};

export type Class = {
  name: ClassNames;
  base_atk: number;
  base_def: number;
  base_hp: number;
  base_pp: number;
  non_damaging_skills: Skill[];
};

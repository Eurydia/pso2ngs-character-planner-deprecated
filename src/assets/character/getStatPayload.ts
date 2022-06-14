import {
  Conditional,
  makeStat,
  makeStatPayload,
  Stat,
  StatPayload,
  StatTypes,
} from "../stats";
import { Character, ClassData } from "./types";

export const getCharHPAmount = (
  base_hp: number,
  level: number,
): number => {
  return Math.round(base_hp * 1.05 ** ((level - 1) / 5));
};

export const getCharATKAmount = (
  base_attack: number,
  level: number,
): number => {
  return (
    Math.round(450 * 1.1 ** ((level - 1) / 5)) + (base_attack - 450)
  );
};

export const getCharDEFAmount = (
  base_defense: number,
  level: number,
): number => {
  return (
    Math.round(300 * 1.08 ** ((level - 1) / 5)) + (base_defense - 300)
  );
};

export const getCharacterStatPayload = ({
  level,
  main_class,
  main_sp,
  sub_sp,
}: Character): StatPayload => {
  const bp_amount = (main_sp + sub_sp) * 3;
  const pp_amount = main_class.base_pp;
  const atk_amount = getCharATKAmount(main_class.base_attack, level);
  const hp_amount = getCharHPAmount(main_class.base_hp, level);
  const def_amount = getCharDEFAmount(main_class.base_defense, level);

  const bp = makeStat(StatTypes.BP, bp_amount);
  const hp = makeStat(StatTypes.HP, hp_amount);
  const pp = makeStat(StatTypes.PP, pp_amount);
  const atk = makeStat(StatTypes.ATK, atk_amount);
  const def = makeStat(StatTypes.DEF, def_amount);
  const crit_chance = makeStat(StatTypes.CRIT_CHANCE, 1.05);

  let stats: Stat[] = [bp, hp, pp, atk, def, crit_chance];
  let conditionals: Conditional[] = [];
  return makeStatPayload(stats, conditionals);
};
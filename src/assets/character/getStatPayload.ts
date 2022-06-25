import {
  Conditional,
  makeStat,
  makeStatPayload,
  Stat,
  StatPayload,
  StatTypes,
} from "../stats";
import { Character } from "./types";

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
  const hp_amount = getCharHPAmount(main_class.base_hp, level);
  const hp = makeStat(StatTypes.HP, hp_amount);

  const pp_amount = main_class.base_pp;
  const pp = makeStat(StatTypes.PP, pp_amount);

  const atk_amount = getCharATKAmount(main_class.base_attack, level);
  const atk = makeStat(StatTypes.ATK, atk_amount);

  const def_amount = getCharDEFAmount(main_class.base_defense, level);
  const def = makeStat(StatTypes.DEF, def_amount);

  const bp_from_atk = atk_amount;
  const bp_from_def = Math.floor(def_amount / 2);
  const bp_from_sp = (main_sp + sub_sp) * 3;
  const bp = makeStat(
    StatTypes.BP,
    bp_from_atk + bp_from_def + bp_from_sp,
  );

  let stats: Stat[] = [bp, hp, pp, atk, def];
  let conditionals: Conditional[] = [];
  return makeStatPayload(stats, conditionals);
};

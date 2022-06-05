import { Stat } from "../stats";

export enum WeaponSeries {
  RECYCLER_UNIT = 0,
  INDOMITABLE_UNIT,
  DEFENSEIVE_FORMATION,
  OFFENSIVE_FORMATION,
  VALOROUS_UNIT,
  DYNAMO_UNIT,
  MUSTERED_MIGHT_UNIT,
  BASTION_UNIT,
  MEDITATION_UNIT,
  BERSERK_UNIT,
  SOULSPRING_UNIT,
  FORTRESS_UNIT,
  REINVIGORATING_UNIT,
  FOCUSED_UNIT,
  FIGHTING_SPIRIT_UNIT,
  VIGOROUS_UNIT,
  EXPLOSIVE_UNIT,
  HARMONIOUS_UNIT,
  IMBUED_UNIT,
  VIRTUOSO_UNIT,
  UNASSAILABLE_UNIT,
}

export type Weapon = Readonly<{
  name: string;
  rarity: number;
  level_required: number;
  series: WeaponSeries;
  base_attack: number;
  stats: Stat[];
}>;

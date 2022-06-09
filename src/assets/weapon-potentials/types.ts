import { Conditional, Stat } from "../stats";

export enum WeaponSeries {
  RECYCLER_UNIT = "RECYCLER_UNIT",
  INDOMITABLE_UNIT = "INDOMITABLE_UNIT",
  DEFENSEIVE_FORMATION = "DEFENSEIVE_FORMATION",
  OFFENSIVE_FORMATION = "OFFENSIVE_FORMATION",
  VALOROUS_UNIT = "VALOROUS_UNIT",
  DYNAMO_UNIT = "DYNAMO_UNIT",
  MUSTERED_MIGHT_UNIT = "MUSTERED_MIGHT_UNIT",
  BASTION_UNIT = "BASTION_UNIT",
  MEDITATION_UNIT = "MEDITATION_UNIT",
  BERSERK_UNIT = "BERSERK_UNIT",
  SOULSPRING_UNIT = "SOULSPRING_UNIT",
  FORTRESS_UNIT = "FORTRESS_UNIT",
  REINVIGORATING_UNIT = "REINVIGORATING_UNIT",
  FOCUSED_UNIT = "FOCUSED_UNIT",
  FIGHTING_SPIRIT_UNIT = "FIGHTING_SPIRIT_UNIT",
  VIGOROUS_UNIT = "VIGOROUS_UNIT",
  EXPLOSIVE_UNIT = "EXPLOSIVE_UNIT",
  HARMONIOUS_UNIT = "HARMONIOUS_UNIT",
  IMBUED_UNIT = "IMBUED_UNIT",
  VIRTUOSO_UNIT = "VIRTUOSO_UNIT",
  UNASSAILABLE_UNIT = "UNASSAILABLE_UNIT",
}

export interface PotentialData {
  stats: Stat[];
  conditionals: Conditional[];
}

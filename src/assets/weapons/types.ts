import { AugmentData, AugmentDataSignature } from "../augments";
import { FixaData, FixaDataSignature } from "../fixas";
import { StatPayload } from "../stats";

export enum PotentialSeries {
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

export type PotentialData = {
  name: string | PotentialSeries;
  getPayload: (pot_level: number) => StatPayload;
};

export type GrowthRate = {
  enhancement: number;
  bonus: number;
};

/**
 * Store the actual data of each weapon.
 * Should be immutable.
 */
export type WeaponData = Readonly<{
  name: string;
  rarity: number;
  level_required: number;
  base_attack: number;
  payload: StatPayload;
  potential: PotentialData;
}>;
/**
 * If you know the name of a weapon,
 * you should be able to know about everything else.
 */
export type WeaponDataSignature = Pick<WeaponData, "name">;

/**
 * What a weapon looks like when fully combined
 * with other aspects.
 */
export type Weapon = {
  weapon: WeaponData | null;
  enhancement: number;
  fixa: FixaData | null;
  potential_level: number;
  augments: (AugmentData | null)[];
};
export type WeaponSignature = {
  weapon: WeaponDataSignature | null;
  enhancement: number;
  fixa: FixaDataSignature | null;
  potential_level: number;
  augments: (AugmentDataSignature | null)[];
};

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
  ELUSIVE_UNIT = "ELUSIVE_UNIT",
  TRAMPLE_UNIT = "TRAMPLE_UNIT",
  REVOLUTIONARY_UNIT = "REVOLUTIONARY_UNIT",
  DESPERATION_UNIT = "DESPERATION_UNIT",
  STACCATO_UNIT = "STACCATO_UNIT",
  ILLUSORY_UNIT = "ILLUSORY_UNIT",
  CITADEL_UNIT = "CITADEL_UNIT",
  PURSUIT_UNIT = "PURSUIT_UNIT",
  GYRATING_UNIT = "GYRATING_UNIT",
  TEMPERED_FORM = "TEMPERED_FORM",
}

export type PotentialData = {
  name: string | PotentialSeries;
  getPayload: (pot_level: number) => StatPayload;
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
export type WeaponItem = {
  weapon: WeaponData | null;
  enhancement: number;
  fixa: FixaData | null;
  potential_level: number;
  augments: (AugmentData | null)[];
};

export type WeaponItemSignature = {
  weapon: WeaponDataSignature | null;
  enhancement: number;
  fixa: FixaDataSignature | null;
  potential_level: number;
  augments: (AugmentDataSignature | null)[];
};

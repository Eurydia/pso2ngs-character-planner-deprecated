import { AugmentData, AugmentDataSignature } from "../augments";
import { FixaData, FixaDataSignature } from "../fixas";
import { Conditional, Stat } from "../stats";
import { WeaponSeries, PotentialData } from "../potentials";

/**
 * If you know the name of a weapon,
 * you should be able to know about everything else.
 */
export interface WeaponDataSignature {
  name: string;
}

/**
 * Store the actual data of each weapon.
 * Should be immutable.
 */
export type WeaponData = Readonly<
  WeaponDataSignature & {
    rarity: number;
    level_required: number;
    base_attack: number;
    stats: Stat[];
    potential: PotentialData;
  }
>;

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

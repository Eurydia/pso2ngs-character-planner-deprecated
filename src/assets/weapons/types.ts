import { AugmentData, AugmentDataSignature } from "../augments";
import { FixaData, FixaDataSignature } from "../fixas";
import { Stat } from "../stats";
import { WeaponSeries } from "../weapon-potentials";

export type WeaponDataSignature = {
  name: string;
  series: WeaponSeries;
};

export type WeaponData = Readonly<
  WeaponDataSignature & {
    rarity: number;
    level_required: number;
    base_attack: number;
    stats: Stat[];
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

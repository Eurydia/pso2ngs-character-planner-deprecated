import { AugmentData } from "../assets/augments";
import { Stat } from "./stat";

export enum Elements {
  NONE = "no element",
  FIRE = "fire",
  ICE = "ice",
  LIGHTNING = "lightning",
  WIND = "wind",
  LIGHT = "light",
  DARK = "dark",
}

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

export enum Rarity {
  ONE = 1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
}

export type Fixa = {
  name: string;
  level: number;
  stats: Stat[];
};

export type Equipment = {
  name: string;
  level_required: number;
  stats: Stat[];
  rarity: Rarity;
};

export type Weapon = Equipment & {
  element: Elements;
  potential_series: WeaponSeries;
};

export type Unit = Equipment;

export type CompleteEquipment<T extends Weapon | Unit> = {
  equipment: T | null;
  enhancement: number;
  fixa: Fixa | null;
  augments: (AugmentData | null)[];
  potential_level?: number;
};

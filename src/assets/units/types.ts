import { AugmentData } from "../augments";
import { Stat } from "../stats";
import { FixaData } from "../fixas";

export type UnitData = Readonly<{
  name: string;
  rarity: number;
  level_required: number;
  base_defense: number;
  stats: Stat[];
}>;

export type Unit = {
  unit: UnitData;
  enhancement: number;
  fixa: FixaData | null;
  augments: (AugmentData | null)[];
};

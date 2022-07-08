import { AugmentData, AugmentDataSignature } from "../augments";
import { StatPayload } from "../stats";
import { FixaData, FixaDataSignature } from "../fixas";

export type UnitData = Readonly<{
  name: string;
  rarity: number;
  level_required: number;
  base_defense: number;
  payload: StatPayload;
}>;

export type UnitDataSignature = Pick<UnitData, "name">;

export type Unit = {
  unit: UnitData | null;
  fixa: FixaData | null;
  enhancement: number;
  augments: (AugmentData | null)[];
};
export type UnitSignature = {
  unit: UnitDataSignature | null;
  fixa: FixaDataSignature | null;
  enhancement: number;
  augments: (AugmentDataSignature | null)[];
};

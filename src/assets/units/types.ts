import { AugmentData } from "../augments";
import { StatPayload } from "../stats";
import { FixaData } from "../fixas";

export interface UnitDataSignature {
  name: string;
}

export type UnitData = Readonly<
  UnitDataSignature & {
    rarity: number;
    level_required: number;
    base_defense: number;
    payload: StatPayload;
  }
>;

export type Unit = {
  unit: UnitData;
  enhancement: number;
  fixa: FixaData | null;
  augments: (AugmentData | null)[];
};

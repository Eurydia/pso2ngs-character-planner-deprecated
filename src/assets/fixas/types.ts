import { StatPayload } from "../stats";

export enum FixaTypes {
  WEAPON = "weapon",
  UNIT = "unit",
}

export interface FixaDataSignature {
  name: string;
  level: number;
}

export interface FixaData extends FixaDataSignature {
  fixa_type: FixaTypes;
  payload: StatPayload;
}

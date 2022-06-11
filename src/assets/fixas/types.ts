import { StatPayload } from "../stats";

export enum FixaTypes {
  WEAPON = "WEAPON",
  UNIT = "UNIT",
}

export interface FixaDataSignature {
  name: string;
  level: number;
}

export type FixaData = Readonly<
  FixaDataSignature & {
    fixa_type: FixaTypes;
    payload: StatPayload;
  }
>;

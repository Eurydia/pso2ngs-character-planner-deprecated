import { Stat, StatPayload } from "../stats";

export enum FixaTypes {
  WEAPON = "WEAPON",
  UNIT = "UNIT",
}

export type FixaDataSignature = {
  name: string;
  level: number;
};

export type FixaData = Readonly<
  FixaDataSignature & {
    fixa_type: FixaTypes;
    payload: StatPayload;
  }
>;

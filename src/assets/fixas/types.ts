import { StatPayload } from "../stats";

export enum FixaTypes {
  WEAPON = "WEAPON",
  UNIT = "UNIT",
}

export type FixaData = Readonly<{
  name: string;
  level: number;
  fixa_type: FixaTypes;
  payload: StatPayload;
}>;

export type FixaDataSignature = Pick<FixaData, "name" | "level">;

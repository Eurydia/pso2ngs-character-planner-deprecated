import { Stat } from "../stats";

export enum FixaTypes {
  WEAPON = "WEAPON",
  UNIT = "UNIT",
}

export type FixaData = Readonly<{
  fixa_type: FixaTypes;
  name: string;
  level: number;
  stats: Stat[];
}>;

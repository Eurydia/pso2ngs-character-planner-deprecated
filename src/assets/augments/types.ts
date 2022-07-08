import { StatPayload } from "../stats";

export enum AugmentGroups {
  BASIC = "BASIC",
  FUSED = "FUSED",
  DUALBLE = "DUALBLE",
  WARD = "WARD",
  SOUL = "SOUL",
  NOTE = "NOTE",
  DOMINA = "DOMINA",
  SECRETA = "SECRETA",
  DREAD = "DREAD",
  GIGAS = "GIGAS",
  ELEMENTAL = "ELEMENTAL",
  FUSIA = "FUSIA",
  ADDI = "ADDI",
  TRIA = "TRIA",
  DECOLD = "DECOLD",
  S = "S",
}

export type AugmentData = Readonly<{
  name: string;
  level: number;
  isSType: boolean;
  group: AugmentGroups;
  conflict: AugmentGroups[];
  payload: StatPayload;
}>;

export type AugmentDataSignature = Pick<
  AugmentData,
  "name" | "level" | "isSType"
>;

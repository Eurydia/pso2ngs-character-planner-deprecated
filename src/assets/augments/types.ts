import { StatPayload } from "../stats";

export enum AugmentGroups {
  BASIC = "basic",
  FUSED = "fused",
  DUALBLE = "dualble",
  WARD = "ward",
  SOUL = "soul",
  NOTE = "note",
  DOMINA = "domina",
  SECRETA = "secreta",
  DREAD = "dread",
  GIGAS = "gigas",
  EXPLOIT = "exploit",
  FUSIA = "fusia",
  ADDI = "addi",
  TRIA = "tria",
  DECOLD = "decold",
  // unused
  S = "s",
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

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

export interface AugmentDataSignature {
  name: string;
  level: number;
  isSType: boolean;
}

export interface AugmentData extends AugmentDataSignature {
  group: AugmentGroups;
  conflict: AugmentGroups[];
  payload: StatPayload;
}

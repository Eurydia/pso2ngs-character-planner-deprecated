import { Conditional, Stat, StatPayload } from "../stats";

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
  S = "S",
}

export type AugmentDataSignature = {
  name: string;
  level: number;
  isSType: boolean;
};

export type AugmentData = Readonly<
  AugmentDataSignature & {
    group: AugmentGroups;
    conflict: AugmentGroups[];
    payload: StatPayload;
  }
>;

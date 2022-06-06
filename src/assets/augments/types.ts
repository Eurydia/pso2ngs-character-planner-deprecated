import { Conditional, Stat } from "../stats";

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

export type AugmentData = {
  name: string;
  level: number;
  group: AugmentGroups;
  conflict: AugmentGroups[];
  stats: Stat[];
  conditionals: Conditional[];
  isSType: boolean;
};

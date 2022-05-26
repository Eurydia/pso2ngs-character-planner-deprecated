import { Conditional, Stat } from "./stat";

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
}

export type Augment = {
    name: string;
    level: number;
    stats: Stat[];
    group: AugmentGroups;
    conflict: AugmentGroups[];
    conditionals: Conditional[];
};

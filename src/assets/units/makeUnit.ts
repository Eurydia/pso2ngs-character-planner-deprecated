import { Stat, StatTypes, Unit, Rarity } from "../../types";

export const makeUnit = (
    name: string,
    lvl_required: number,
    stats_without_bp: Stat[],
    rarity: Rarity,
): Unit => {
    return {
        name,
        level_required: lvl_required,
        stats: stats_without_bp,
        rarity,
    };
};

export const SUFFIXES = [
    { name: "arga", stats: [StatTypes.MEL_POT, StatTypes.RNG_POT] },
    {
        name: "belta",
        stats: [StatTypes.RNG_POT, StatTypes.TEC_POT],
    },
    {
        name: "sheza",
        stats: [StatTypes.MEL_POT, StatTypes.TEC_POT],
    },
];

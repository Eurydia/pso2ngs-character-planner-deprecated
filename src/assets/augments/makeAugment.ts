import {
    Augment,
    AugmentGroups,
    Conditional,
    Stat,
    StatTypes,
    StatWithManyAmounts,
} from "../../types";
import { makeStat } from "../makeStat";

export const makeAugment = (
    name: string,
    level: number,
    stats: Stat[],
    group: AugmentGroups,
    conflict: AugmentGroups[],
    conditional: Conditional[] = [],
): Augment => {
    return {
        name,
        level,
        stats,
        group,
        conflict,
        conditionals: conditional,
    };
};

export const makeManyAugments = (
    name: string,
    level: number,
    stats_with_many_amounts: StatWithManyAmounts[],
    group: AugmentGroups,
    conflict: AugmentGroups[],
    conditional: Conditional[] = [],
): Augment[] => {
    let result: Augment[] = [];
    for (let i = 0; i < level; i++) {
        let stats: Stat[] = [];
        for (const stat_with_many_amounts of stats_with_many_amounts) {
            stats.push(
                makeStat(
                    stat_with_many_amounts.stat_type,
                    stat_with_many_amounts.many_amount[i],
                ),
            );
        }
        result.push(
            makeAugment(
                name,
                i + 1,
                stats,
                group,
                conflict,
                conditional,
            ),
        );
    }
    return result;
};

export const DOUBLE_STATS = [
    [StatTypes.MEL_POT, StatTypes.RNG_POT],
    [StatTypes.MEL_POT, StatTypes.TEC_POT],
    [StatTypes.RNG_POT, StatTypes.TEC_POT],
];

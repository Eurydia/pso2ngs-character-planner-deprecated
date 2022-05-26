import {
    Augment,
    AugmentGroups,
    Stat,
    StatTypes,
} from "../../../types";
import { OFFENSIVE_POT } from "../../../utility";
import {
    makeStat,
    makeManyStatsWithSameAmount,
} from "../../makeStat";
import { makeAugment } from "../makeAugment";

// --------------------------------------
const GROUP = AugmentGroups.TRIA;
const CONFLICT = [AugmentGroups.TRIA];
let augments: Augment[] = [];
// --------------------------------------

const p_names = ["mel", "ra", "tech"];
const p_stats = makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.0225);

const s_names = ["sta", "spi", "deft", "gua"];
const s_stats: Stat[] = [
    makeStat(StatTypes.HP, -5),
    makeStat(StatTypes.PP, -3),
    makeStat(StatTypes.FLOOR_POT, 0.99),
    makeStat(StatTypes.DMG_RES, 0.99),
];

p_names.forEach((p_name, i) => {
    const p_stat = p_stats[i];
    // sta, spi, deft, gua

    s_names.forEach((s_name, j) => {
        const s_stat = s_stats[j];

        let stats: Stat[] = [p_stat, s_stat];
        if (j < 2) {
            stats = [s_stat, p_stat];
        }

        augments.push(
            makeAugment(
                `tria ${s_name}ro${p_name}`,
                0,
                [makeStat(StatTypes.BP, 6), ...stats],
                GROUP,
                CONFLICT,
            ),
        );
    });
});

export default augments;

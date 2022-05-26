import {
    Augment,
    AugmentGroups,
    Stat,
    StatTypes,
} from "../../../types";
import { AILMENT_RES, OFFENSIVE_POT } from "../../../utility";
import {
    makeStat,
    makeManyStatsWithSameAmount,
} from "../../makeStat";
import { makeAugment } from "../makeAugment";
// --------------------------------------
const GROUP = AugmentGroups.ADDI;
const CONFLICT = [AugmentGroups.ADDI];
let augments: Augment[] = [];
// --------------------------------------

const p_names = ["mel", "ra", "tech"];
const p_stats = makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.025);

const s_names = ["sta", "spi", "deft", "gua"];
const s_stats: Stat[] = [
    makeStat(StatTypes.HP, 20),
    makeStat(StatTypes.PP, 6),
    makeStat(StatTypes.FLOOR_POT, 1.25),
    makeStat(StatTypes.DMG_RES, 1.25),
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
                `addi ${s_name}${p_name}`,
                0,
                [makeStat(StatTypes.BP, 10), ...stats],
                GROUP,
                CONFLICT,
            ),
        );
    });

    // staspi
    augments.push(
        makeAugment(
            `add staspi${p_name}`,
            0,
            [
                makeStat(StatTypes.BP, 10),
                makeStat(StatTypes.HP, 10),
                makeStat(StatTypes.PP, 3),
                p_stat,
            ],
            GROUP,
            CONFLICT,
        ),
    );
    // ward
    augments.push(
        makeAugment(
            `addi ward${p_name}`,
            0,
            [
                makeStat(StatTypes.BP, 10),
                p_stat,
                ...makeManyStatsWithSameAmount(AILMENT_RES, 1.2),
            ],
            GROUP,
            CONFLICT,
        ),
    );
});
export default augments;

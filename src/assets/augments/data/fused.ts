import { OFFENSIVE_POT } from "../../../utility";
import {
  makeStat,
  makeManyStatsWithSameAmount,
  Stat,
  StatTypes,
} from "../../stats";
import { makeAugment } from "../makeAugment";
import { Augment, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.FUSED;
const CONFLICT = [AugmentGroups.FUSED, AugmentGroups.BASIC];
let augments: Augment[] = [];
// --------------------------------------

const p_names = ["might", "precision", "technique"];
const p_stats = makeManyStatsWithSameAmount(OFFENSIVE_POT, 1.02);

const s_names = ["sta", "spi", "deft", "gua"];
const s_stats: Stat[] = [
  makeStat(StatTypes.HP, 15),
  makeStat(StatTypes.PP, 5),
  makeStat(StatTypes.FLOOR_POT, 1.02),
  makeStat(StatTypes.DMG_RES, 1.02),
];
p_names.forEach((p_name, i) => {
  const p_stat = p_stats[i];

  // --------------------------------------
  // sta, spi, deft, gua
  s_names.forEach((s_name, j) => {
    const s_stat = s_stats[j];
    const stats = j < 2 ? [s_stat, p_stat] : [p_stat, s_stat]; // order the stats

    augments.push(
      makeAugment(`${s_name} ${p_name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 8),
        ...stats,
      ]),
    );
  });
});

export default augments;

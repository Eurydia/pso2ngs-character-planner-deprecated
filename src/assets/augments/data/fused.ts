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
  // sta, spi, deft, gua
  s_names.forEach((s_name, j) => {
    const s_stat = s_stats[j];

    let stats: Stat[] = [p_stat, s_stat];
    if (j < 2) {
      stats = [s_stat, p_stat];
    }

    augments.push(
      makeAugment(
        `${s_name} ${p_name}`,
        0,
        [makeStat(StatTypes.BP, 8), ...stats],
        GROUP,
        CONFLICT,
      ),
    );
  });
});
export default augments;

import { OFFENSIVE_POT } from "../../../utility";
import { makeStat, Stat, StatTypes } from "../../stats";
import { makeAugment } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.TRIA;
const CONFLICT = [AugmentGroups.TRIA];
let augments: AugmentData[] = [];
// --------------------------------------

const p_names = ["mel", "ra", "tech"];

const s_names = ["sta", "spi", "deft", "gua"];
const s_stats: Stat[] = [
  makeStat(StatTypes.HP, -5),
  makeStat(StatTypes.PP, -3),
  makeStat(StatTypes.FLOOR_POT, 0.99),
  makeStat(StatTypes.DMG_RES, 0.99),
];

p_names.forEach((p_name, i) => {
  const p_stat = makeStat(OFFENSIVE_POT[i], 1.0225);

  // --------------------------------------
  // sta, spi, deft, gua
  s_names.forEach((s_name, j) => {
    const s_stat = s_stats[j];
    const stats = j < 2 ? [s_stat, p_stat] : [p_stat, s_stat]; // order stats

    augments.push(
      makeAugment(`tria ${s_name}ro${p_name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 6),
        ...stats,
      ]),
    );
  });
});

export default augments;

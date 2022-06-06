import { makeStat, StatTypes } from "../../stats";
import { OFFENSIVE_POT } from "../../../utility";
import { makeAugment } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";
// --------------------------------------
const GROUP = AugmentGroups.ADDI;
const CONFLICT = [AugmentGroups.ADDI];
let augments: AugmentData[] = [];
// --------------------------------------

const p_names = ["mel", "ra", "tech"];

const s_names = ["sta", "spi", "deft", "gua"];
const s_stats = [
  makeStat(StatTypes.HP, 20),
  makeStat(StatTypes.PP, 6),
  makeStat(StatTypes.FLOOR_POT, 1.25),
  makeStat(StatTypes.DMG_RES, 1.25),
];

p_names.forEach((p_name, i) => {
  const p_stat = makeStat(OFFENSIVE_POT[i], 1.025);

  // --------------------------------------
  // sta, spi, deft, gua
  s_names.forEach((s_name, j) => {
    const s_stat = s_stats[j];
    const stats = j < 2 ? [s_stat, p_stat] : [p_stat, s_stat]; // order the stats correctly

    augments.push(
      makeAugment(`addi ${s_name}${p_name}`, 0, GROUP, CONFLICT, [
        makeStat(StatTypes.BP, 10),
        ...stats,
      ]),
    );
  });

  // --------------------------------------
  // staspi
  augments.push(
    makeAugment(`add staspi${p_name}`, 0, GROUP, CONFLICT, [
      makeStat(StatTypes.BP, 10),
      makeStat(StatTypes.HP, 10),
      makeStat(StatTypes.PP, 3),
      p_stat,
    ]),
  );

  // --------------------------------------
  // ward
  augments.push(
    makeAugment(`addi ward${p_name}`, 0, GROUP, CONFLICT, [
      makeStat(StatTypes.BP, 10),
      p_stat,
      makeStat(StatTypes.AILMENT_RES, 1.2),
    ]),
  );
});

export default augments;

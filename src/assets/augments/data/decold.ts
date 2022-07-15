import { StatTypes, expandPot, makeStat } from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.DECOLD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.DECOLD];

let data: AugmentData[] = [];

// --------------------------------------
// standard
(() => {
  const bps = [1, 3, 5];
  const low_temp_resist = [1.05, 1.15, 1.25];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(
        StatTypes.LOW_TEMP_RESIST,
        low_temp_resist[level_index],
      ),
    ];
    data.push(
      makeAugmentData(
        "decold standard",
        level,
        GROUP,
        CONFLICT,
        stats,
      ),
    );
  });
})();

// --------------------------------------
// might | precicion | technique
(() => {
  const pot_type = expandPot();

  const names = ["might", "precision", "technique"];
  names.forEach((name, pot_type_index) => {
    const stats = [
      makeStat(StatTypes.BP, 9),
      makeStat(pot_type[pot_type_index], 1.025),
      makeStat(StatTypes.LOW_TEMP_RESIST, 1.025),
    ];
    data.push(
      makeAugmentData(`decold ${name}`, 0, GROUP, CONFLICT, stats),
    );
  });
})();

export default data;

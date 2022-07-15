import {
  StatTypes,
  expandAilmentRes,
  makeStat,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.WARD;
const CONFLICT: AugmentGroups[] = [AugmentGroups.WARD];

let data: AugmentData[] = [];

// --------------------------------------
// ward
(() => {
  const bps = [4, 5, 6];
  const ail_type = expandAilmentRes();
  const ail_res = [1.2, 1.25, 1.3];

  const names = [
    "burn",
    "freeze",
    "shock",
    "blind",
    "panic",
    "poison",
    "pain",
  ];
  names.forEach((name, ail_type_index) => {
    bps.forEach((bp, level_index) => {
      const level = level_index + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(ail_type[ail_type_index], ail_res[level_index]),
      ];
      data.push(
        makeAugmentData(
          `${name} ward`,
          level,
          GROUP,
          CONFLICT,
          stats,
        ),
      );
    });
  });
})();

// --------------------------------------
// sovereign ward
(() => {
  const bps = [6, 8, 10];
  const ailemnt_res = [1.2, 1.25, 1.3];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatShorthands.AILMENT_RES, ailemnt_res[level_index]),
    ];
    data.push(
      makeAugmentData(
        "sovereign ward",
        level,
        GROUP,
        CONFLICT,
        stats,
      ),
    );
  });
})();

export default data;

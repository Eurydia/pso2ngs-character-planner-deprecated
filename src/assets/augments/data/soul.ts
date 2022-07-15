import {
  StatTypes,
  expandPot,
  makeStat,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeData";
import { AugmentData, AugmentGroups } from "../types";

const GROUP = AugmentGroups.SOUL;
const CONFLICT: AugmentGroups[] = [AugmentGroups.SOUL];

let data: AugmentData[] = [];

// --------------------------------------
// alt
(() => {
  const bps = [5, 7, 9];
  const hp = [5, 10, 15];
  const dmg_res = [1.01, 1.02, 1.025];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[level_index]),
      makeStat(StatTypes.DMG_RESIST, dmg_res[level_index]),
    ];
    data.push(
      makeAugmentData("alts soul", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// dolz
(() => {
  const bps = [5, 6, 7];
  const pp = [5, 5, 5];
  const floor_pot = [1.01, 1.02, 1.025];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.PP, pp[level_index]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[level_index]),
    ];
    data.push(
      makeAugmentData("dolz soul", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// form | form machini | form sand
(() => {
  const bps = [6, 8, 9];
  const pot_type = expandPot();
  const pot = [1.02, 1.02, 1.02];
  const dmg_res = [1, 1.02, 1.025];

  const names = ["forms", "forms machini", "forms sand"];
  names.forEach((name, pot_type_index) => {
    bps.forEach((bp, level_index) => {
      const level = level_index + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(pot_type[pot_type_index], pot[level_index]),
        makeStat(StatTypes.DMG_RESIST, dmg_res[level_index]),
      ];
      data.push(
        makeAugmentData(
          `${name} soul`,
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
// daityl | pettas | nex
(() => {
  const bps = [7, 8, 10];
  const pp = [5, 5, 5];
  const pot_type = expandPot();
  const pot = [1.01, 1.02, 1.025];

  const names = ["daityl", "pettas", "nex"];
  names.forEach((name, pot_type_index) => {
    bps.forEach((bp, level_index) => {
      const level = level_index + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(StatTypes.PP, pp[level_index]),
        makeStat(pot_type[pot_type_index], pot[level_index]),
      ];
      data.push(
        makeAugmentData(
          `${name} soul`,
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
// dust | ragras | renus
(() => {
  const bps = [7, 8, 10];
  const hp = [15, 15, 15];
  const pot_type = expandPot();
  const pot = [1.01, 1.02, 1.025];

  const names = ["dust", "ragras", "renus"];
  names.forEach((name, pot_type_index) => {
    bps.forEach((bp, level_index) => {
      const level = level_index + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(StatTypes.HP, hp[level_index]),
        makeStat(pot_type[pot_type_index], pot[level_index]),
      ];
      data.push(
        makeAugmentData(
          `${name} soul`,
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
// eradi
(() => {
  const bps = [7, 8, 10];
  const hp = [10, 10, 10];
  const pp = [4, 4, 4];
  const pot = [1.01, 1.015, 1.02];

  bps.forEach((bp, level_index) => {
    const level = level_index + 1;
    const stats = [
      makeStat(StatTypes.BP, bp),
      makeStat(StatTypes.HP, hp[level_index]),
      makeStat(StatTypes.PP, pp[level_index]),
      makeStat(StatShorthands.POT, pot[level_index]),
    ];
    data.push(
      makeAugmentData("eradi soul", level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// frostyl | crocys | ams
(() => {
  const bps = [7, 8, 10];
  const hp = [10, 10, 10];
  const pp = [3, 3, 3];
  const pot_type = expandPot();
  const pot = [1.01, 1.02, 1.025];

  const names = ["frostyl", "crocys", "ams"];
  names.forEach((name, pot_type_index) => {
    bps.forEach((bp, level_index) => {
      const level = level_index + 1;
      const stats = [
        makeStat(StatTypes.BP, bp),
        makeStat(StatTypes.HP, hp[level_index]),
        makeStat(StatTypes.PP, pp[level_index]),
        makeStat(pot_type[pot_type_index], pot[level_index]),
      ];
      data.push(
        makeAugmentData(
          `${name} soul`,
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
// aglai P | H | X
data.push(
  makeAugmentData("aglai soul p", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.PP, 5),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.RNG_POT, 1.025),
  ]),
);
data.push(
  makeAugmentData("aglai soul h", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 15),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.RNG_POT, 1.025),
  ]),
);
data.push(
  makeAugmentData("aglai soul x", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 3),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.RNG_POT, 1.025),
  ]),
);

// --------------------------------------
// euphroy P | H | X
data.push(
  makeAugmentData("euphroy soul p", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.PP, 5),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);
data.push(
  makeAugmentData("euphroy soul h", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 15),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);
data.push(
  makeAugmentData("euphroy soul x", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 3),
    makeStat(StatTypes.MEL_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);

// --------------------------------------
// thali P | H | X
data.push(
  makeAugmentData("thali soul p", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.PP, 5),
    makeStat(StatTypes.RNG_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);
data.push(
  makeAugmentData("thali soul h", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 15),
    makeStat(StatTypes.RNG_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);
data.push(
  makeAugmentData("thali soul x", 0, GROUP, CONFLICT, [
    makeStat(StatTypes.BP, 11),
    makeStat(StatTypes.HP, 10),
    makeStat(StatTypes.PP, 3),
    makeStat(StatTypes.RNG_POT, 1.025),
    makeStat(StatTypes.TEC_POT, 1.025),
  ]),
);
export default data;

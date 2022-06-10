import { StatTypes, OFFENSIVE_POT, makeStat } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.SOUL;
const CONFLICT: AugmentGroups[] = [AugmentGroups.SOUL];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// alt soul
(() => {
  const bp = [5, 7, 9];
  const hp = [5, 10, 15];
  const dmg_res = [1.01, 1.02, 1.025];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(StatTypes.DMG_RES, dmg_res[i]),
    ];

    augments.push(
      makeAugmentData("alts soul", level, GROUP, CONFLICT, stats),
    );
  }
})();

// --------------------------------------
// dolz soul
(() => {
  const bp = [5, 6, 7];
  const pp = [5, 5, 5];
  const floor_pot = [1.01, 1.02, 1.025];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.PP, pp[i]),
      makeStat(StatTypes.FLOOR_POT, floor_pot[i]),
    ];
    augments.push(
      makeAugmentData("dolz soul", level, GROUP, CONFLICT, stats),
    );
  }
})();

// --------------------------------------
// form | form machini | form sand soul
(() => {
  const bp = [6, 8, 9];
  const pot = [1.02, 1.02, 1.02];
  const dmg_res = [1, 1.02, 1.025];

  const names = ["forms", "forms machini", "forms sand"];
  names.forEach((name, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(OFFENSIVE_POT[i], pot[i]),
      makeStat(StatTypes.DMG_RES, dmg_res[i]),
    ];

    augments.push(
      makeAugmentData(`${name} soul`, level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// daityl | pettas | nex soul
(() => {
  const bp = [7, 8, 10];
  const pp = [5, 5, 5];
  const pot = [1.01, 1.02, 1.025];

  const names = ["daityl", "pettas", "nex"];
  names.forEach((name, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.PP, pp[i]),
      makeStat(OFFENSIVE_POT[i], pot[i]),
    ];

    augments.push(
      makeAugmentData(`${name} soul`, level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// dust | ragras | renus soul
(() => {
  const bp = [7, 8, 10];
  const hp = [15, 15, 15];
  const pot = [1.01, 1.02, 1.025];

  const names = ["dust", "ragras", "renus"];
  names.forEach((name, i) => {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(OFFENSIVE_POT[i], pot[i]),
    ];

    augments.push(
      makeAugmentData(`${name} soul`, level, GROUP, CONFLICT, stats),
    );
  });
})();

// --------------------------------------
// eradi soul
(() => {
  const bp = [7, 8, 10];
  const hp = [10, 10, 10];
  const pp = [4, 4, 4];
  const pot = [1.01, 1.015, 1.02];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, bp[i]),
      makeStat(StatTypes.HP, hp[i]),
      makeStat(StatTypes.PP, pp[i]),
      makeStat(StatTypes.POT, pot[i]),
    ];
    augments.push(
      makeAugmentData("eradi soul", level, GROUP, CONFLICT, stats),
    );
  }
})();

export default augments;

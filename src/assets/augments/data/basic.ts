import { makeStat, StatTypes } from "../../stats";
import { makeAugmentData } from "../makeAugment";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.BASIC;
const CONFLICT: AugmentGroups[] = [AugmentGroups.FUSED];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// stamina
(() => {
  const stamina_bp = [3, 4, 5];
  const stamina_hp = [5, 10, 15];
  for (let i = 0; i < 3; i++) {
    const level = i + 1;
    const stats = [
      makeStat(StatTypes.BP, stamina_bp[i]),
      makeStat(StatTypes.HP, stamina_hp[i]),
    ];
    // generic
    augments.push(
      makeAugmentData("stamina", level, GROUP, CONFLICT, stats),
    );
    if (level === 3) {
      // s type
      augments.push(
        makeAugmentData(
          "stamina",
          level,
          AugmentGroups.S,
          CONFLICT,
          stats,
          [],
          true,
        ),
      );
    }
  }
})();

// --------------------------------------
// spirit
const spirit_bp = [2, 3, 4];
const spirit_pp = [3, 4, 5];
for (let i = 0; i < 3; i++) {
  const level = i + 1;
  const stats = [
    makeStat(StatTypes.BP, spirit_bp[i]),
    makeStat(StatTypes.PP, spirit_pp[i]),
  ];
  // generic
  augments.push(
    makeAugmentData("spirit", level, GROUP, CONFLICT, stats),
  );

  if (level === 3) {
    // s type
    augments.push(
      makeAugmentData(
        "spirit",
        level,
        AugmentGroups.S,
        CONFLICT,
        stats,
        [],
        true,
      ),
    );
  }
}

// --------------------------------------
const offensive_bp = [4, 5, 6];
const offensive_pot = [1.01, 1.015, 1.02];
// might
for (let i = 0; i < 3; i++) {
  const level = i + 1;
  const stats = [
    makeStat(StatTypes.BP, offensive_bp[i]),
    makeStat(StatTypes.MEL_POT, offensive_pot[i]),
  ];
  // generic
  augments.push(
    makeAugmentData("might", level, GROUP, CONFLICT, stats),
  );

  if (level === 3) {
    // s type
    augments.push(
      makeAugmentData(
        "might",
        level,
        AugmentGroups.S,
        CONFLICT,
        stats,
        [],
        true,
      ),
    );
  }
}
// precision
for (let i = 0; i < 3; i++) {
  const level = i + 1;
  const stats = [
    makeStat(StatTypes.BP, offensive_bp[i]),
    makeStat(StatTypes.RNG_POT, offensive_pot[i]),
  ];
  // generic
  augments.push(
    makeAugmentData("precision", level, GROUP, CONFLICT, stats),
  );
  if (level === 3) {
    // s type
    augments.push(
      makeAugmentData(
        "precision",
        level,
        AugmentGroups.S,
        CONFLICT,
        stats,
        [],
        true,
      ),
    );
  }
}
// technique
for (let i = 0; i < 3; i++) {
  const level = i + 1;
  const stats = [
    makeStat(StatTypes.BP, offensive_bp[i]),
    makeStat(StatTypes.TEC_POT, offensive_pot[i]),
  ];
  // generic
  augments.push(
    makeAugmentData("technique", level, GROUP, CONFLICT, stats),
  );

  if (level === 3) {
    // s type
    augments.push(
      makeAugmentData(
        "technique",
        level,
        AugmentGroups.S,
        CONFLICT,
        stats,
        [],
        true,
      ),
    );
  }
}

// --------------------------------------
// deftness
const deftness_bp = [3, 4, 5];
const deftness_amount = [1.01, 1.015, 1.02];
for (let i = 0; i < 3; i++) {
  const level = i + 1;
  const stats = [
    makeStat(StatTypes.BP, deftness_bp[i]),
    makeStat(StatTypes.FLOOR_POT, deftness_amount[i]),
  ];
  // generic
  augments.push(
    makeAugmentData("deftness", level, GROUP, CONFLICT, stats),
  );
}

// --------------------------------------
// guard
const guard_bp = [2, 3, 4];
const guard_amount = [1.01, 1.015, 1.02];
for (let i = 0; i < 3; i++) {
  const level = i + 1;
  const stats = [
    makeStat(StatTypes.BP, guard_bp[i]),
    makeStat(StatTypes.DMG_RES, guard_amount[i]),
  ];
  augments.push(
    makeAugmentData("guard", level, GROUP, CONFLICT, stats),
  );
}

// --------------------------------------
// mastery
const mastery_bp = [6, 8, 10, 12];
const mastery_pot_amount = [1.01, 1.015, 1.02, 1.025];
const mastery_floor_pot = [1.01, 1.015, 1.02, 1.025];
const mastery_dmg_res = [1.01, 1.015, 1.02, 1.025];
for (let i = 0; i < 4; i++) {
  const level = i + 1;
  const stats = [
    makeStat(StatTypes.BP, mastery_bp[i]),
    makeStat(StatTypes.POT, mastery_pot_amount[i]),
    makeStat(StatTypes.FLOOR_POT, mastery_floor_pot[i]),
    makeStat(StatTypes.DMG_RES, mastery_dmg_res[i]),
  ];
  augments.push(
    makeAugmentData("mastery", level, GROUP, CONFLICT, stats),
  );
}

export default augments;

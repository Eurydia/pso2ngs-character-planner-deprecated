import {
  StatTypes,
  makeStat,
  expandPot,
  StatShorthands,
} from "../../stats";
import { makeUnitData } from "../makeData";
import { UnitData } from "../types";

// -------------------------
const RARITY = 5;
let units: UnitData[] = [];
// -------------------------

// -------------------------
// vidal
units.push(
  makeUnitData("vidal armor", RARITY, 24, 22, [
    makeStat(StatTypes.HP, 45),
    makeStat(StatTypes.DMG_RESIST, 1.01),
  ]),
);

// -------------------------
// vijf
units.push(
  makeUnitData("vijf armor", RARITY, 24, 17, [
    makeStat(StatTypes.HP, 30),
    makeStat(StatTypes.PP, 4),
  ]),
);
// arga
units.push(
  makeUnitData("vijf armor arga", RARITY, 31, 18, [
    makeStat(StatTypes.HP, 20),
    makeStat(StatTypes.PP, 7),
    makeStat(StatTypes.MEL_POT, 1.01),
    makeStat(StatTypes.RNG_POT, 1.01),
  ]),
);
// belta
units.push(
  makeUnitData("vijf armor belta", RARITY, 31, 18, [
    makeStat(StatTypes.HP, 20),
    makeStat(StatTypes.PP, 7),
    makeStat(StatTypes.MEL_POT, 1.01),
    makeStat(StatTypes.TEC_POT, 1.01),
  ]),
);
// sheza
units.push(
  makeUnitData("vijf armor sheza", RARITY, 31, 18, [
    makeStat(StatTypes.HP, 20),
    makeStat(StatTypes.PP, 7),
    makeStat(StatTypes.MEL_POT, 1.01),
    makeStat(StatTypes.TEC_POT, 1.01),
  ]),
);

// -------------------------
// vios
units.push(
  makeUnitData("vios armor", RARITY, 24, 15, [
    makeStat(StatTypes.PP, 8),
    makeStat(StatShorthands.POT, 1.01),
  ]),
);

// -------------------------
// vindalun
units.push(
  makeUnitData("vindalun armor", RARITY, 26, 20, [
    makeStat(StatTypes.HP, 70),
  ]),
);

// -------------------------
// viosel
units.push(
  makeUnitData("viosel armor", RARITY, 26, 10, [
    makeStat(StatTypes.PP, 14),
    makeStat(StatShorthands.AILMENT_RES, 1.2),
  ]),
);

// -------------------------
// gres
units.push(
  makeUnitData("gres armor", RARITY, 31, 21, [
    makeStat(StatTypes.HP, -40),
    makeStat(StatTypes.PP, 13),
    makeStat(StatShorthands.POT, 1.02),
    makeStat(StatShorthands.AILMENT_RES, 0.5),
  ]),
);

// -------------------------
// schwarz
(() => {
  const pot_type = expandPot();

  const names = ["schwarzest", "schwarzgarde", "schwarzrosso"];
  names.forEach((name, i) =>
    units.push(
      makeUnitData(`${name} armor`, RARITY, 31, 20, [
        makeStat(StatTypes.HP, 25),
        makeStat(StatTypes.PP, 3),
        makeStat(pot_type[i], 1.02),
        makeStat(StatTypes.DMG_RESIST, 1.01),
      ]),
    ),
  );
})();

export default units;

import { StatTypes, makeStat } from "../../stats";
import { makeWeaponData } from "../makeData";
import {
  ELUSIVE_UNIT,
  ILLUSORY_UNIT,
  REVOLUTIONARY_UNIT,
  TRAMPLE_UNIT,
} from "../potential-data";
import { WeaponData } from "../types";

const RARITY = 6;

let data: WeaponData[] = [];

// -----------------------
data.push(
  makeWeaponData(
    "evoleclipse weapons",
    RARITY,
    40,
    ELUSIVE_UNIT,
    346,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
data.push(
  makeWeaponData("sechetyl weapons", RARITY, 45, TRAMPLE_UNIT, 350, [
    makeStat(StatTypes.FLOOR_POT, 1.75),
  ]),
);

// -----------------------
data.push(
  makeWeaponData(
    "rokz weapons (roughewn)",
    RARITY,
    52,
    REVOLUTIONARY_UNIT,
    353,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
data.push(
  makeWeaponData(
    "rokz weapons (sixiemes)",
    RARITY,
    52,
    REVOLUTIONARY_UNIT,
    353,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
data.push(
  makeWeaponData(
    "rokz weapons (curva)",
    RARITY,
    52,
    REVOLUTIONARY_UNIT,
    353,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

// -----------------------
data.push(
  makeWeaponData(
    "evolorbit weapons",
    RARITY,
    53,
    ILLUSORY_UNIT,
    355,
    [makeStat(StatTypes.FLOOR_POT, 1.75)],
  ),
);

export default data;

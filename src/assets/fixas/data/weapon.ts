import { StatTypes, makeStat } from "../../stats";
import { makeFixaData } from "../makeData";
import { FixaData, FixaTypes } from "../types";

// ---------------------
const FIXA_TYPE = FixaTypes.WEAPON;
let fixa: FixaData[] = [];
// ---------------------

// ---------------------
// attack
(() => {
  const dmg_boost = [1.02, 1.03, 1.04, 1.045, 1.05];

  dmg_boost.forEach((amount, level_index) => {
    const level = level_index + 1;
    const stats = [makeStat(StatTypes.DMG_BOOST, amount)];
    fixa.push(makeFixaData("attack", level, FIXA_TYPE, stats));
  });
})();

// ---------------------
// fixa fatale
(() => {
  const crit_chance = [1.05, 1.08, 1.1, 1.12, 1.13];

  crit_chance.forEach((amount, level_index) => {
    const level = level_index + 1;
    const stats = [makeStat(StatTypes.CRIT_CHANCE, amount)];
    fixa.push(makeFixaData("fatale", level, FIXA_TYPE, stats));
  });
})();

// ---------------------
// fixa termina
(() => {
  const crit_dmg = [1.05, 1.09, 1.12, 1.14, 1.15];

  crit_dmg.forEach((amount, level_index) => {
    const level = level_index + 1;
    const stats = [makeStat(StatTypes.CRIT_DMG, amount)];
    fixa.push(makeFixaData("termina", level, FIXA_TYPE, stats));
  });
})();

export default fixa;

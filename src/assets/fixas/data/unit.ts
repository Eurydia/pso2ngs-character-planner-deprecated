import { StatTypes, makeStat } from "../../stats";
import { makeFixaData } from "../makeFixaData";
import { FixaData, FixaTypes } from "../types";

// ---------------------
let fixa: FixaData[] = [];
const FIXA_TYPE = FixaTypes.UNIT;
// ---------------------

// ---------------------
// guard
(() => {
  const dmg_res = [1.01, 1.02, 1.03, 1.035, 1.04];

  dmg_res.forEach((amount, i) => {
    const level = i + 1;
    const stats = [makeStat(StatTypes.DMG_RESIST, amount)];

    fixa.push(makeFixaData("guard", level, FIXA_TYPE, stats));
  });
})();

// ---------------------
// performa
(() => {
  const pp_usage = [0.99, 0.98, 0.97, 0.965, 0.96];

  pp_usage.forEach((amount, i) => {
    const level = i + 1;
    const stats = [makeStat(StatTypes.PP_USAGE, amount)];

    fixa.push(makeFixaData("performa", level, FIXA_TYPE, stats));
  });
})();

// ---------------------
// natura
(() => {
  const passive_pp_gain = [1.02, 1.03, 1.04, 1.045, 1.05];

  passive_pp_gain.forEach((amount, i) => {
    const level = i + 1;
    const stats = [makeStat(StatTypes.NATURAL_PP_RECOVERY, amount)];

    fixa.push(makeFixaData("natura", level, FIXA_TYPE, stats));
  });
})();

// ---------------------
// enthusia
(() => {
  const active_pp_gain = [1.02, 1.03, 1.04, 1.045, 1.05];

  active_pp_gain.forEach((amount, i) => {
    const level = i + 1;
    const stats = [makeStat(StatTypes.ACTIVE_PP_RECOVERY, amount)];

    fixa.push(makeFixaData("enthusia", level, FIXA_TYPE, stats));
  });
})();

export default fixa;

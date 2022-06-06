import { StatTypes, makeStat } from "../../stats";
import { makeFixa } from "../makeFixa";
import { FixaData, FixaTypes } from "../types";

// ---------------------
let fixa: FixaData[] = [];
const FIXA_TYPE = FixaTypes.UNIT;
// ---------------------

// ---------------------
// fixa guard
const GUARD_AMOUNTS = Object.freeze([1.01, 1.02, 1.03, 1.035, 1.04]);
GUARD_AMOUNTS.forEach((amount, index) =>
  fixa.push(
    makeFixa("guard", index + 1, FIXA_TYPE, [
      makeStat(StatTypes.DMG_RES, amount),
    ]),
  ),
);

// ---------------------
// fixa performa
const PERFORMA_AMOUNTS = Object.freeze([
  0.99, 0.98, 0.97, 0.965, 0.96,
]);
PERFORMA_AMOUNTS.forEach((amount, index) =>
  fixa.push(
    makeFixa("performa", index + 1, FIXA_TYPE, [
      makeStat(StatTypes.PP_USAGE, amount),
    ]),
  ),
);

// ---------------------
// fixa natura
const NATURA_AMOUNTS = Object.freeze([1.02, 1.03, 1.04, 1.045, 1.05]);
NATURA_AMOUNTS.forEach((amount, index) =>
  fixa.push(
    makeFixa("natura", index + 1, FIXA_TYPE, [
      makeStat(StatTypes.PASSIVE_PP_GAIN, amount),
    ]),
  ),
);

// ---------------------
// fixa enthusia
const ENTHUSIA_AMOUNTS = Object.freeze([
  1.02, 1.03, 1.04, 1.045, 1.05,
]);
ENTHUSIA_AMOUNTS.forEach((amount, index) =>
  fixa.push(
    makeFixa("enthusia", index + 1, FIXA_TYPE, [
      makeStat(StatTypes.ACTIVE_PP_GAIN, amount),
    ]),
  ),
);
export default fixa;

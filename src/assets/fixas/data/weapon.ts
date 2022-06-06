import { StatTypes, makeStat } from "../../stats";
import { makeFixa } from "../makeFixa";
import { FixaData, FixaTypes } from "../types";

// ---------------------
const FIXA_TYPE = FixaTypes.WEAPON;
let fixa: FixaData[] = [];
// ---------------------

// ---------------------
// fixa attack
const ATTACK_AMOUNTS = Object.freeze([1.02, 1.03, 1.04, 1.045, 1.05]);
ATTACK_AMOUNTS.forEach((amount, index) =>
  fixa.push(
    makeFixa("attack", index + 1, FIXA_TYPE, [
      makeStat(StatTypes.DMG_BOOST, amount),
    ]),
  ),
);

// ---------------------
// fixa fatale
const FATALE_AMOUNTS = Object.freeze([1.05, 1.08, 1.1, 1.12, 1.13]);
FATALE_AMOUNTS.forEach((amount, index) =>
  fixa.push(
    makeFixa("fatale", index + 1, FIXA_TYPE, [
      makeStat(StatTypes.CRIT_CHANCE, amount),
    ]),
  ),
);

// ---------------------
// fixa termina
const TERMINA_AMOUNTS = Object.freeze([1.05, 1.09, 1.12, 1.14, 1.15]);
TERMINA_AMOUNTS.forEach((amount, index) =>
  fixa.push(
    makeFixa("termina", index + 1, FIXA_TYPE, [
      makeStat(StatTypes.CRIT_DMG, amount),
    ]),
  ),
);

export default fixa;

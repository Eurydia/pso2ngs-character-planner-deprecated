import { StatTypes, Fixa } from "../../../types";
import { makeStatWithManyAmounts } from "../../makeStat";
import { makeManyFixa } from "../makeFixa";

let fixa: Fixa[] = [];

fixa.push(
  ...makeManyFixa("attack", 5, [
    makeStatWithManyAmounts(
      StatTypes.DMG_BOOST,
      [1.02, 1.03, 1.04, 1.045, 1.05],
    ),
  ]),
);

fixa.push(
  ...makeManyFixa("fatale", 5, [
    makeStatWithManyAmounts(
      StatTypes.CRIT_CHANCE,
      [1.05, 1.08, 1.1, 1.12, 1.13],
    ),
  ]),
);

fixa.push(
  ...makeManyFixa("termina", 5, [
    makeStatWithManyAmounts(
      StatTypes.CRIT_DMG,
      [1.05, 1.09, 1.12, 1.14, 1.15],
    ),
  ]),
);

const FIXA = Object.freeze(fixa);
export default FIXA;

import { Fixa, StatTypes } from "../../../types";
import { makeStatWithManyAmounts } from "../../makeStat";
import { makeManyFixa } from "../makeFixa";

let fixa: Fixa[] = [];

fixa.push(
  ...makeManyFixa("guard", 5, [
    makeStatWithManyAmounts(
      StatTypes.DMG_RES,
      [1.01, 1.02, 1.03, 1.035, 1.04],
    ),
  ]),
);

fixa.push(
  ...makeManyFixa("performa", 5, [
    makeStatWithManyAmounts(
      StatTypes.PP_USAGE,
      [0.99, 0.98, 0.97, 0.965, 0.96],
    ),
  ]),
);

fixa.push(
  ...makeManyFixa("natura", 5, [
    makeStatWithManyAmounts(
      StatTypes.PASSIVE_PP_GAIN,
      [1.02, 1.03, 1.04, 1.045, 1.05],
    ),
  ]),
);

fixa.push(
  ...makeManyFixa("enthusia", 5, [
    makeStatWithManyAmounts(
      StatTypes.ACTIVE_PP_GAIN,
      [1.02, 1.03, 1.04, 1.045, 1.05],
    ),
  ]),
);

const FIXA = Object.freeze(fixa);
export default FIXA;

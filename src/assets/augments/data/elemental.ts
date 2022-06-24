import {
  makeConditional,
  makeStat,
  StatShorthands,
} from "../../stats";
import { makeAugmentData } from "../makeAugmentData";
import { AugmentData, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.ELEMENTAL;
const CONFLICT: AugmentGroups[] = [AugmentGroups.ELEMENTAL];
let augments: AugmentData[] = [];
// --------------------------------------

// --------------------------------------
// exploits
(() => {
  const elements = [
    "fire",
    "ice",
    "lightning",
    "light",
    "wind",
    "dark",
  ];
  elements.forEach((element) => {
    augments.push(
      makeAugmentData(
        `${element} exploit`,
        1,
        GROUP,
        CONFLICT,
        [],
        [
          makeConditional(
            [makeStat(StatShorthands.POT, 1.025)],
            `is attacking enemy weak to ${element}`,
          ),
        ],
      ),
    );
  });
})();

export default augments;

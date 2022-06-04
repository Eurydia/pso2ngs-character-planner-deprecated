import { makeConditional, makeStat, StatTypes } from "../../stats";
import { makeAugment } from "../makeAugment";
import { Augment, AugmentGroups } from "../types";

// --------------------------------------
const GROUP = AugmentGroups.ELEMENTAL;
const CONFLICT: AugmentGroups[] = [AugmentGroups.ELEMENTAL];
let augments: Augment[] = [];
// --------------------------------------

const elements = [
  "fire",
  "ice",
  "lightning",
  "light",
  "wind",
  "dark",
];
// --------------------------------------
// exploits
elements.forEach((element) => {
  augments.push(
    makeAugment(
      `${element} exploit`,
      1,
      GROUP,
      CONFLICT,
      [],
      [
        makeConditional(
          [makeStat(StatTypes.POT, 1.025)],
          `is attacking enemy weak to ${element}`,
        ),
      ],
    ),
  );
});

export default augments;

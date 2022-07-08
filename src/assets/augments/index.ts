import addi from "./data/addi";
import basic from "./data/basic";
import domina from "./data/domina";
import dread from "./data/dread";
import duable from "./data/dualble";
import elemental from "./data/elemental";
import fused from "./data/fused";
import fusia from "./data/fusia";
import gigas from "./data/gigas";
import note from "./data/note";
import secreata from "./data/secreta";
import soul from "./data/soul";
import tria from "./data/tria";
import ward from "./data/ward";
import { AugmentData } from "./types";

export * from "./types";
export * from "./typeguard";
export * from "./utility";

const AUGMENTS: AugmentData[] = [
  ...addi,
  ...basic,
  ...domina,
  ...dread,
  ...duable,
  ...elemental,
  ...fused,
  ...fusia,
  ...gigas,
  ...note,
  ...secreata,
  ...soul,
  ...tria,
  ...ward,
];
export default AUGMENTS;

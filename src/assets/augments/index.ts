import { default as addi } from "./data/addi";
import { default as basic } from "./data/basic";
import { default as domina } from "./data/domina";
import { default as dread } from "./data/dread";
import { default as duable } from "./data/dualble";
import { default as elemental } from "./data/elemental";
import { default as fused } from "./data/fused";
import { default as fusia } from "./data/fusia";
import { default as gigas } from "./data/gigas";
import { default as note } from "./data/note";
import { default as secreata } from "./data/secreta";
import { default as soul } from "./data/soul";
import { default as tria } from "./data/tria";
import { default as ward } from "./data/ward";

export * from "./types";
export * from "./typeguard";
export * from "./utility";

const AUGMENTS = Object.freeze([
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
]);
export default AUGMENTS;

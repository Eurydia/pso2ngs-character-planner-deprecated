import { default as one } from "./data/one";
import { default as two } from "./data/two";
import { default as three } from "./data/three";
import { default as four } from "./data/four";
import { default as five } from "./data/five";
import { Weapon } from "./types";

export * from "./types";
export * from "./getStat";

const WEAPONS: ReadonlyArray<Weapon> = Object.freeze([
  ...one,
  ...two,
  ...three,
  ...four,
  ...five,
]);

export default WEAPONS;

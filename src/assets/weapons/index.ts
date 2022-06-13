import { default as one } from "./data/one";
import { default as two } from "./data/two";
import { default as three } from "./data/three";
import { default as four } from "./data/four";
import { default as five } from "./data/five";
import { WeaponData } from "./types";

export * from "./types";
export * from "./typeguard";
export * from "./getStatPayload";
export * from "./utility";

const WEAPONS: ReadonlyArray<WeaponData> = Object.freeze([
  ...one,
  ...two,
  ...three,
  ...four,
  ...five,
]);

export default WEAPONS;

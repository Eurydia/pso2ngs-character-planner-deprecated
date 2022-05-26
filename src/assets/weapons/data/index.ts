import { default as one } from "./one";
import { default as two } from "./two";
import { default as three } from "./three";
import { default as four } from "./four";
import { default as five } from "./five";
import { Weapon } from "../../../types";

const WEAPONS: readonly Weapon[] = [
  ...one,
  ...two,
  ...three,
  ...four,
  ...five,
];

export default WEAPONS;

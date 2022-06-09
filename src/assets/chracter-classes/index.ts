import { default as hunter } from "./data/hunter";
import { default as fighter } from "./data/fighter";
import { default as ranger } from "./data/ranger";
import { default as gunner } from "./data/gunner";
import { default as force } from "./data/force";
import { default as techter } from "./data/techter";
import { default as braver } from "./data/braver";
import { default as bouncer } from "./data/bouncer";

export * from "./types";
export * from "./getStat";

const CHARACTER_CLASSES = Object.freeze([
  hunter,
  fighter,
  ranger,
  gunner,
  force,
  techter,
  braver,
  bouncer,
]);
export default CHARACTER_CLASSES;

import { default as hunter } from "./classes-data/hunter";
import { default as fighter } from "./classes-data/fighter";
import { default as ranger } from "./classes-data/ranger";
import { default as gunner } from "./classes-data/gunner";
import { default as force } from "./classes-data/force";
import { default as techter } from "./classes-data/techter";
import { default as braver } from "./classes-data/braver";
import { default as bouncer } from "./classes-data/bouncer";

export * from "./types";
export * from "./typeguard";
export * from "./getStatPayload";
export * from "./utility";

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

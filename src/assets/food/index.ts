import { default as generic } from "./data/generic";
import { default as seasonal } from "./data/seasonal";
import { Food } from "./types";

export * from "./types";
export * from "./getStat";

const FOOD: ReadonlyArray<Food> = Object.freeze([
  ...generic,
  ...seasonal,
]);

export default FOOD;

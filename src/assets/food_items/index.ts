import { default as generic } from "./data/generic";
import { default as seasonal } from "./data/seasonal";

export * from "./types";
export * from "./getStat";

const FOOD_ITEMS = Object.freeze([...generic, ...seasonal]);

export default FOOD_ITEMS;

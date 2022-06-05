import { default as generic } from "./data/generic";
import { default as seasonal } from "./data/seasonal";

export * from "./types";
export * from "./getStat";

const FOOD = Object.freeze([...generic, ...seasonal]);

export default FOOD;

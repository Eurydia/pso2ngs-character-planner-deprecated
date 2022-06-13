import { default as generic } from "./data/generic";
import { default as seasonal } from "./data/seasonal";

export * from "./types";
export * from "./typeguard";
export * from "./getStatPayload";
export * from "./utility";

const FOOD = Object.freeze([...generic, ...seasonal]);

export default FOOD;

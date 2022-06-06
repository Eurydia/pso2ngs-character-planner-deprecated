import { default as weapon } from "./data/weapon";
import { default as unit } from "./data/unit";

export * from "./types";

const FIXAS = Object.freeze([...weapon, ...unit]);
export default FIXAS;

import { default as weapon } from "./data/weapon";
import { default as unit } from "./data/unit";

export * from "./types";
export * from "./typeguard";

const FIXAS = Object.freeze([...weapon, ...unit]);
export default FIXAS;

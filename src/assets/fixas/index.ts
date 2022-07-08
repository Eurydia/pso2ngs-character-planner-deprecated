import weapon from "./data/weapon";
import unit from "./data/unit";

export * from "./types";
export * from "./typeguard";
export * from "./utility";

const FIXAS = [...weapon, ...unit];
export default FIXAS;

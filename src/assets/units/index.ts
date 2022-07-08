import { UnitData } from "./types";
import one from "./data/one";
import two from "./data/two";
import three from "./data/three";
import four from "./data/four";
import five from "./data/five";

export * from "./types";
export * from "./getStatPayload";
export * from "./utility";

const UNITS: UnitData[] = [
  ...one,
  ...two,
  ...three,
  ...four,
  ...five,
];

export default UNITS;

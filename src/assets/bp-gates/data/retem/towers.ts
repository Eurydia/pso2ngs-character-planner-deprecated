import {
  BPGateData,
  ContentLocation,
  ContentTypes,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
gates.push(
  makeBPGateData(
    "dolls burrow",
    [ContentLocation.RETEM],
    [ContentTypes.TOWER],
    1592,
    0,
  ),
);

export default gates;

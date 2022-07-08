import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
// yellow
gates.push(
  makeBPGateData(
    "kvaris yellow",
    [ContentLocation.KVARIS],
    [ContentTypes.BATTLEDIA],
    2416,
    55,
  ),
);

// ---------------------------
// purple
gates.push(
  makeBPGateData(
    "kvaris purple",
    [ContentLocation.KVARIS],
    [ContentTypes.BATTLEDIA],
    2744,
    64,
  ),
);

export default gates;

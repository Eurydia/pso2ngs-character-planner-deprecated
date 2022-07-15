import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
// yellow
data.push(
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
data.push(
  makeBPGateData(
    "kvaris purple",
    [ContentLocation.KVARIS],
    [ContentTypes.BATTLEDIA],
    2744,
    64,
  ),
);

export default data;

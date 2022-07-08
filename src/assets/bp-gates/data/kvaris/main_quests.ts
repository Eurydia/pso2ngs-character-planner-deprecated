import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
gates.push(
  makeBPGateData(
    "kvaris independent partisab squad",
    [ContentLocation.KVARIS],
    [ContentTypes.QUEST],
    2251,
    0,
  ),
);

export default gates;

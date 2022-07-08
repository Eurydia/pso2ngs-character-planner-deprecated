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
    "deepwell",
    [ContentLocation.KVARIS],
    [ContentTypes.TOWER],
    2506,
    55,
  ),
);

export default gates;

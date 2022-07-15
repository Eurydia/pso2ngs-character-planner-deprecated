import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
data.push(
  makeBPGateData(
    "kvaris independent partisan squad",
    [ContentLocation.KVARIS],
    [ContentTypes.QUEST],
    2251,
    0,
  ),
);

export default data;

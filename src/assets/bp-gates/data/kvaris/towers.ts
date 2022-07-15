import {
  BPGateData,
  ContentLocation,
  ContentTypes,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
data.push(
  makeBPGateData(
    "deepwell",
    [ContentLocation.KVARIS],
    [ContentTypes.TOWER],
    2506,
    55,
  ),
);

export default data;

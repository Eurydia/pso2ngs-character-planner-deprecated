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
    "dolls burrow",
    [ContentLocation.RETEM],
    [ContentTypes.TOWER],
    1592,
    0,
  ),
);

export default data;

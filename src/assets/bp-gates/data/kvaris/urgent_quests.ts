import {
  BPGateData,
  ContentLocation,
  ContentTypes,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
// ams vera
data.push(
  makeBPGateData(
    "ams vera suppression",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2506,
    57,
  ),
);

// ---------------------------
// croc vera
data.push(
  makeBPGateData(
    "crocodylis vera suppression",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2506,
    57,
  ),
);

export default data;

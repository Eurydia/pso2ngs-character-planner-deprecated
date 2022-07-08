import {
  BPGateData,
  ContentLocation,
  ContentTypes,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let bp_gates: BPGateData[] = [];

// ---------------------------
// ams vera
bp_gates.push(
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
bp_gates.push(
  makeBPGateData(
    "crocodylis vera suppression",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2506,
    57,
  ),
);

export default bp_gates;

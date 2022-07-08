import { BPGateData, ContentLocation, ContentTypes } from "../types";
import { makeBPGateData } from "../makeData";

// ---------------------------
const content_type = ContentTypes.TOWER;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio

// ---------------------------
// retem
bp_gates.push(
  makeBPGateData(
    "dolls burrow",
    ContentLocation.RETEM,
    content_type,
    1592,
    0,
  ),
);

export default bp_gates;

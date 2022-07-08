import { BPGateData, ContentTypes, ContentLocation } from "../types";
import { makeBPGateData } from "../makeData";

// ---------------------------
const content_type = ContentTypes.EXPLORATION;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// retem
bp_gates.push(
  makeBPGateData(
    "west retem",
    ContentLocation.RETEM,
    content_type,
    1223,
    17,
  ),
);
bp_gates.push(
  makeBPGateData(
    "central retem",
    ContentLocation.RETEM,
    content_type,
    1263,
    19,
  ),
);
bp_gates.push(
  makeBPGateData(
    "north retem",
    ContentLocation.RETEM,
    content_type,
    1396,
    21,
  ),
);
bp_gates.push(
  makeBPGateData(
    "south retem",
    ContentLocation.RETEM,
    content_type,
    1474,
    23,
  ),
);
bp_gates.push(
  makeBPGateData(
    "rwh maqead",
    ContentLocation.RETEM,
    content_type,
    1513,
    24,
  ),
);

export default bp_gates;

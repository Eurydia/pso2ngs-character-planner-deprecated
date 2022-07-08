import { BPGateData, ContentTypes, ContentLocation } from "../types";
import { makeBPGateData } from "../makeData";

// ---------------------------
const content_type = ContentTypes.BATTLEDIA;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(
  makeBPGateData(
    "aelio yellow",
    ContentLocation.AELIO,
    content_type,
    1081,
    16,
  ),
);
bp_gates.push(
  makeBPGateData(
    "aelio purple (rank 1)",
    ContentLocation.AELIO,
    content_type,
    1363,
    24,
  ),
);
bp_gates.push(
  makeBPGateData(
    "aelio purple (rank 2)",
    ContentLocation.AELIO,
    content_type,
    1957,
    44,
  ),
);

// ---------------------------
// retem
bp_gates.push(
  makeBPGateData(
    "retem yellow",
    ContentLocation.RETEM,
    content_type,
    1474,
    25,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem purple (rank 1)",
    ContentLocation.RETEM,
    content_type,
    1813,
    39,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem purple (rank 2)",
    ContentLocation.RETEM,
    content_type,
    2114,
    49,
  ),
);

export default bp_gates;

import { BPGateData, ContentTypes, ContentLocation } from "../types";
import { makeBPGateData } from "../makeData";

// ---------------------------
const content_type = ContentTypes.COMBAT;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio

// ---------------------------
// retem
// alnothe
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 1)",
    ContentLocation.RETEM,
    content_type,
    1363,
    20,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 2)",
    ContentLocation.RETEM,
    content_type,
    1633,
    30,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 3)",
    ContentLocation.RETEM,
    content_type,
    1869,
    40,
  ),
);
// maqead lower
bp_gates.push(
  makeBPGateData(
    "maqead lower level (rank 1)",
    ContentLocation.RETEM,
    content_type,
    1562,
    25,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 2)",
    ContentLocation.RETEM,
    content_type,
    1633,
    30,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 3)",
    ContentLocation.RETEM,
    content_type,
    1869,
    40,
  ),
);

export default bp_gates;

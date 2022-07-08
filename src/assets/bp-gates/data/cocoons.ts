import { BPGateData, ContentTypes, ContentLocation } from "../types";
import { makeBPGateData } from "../makeData";

// ---------------------------
const content_type = ContentTypes.COCOON;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio

// ---------------------------
// retem
bp_gates.push(
  makeBPGateData(
    "dyna assult",
    ContentLocation.AELIO,
    content_type,
    1223,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "parkour master",
    ContentLocation.AELIO,
    content_type,
    1223,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "runway II",
    ContentLocation.AELIO,
    content_type,
    1223,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "narrow cage",
    ContentLocation.AELIO,
    content_type,
    1396,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "buddy attack",
    ContentLocation.AELIO,
    content_type,
    1396,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "vanishing path",
    ContentLocation.AELIO,
    content_type,
    1562,
    0,
  ),
);

export default bp_gates;

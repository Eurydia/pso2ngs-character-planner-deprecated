import { BPGateData, ContentRegions, ContentTypes } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.TOWER;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(
  makeBPGateData(
    "alters rush",
    ContentRegions.AELIO,
    content_type,
    1184,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "great wall",
    ContentRegions.AELIO,
    content_type,
    1184,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "aero runner",
    ContentRegions.AELIO,
    content_type,
    1184,
    0,
  ),
);

// ---------------------------
// retem
bp_gates.push(
  makeBPGateData(
    "dolls burrow",
    ContentRegions.RETEM,
    content_type,
    1592,
    0,
  ),
);

export default bp_gates;

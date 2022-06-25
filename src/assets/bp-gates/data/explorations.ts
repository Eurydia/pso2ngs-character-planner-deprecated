import { BPGateData, ContentTypes, ContentRegions } from "../types";
import { makeBPGateData } from "../makeData";

// ---------------------------
const content_type = ContentTypes.EXPLORATION;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(
  makeBPGateData(
    "central aelio",
    ContentRegions.AELIO,
    content_type,
    800,
    1,
  ),
);
bp_gates.push(
  makeBPGateData(
    "south aelio",
    ContentRegions.AELIO,
    content_type,
    835,
    3,
  ),
);
bp_gates.push(
  makeBPGateData(
    "west aelio",
    ContentRegions.AELIO,
    content_type,
    933,
    7,
  ),
);
bp_gates.push(
  makeBPGateData(
    "north aelio",
    ContentRegions.AELIO,
    content_type,
    987,
    10,
  ),
);
bp_gates.push(
  makeBPGateData(
    "halphia lake",
    ContentRegions.AELIO,
    content_type,
    9999,
    60,
  ),
);

// ---------------------------
// retem
bp_gates.push(
  makeBPGateData(
    "west retem",
    ContentRegions.RETEM,
    content_type,
    1223,
    17,
  ),
);
bp_gates.push(
  makeBPGateData(
    "central retem",
    ContentRegions.RETEM,
    content_type,
    1263,
    19,
  ),
);
bp_gates.push(
  makeBPGateData(
    "north retem",
    ContentRegions.RETEM,
    content_type,
    1396,
    21,
  ),
);
bp_gates.push(
  makeBPGateData(
    "south retem",
    ContentRegions.RETEM,
    content_type,
    1474,
    23,
  ),
);
bp_gates.push(
  makeBPGateData(
    "rwh maqead",
    ContentRegions.RETEM,
    content_type,
    1513,
    24,
  ),
);

export default bp_gates;

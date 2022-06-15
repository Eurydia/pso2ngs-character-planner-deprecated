import { BPGateData, ContentTypes, ContentRegions } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.COCOON;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(
  makeBPGateData(
    "first step",
    ContentRegions.AELIO,
    content_type,
    800,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "test flight",
    ContentRegions.AELIO,
    content_type,
    835,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "enhanced enemy",
    ContentRegions.AELIO,
    content_type,
    894,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "wild rush",
    ContentRegions.AELIO,
    content_type,
    894,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "swift jump",
    ContentRegions.AELIO,
    content_type,
    916,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "runway",
    ContentRegions.AELIO,
    content_type,
    1009,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "roaring rush",
    ContentRegions.AELIO,
    content_type,
    1184,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "fleeting flight",
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
    "dyna assult",
    ContentRegions.AELIO,
    content_type,
    1223,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "parkour master",
    ContentRegions.AELIO,
    content_type,
    1223,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "runway II",
    ContentRegions.AELIO,
    content_type,
    1223,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "narrow cage",
    ContentRegions.AELIO,
    content_type,
    1396,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "buddy attack",
    ContentRegions.AELIO,
    content_type,
    1396,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "vanishing path",
    ContentRegions.AELIO,
    content_type,
    1562,
    0,
  ),
);

export default bp_gates;

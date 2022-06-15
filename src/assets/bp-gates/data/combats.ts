import { BPGateData, ContentTypes, ContentRegions } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.COMBAT;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
// magnus
bp_gates.push(
  makeBPGateData(
    "mt. magnus (rank 1)",
    ContentRegions.AELIO,
    content_type,
    894,
    5,
  ),
);
bp_gates.push(
  makeBPGateData(
    "mt. magnus (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1184,
    15,
  ),
);
bp_gates.push(
  makeBPGateData(
    "mt. magnus (rank 3)",
    ContentRegions.AELIO,
    content_type,
    1759,
    35,
  ),
);
// lab
bp_gates.push(
  makeBPGateData(
    "vanford lab ruins (rank 1)",
    ContentRegions.AELIO,
    content_type,
    1009,
    10,
  ),
);
bp_gates.push(
  makeBPGateData(
    "vanford lab ruins (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1184,
    15,
  ),
);
bp_gates.push(
  makeBPGateData(
    "vanford lab ruins (rank 3)",
    ContentRegions.AELIO,
    content_type,
    1759,
    35,
  ),
);
// resol
bp_gates.push(
  makeBPGateData(
    "resol forest (rank 1)",
    ContentRegions.AELIO,
    content_type,
    1184,
    15,
  ),
);
bp_gates.push(
  makeBPGateData(
    "resol forest (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1759,
    35,
  ),
);

// ---------------------------
// retem
// alnothe
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 1)",
    ContentRegions.RETEM,
    content_type,
    1363,
    20,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 2)",
    ContentRegions.RETEM,
    content_type,
    1633,
    30,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 3)",
    ContentRegions.RETEM,
    content_type,
    1869,
    40,
  ),
);
// maqead lower
bp_gates.push(
  makeBPGateData(
    "maqead lower level (rank 1)",
    ContentRegions.RETEM,
    content_type,
    1562,
    25,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 2)",
    ContentRegions.RETEM,
    content_type,
    1633,
    30,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem alnothe (rank 3)",
    ContentRegions.RETEM,
    content_type,
    1869,
    40,
  ),
);

export default bp_gates;

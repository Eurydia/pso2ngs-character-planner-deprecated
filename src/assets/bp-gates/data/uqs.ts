import { BPGateData, ContentRegions, ContentTypes } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.UQ;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
// pettas vera
bp_gates.push(
  makeBPGateData(
    "pettas vera suppression (rank 1)",
    ContentRegions.AELIO,
    content_type,
    1184,
    17,
  ),
);
bp_gates.push(
  makeBPGateData(
    "pettas vera suppression (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1898,
    40,
  ),
);
// nex vera
bp_gates.push(
  makeBPGateData(
    "nex vera suppression (rank 1)",
    ContentRegions.AELIO,
    content_type,
    1184,
    40,
  ),
);
bp_gates.push(
  makeBPGateData(
    "nex vera suppression (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1898,
    40,
  ),
);
// spring seasonal uq
bp_gates.push(
  makeBPGateData(
    "flurry of flowers clean up (rank 1)",
    ContentRegions.AELIO,
    content_type,
    1184,
    17,
  ),
);
bp_gates.push(
  makeBPGateData(
    "flurry of flowers clean up (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1898,
    40,
  ),
);
// mining rig
bp_gates.push(
  makeBPGateData(
    "mining rig defense: aelio (rank 1)",
    ContentRegions.AELIO,
    content_type,
    1243,
    20,
  ),
);
bp_gates.push(
  makeBPGateData(
    "mining rig defense: aelio (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1898,
    40,
  ),
);
// df
bp_gates.push(
  makeBPGateData(
    "dark falz interception",
    ContentRegions.AELIO,
    content_type,
    1898,
    40,
  ),
);

// ---------------------------
// retem
// dustyl
bp_gates.push(
  makeBPGateData(
    "dustyl vera suppression (rank 1)",
    ContentRegions.RETEM,
    content_type,
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "dustyl vera suppression (rank 2)",
    ContentRegions.RETEM,
    content_type,
    2049,
    45,
  ),
);
// renus
bp_gates.push(
  makeBPGateData(
    "renus vera suppression (rank 1)",
    ContentRegions.RETEM,
    content_type,
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "renus vera suppression (rank 2)",
    ContentRegions.RETEM,
    content_type,
    2049,
    45,
  ),
);
// mining rig
bp_gates.push(
  makeBPGateData(
    "mining rig defense: retem",
    ContentRegions.RETEM,
    content_type,
    2049,
    45,
  ),
);

export default bp_gates;

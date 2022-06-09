import { BPGateData, ContentTypes } from "../types";
import { makeBPGate } from "../makeBPGate";

// ---------------------------
const content_type = ContentTypes.UQ;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
// pettas vera
bp_gates.push(
  makeBPGate(
    "pettas vera suppression (rank 1)",
    content_type,
    1184,
    17,
  ),
);
bp_gates.push(
  makeBPGate(
    "pettas vera suppression (rank 2)",
    content_type,
    1898,
    40,
  ),
);
// nex vera
bp_gates.push(
  makeBPGate("nex vera suppression (rank 2)", content_type, 1898, 40),
);
bp_gates.push(
  makeBPGate("nex vera suppression (rank 2)", content_type, 1898, 40),
);
// mining rig
bp_gates.push(
  makeBPGate(
    "mining rig defense: aelio (rank 1)",
    content_type,
    1243,
    20,
  ),
);
bp_gates.push(
  makeBPGate(
    "mining rig defense: aelio (rank 2)",
    content_type,
    1898,
    40,
  ),
);
// df
bp_gates.push(
  makeBPGate("dark falz interception", content_type, 1898, 40),
);
// spring seasonal uq
bp_gates.push(
  makeBPGate(
    "flurry of flowers clean up (rank 1)",
    content_type,
    1184,
    17,
  ),
);
bp_gates.push(
  makeBPGate(
    "flurry of flowers clean up (rank 2)",
    content_type,
    1898,
    40,
  ),
);

// ---------------------------
// retem
// dustyl
bp_gates.push(
  makeBPGate(
    "dustyl vera suppression (rank 1)",
    content_type,
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGate(
    "dustyl vera suppression (rank 2)",
    content_type,
    2049,
    45,
  ),
);
// renus
bp_gates.push(
  makeBPGate(
    "renus vera suppression (rank 1)",
    content_type,
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGate(
    "renus vera suppression (rank 2)",
    content_type,
    2049,
    45,
  ),
);
// mining rig
bp_gates.push(
  makeBPGate("mining rig defense: retem", content_type, 2049, 45),
);

export default bp_gates;

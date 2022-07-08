import { BPGateData, ContentLocation, ContentTypes } from "../types";
import { makeBPGateData } from "../makeData";

// ---------------------------
const content_type = ContentTypes.UQ;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// retem
// dustyl
bp_gates.push(
  makeBPGateData(
    "dustyl vera suppression (rank 1)",
    ContentLocation.RETEM,
    content_type,
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "dustyl vera suppression (rank 2)",
    ContentLocation.RETEM,
    content_type,
    2049,
    45,
  ),
);
// renus
bp_gates.push(
  makeBPGateData(
    "renus vera suppression (rank 1)",
    ContentLocation.RETEM,
    content_type,
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "renus vera suppression (rank 2)",
    ContentLocation.RETEM,
    content_type,
    2049,
    45,
  ),
);
// mining rig
bp_gates.push(
  makeBPGateData(
    "mining rig defense: retem",
    ContentLocation.RETEM,
    content_type,
    2049,
    45,
  ),
);

export default bp_gates;

import {
  BPGateData,
  ContentLocation,
  ContentTypes,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let bp_gates: BPGateData[] = [];

// ---------------------------
// dustyl vera
bp_gates.push(
  makeBPGateData(
    "dustyl vera suppression (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "dustyl vera suppression (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2049,
    45,
  ),
);

// ---------------------------
// renus vera
bp_gates.push(
  makeBPGateData(
    "renus vera suppression (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "renus vera suppression (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2049,
    45,
  ),
);

// ---------------------------
// mining rig
bp_gates.push(
  makeBPGateData(
    "mining rig defense: retem",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2049,
    45,
  ),
);

// ---------------------------
// 1st anniversary event
bp_gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1474,
    25,
  ),
);
bp_gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 3)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1957,
    42,
  ),
);

export default bp_gates;

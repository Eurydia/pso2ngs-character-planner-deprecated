import { BPGateData, ContentTypes, ContentRegions } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.BATTLEDIA;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// // assumed to be all region
// // spring 2022 trigger
// bp_gates.push(
//   makeBPGateData(
//     "flurry of flowers clean up (rank 1)",
//     ContentRegions.ALL,
//     content_type,
//     1184,
//     17,
//   ),
// );
// bp_gates.push(
//   makeBPGateData(
//     "flurry of flowers clean up (rank 2)",
//     ContentRegions.ALL,
//     content_type,
//     1898,
//     40,
//   ),
// );
// 1st anniversary sq
bp_gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 1)",
    ContentRegions.ALL,
    content_type,
    1474,
    25,
  ),
);
bp_gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 2)",
    ContentRegions.ALL,
    content_type,
    1682,
    32,
  ),
);
bp_gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 3)",
    ContentRegions.ALL,
    content_type,
    1957,
    42,
  ),
);

// ---------------------------
// aelio
bp_gates.push(
  makeBPGateData(
    "aelio yellow",
    ContentRegions.AELIO,
    content_type,
    1081,
    16,
  ),
);
bp_gates.push(
  makeBPGateData(
    "aelio purple (rank 1)",
    ContentRegions.AELIO,
    content_type,
    1363,
    24,
  ),
);
bp_gates.push(
  makeBPGateData(
    "aelio purple (rank 2)",
    ContentRegions.AELIO,
    content_type,
    1957,
    44,
  ),
);

// ---------------------------
// retem
bp_gates.push(
  makeBPGateData(
    "retem yellow",
    ContentRegions.RETEM,
    content_type,
    1474,
    25,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem purple (rank 1)",
    ContentRegions.RETEM,
    content_type,
    1813,
    39,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem purple (rank 2)",
    ContentRegions.RETEM,
    content_type,
    2114,
    49,
  ),
);

export default bp_gates;

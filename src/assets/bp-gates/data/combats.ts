import { BPGateData, ContentTypes } from "../types";
import { makeBPGate } from "../makeBPGate";

// ---------------------------
const content_type = ContentTypes.COMBAT;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
// magnus
bp_gates.push(
  makeBPGate("mt. magnus (rank 1)", content_type, 894, 5),
);
bp_gates.push(
  makeBPGate("mt. magnus (rank 2)", content_type, 1184, 15),
);
bp_gates.push(
  makeBPGate("mt. magnus (rank 3)", content_type, 1759, 35),
);
// lab
bp_gates.push(
  makeBPGate("vanford lab ruins (rank 1)", content_type, 1009, 10),
);
bp_gates.push(
  makeBPGate("vanford lab ruins (rank 2)", content_type, 1184, 15),
);
bp_gates.push(
  makeBPGate("vanford lab ruins (rank 3)", content_type, 1759, 35),
);
// resol
bp_gates.push(
  makeBPGate("resol forest (rank 1)", content_type, 1184, 15),
);
bp_gates.push(
  makeBPGate("resol forest (rank 2)", content_type, 1759, 35),
);

// ---------------------------
// retem
// alnothe
bp_gates.push(
  makeBPGate("retem alnothe (rank 1)", content_type, 1363, 20),
);
bp_gates.push(
  makeBPGate("retem alnothe (rank 2)", content_type, 1633, 30),
);
bp_gates.push(
  makeBPGate("retem alnothe (rank 3)", content_type, 1869, 40),
);
// maqead lower
bp_gates.push(
  makeBPGate("maqead lower level (rank 1)", content_type, 1562, 25),
);
bp_gates.push(
  makeBPGate("retem alnothe (rank 2)", content_type, 1633, 30),
);
bp_gates.push(
  makeBPGate("retem alnothe (rank 3)", content_type, 1869, 40),
);

export default bp_gates;

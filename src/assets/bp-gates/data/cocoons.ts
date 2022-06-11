import { BPGateData, ContentTypes } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.COCOON;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(makeBPGateData("first step", content_type, 800, 0));
bp_gates.push(makeBPGateData("test flight", content_type, 835, 0));
bp_gates.push(makeBPGateData("enhanced enemy", content_type, 894, 0));
bp_gates.push(makeBPGateData("wild rush", content_type, 894, 0));
bp_gates.push(makeBPGateData("swift jump", content_type, 916, 0));
bp_gates.push(makeBPGateData("runway", content_type, 1009, 0));
bp_gates.push(makeBPGateData("roaring rush", content_type, 1184, 0));
bp_gates.push(
  makeBPGateData("fleeting flight", content_type, 1184, 0),
);

// ---------------------------
// retem
bp_gates.push(makeBPGateData("dyna assult", content_type, 1223, 0));
bp_gates.push(
  makeBPGateData("parkour master", content_type, 1223, 0),
);
bp_gates.push(makeBPGateData("runway II", content_type, 1223, 0));
bp_gates.push(makeBPGateData("narrow cage", content_type, 1396, 0));
bp_gates.push(makeBPGateData("buddy attack", content_type, 1396, 0));
bp_gates.push(
  makeBPGateData("vanishing path", content_type, 1562, 0),
);

export default bp_gates;

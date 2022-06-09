import { BPGateData, ContentTypes } from "../types";
import { makeBPGate } from "../makeBPGate";

// ---------------------------
const content_type = ContentTypes.COCOON;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(makeBPGate("first step", content_type, 800, 0));
bp_gates.push(makeBPGate("test flight", content_type, 835, 0));
bp_gates.push(makeBPGate("enhanced enemy", content_type, 894, 0));
bp_gates.push(makeBPGate("wild rush", content_type, 894, 0));
bp_gates.push(makeBPGate("swift jump", content_type, 916, 0));
bp_gates.push(makeBPGate("runway", content_type, 1009, 0));
bp_gates.push(makeBPGate("roaring rush", content_type, 1184, 0));
bp_gates.push(makeBPGate("fleeting flight", content_type, 1184, 0));

// ---------------------------
// retem
bp_gates.push(makeBPGate("dyna assult", content_type, 1223, 0));
bp_gates.push(makeBPGate("parkour master", content_type, 1223, 0));
bp_gates.push(makeBPGate("runway II", content_type, 1223, 0));
bp_gates.push(makeBPGate("narrow cage", content_type, 1396, 0));
bp_gates.push(makeBPGate("buddy attack", content_type, 1396, 0));
bp_gates.push(makeBPGate("vanishing path", content_type, 1562, 0));

export default bp_gates;

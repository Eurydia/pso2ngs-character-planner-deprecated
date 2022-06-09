import { BPGateData, ContentTypes } from "../types";
import { makeBPGate } from "../makeBPGate";

// ---------------------------
const content_type = ContentTypes.TOWER;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(makeBPGate("alters rush", content_type, 1184, 0));
bp_gates.push(makeBPGate("great wall", content_type, 1184, 0));
bp_gates.push(makeBPGate("aero runner", content_type, 1184, 0));

// ---------------------------
// retem
bp_gates.push(makeBPGate("dolls burrow", content_type, 1592, 0));

export default bp_gates;

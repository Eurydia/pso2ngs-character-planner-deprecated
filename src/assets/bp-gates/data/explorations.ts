import { BPGateData, ContentTypes } from "../types";
import { makeBPGate } from "../makeBPGate";

// ---------------------------
const content_type = ContentTypes.EXPLORATION;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(makeBPGate("central aelio", content_type, 800, 1));
bp_gates.push(makeBPGate("south aelio", content_type, 835, 3));
bp_gates.push(makeBPGate("west aelio", content_type, 933, 7));
bp_gates.push(makeBPGate("north aelio", content_type, 987, 10));
bp_gates.push(makeBPGate("halphia lake", content_type, 9999, 60));

// ---------------------------
// retem
bp_gates.push(makeBPGate("west retem", content_type, 1223, 17));
bp_gates.push(makeBPGate("central aelio", content_type, 1263, 19));
bp_gates.push(makeBPGate("north aelio", content_type, 1396, 21));
bp_gates.push(makeBPGate("south aelio", content_type, 1474, 23));
bp_gates.push(makeBPGate("rwh maqead", content_type, 1513, 24));

export default bp_gates;

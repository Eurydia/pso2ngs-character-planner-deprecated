import { BPGateData, ContentTypes } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.TOWER;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// aelio
bp_gates.push(makeBPGateData("alters rush", content_type, 1184, 0));
bp_gates.push(makeBPGateData("great wall", content_type, 1184, 0));
bp_gates.push(makeBPGateData("aero runner", content_type, 1184, 0));

// ---------------------------
// retem
bp_gates.push(makeBPGateData("dolls burrow", content_type, 1592, 0));

export default bp_gates;

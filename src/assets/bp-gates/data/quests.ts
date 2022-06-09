import { BPGateData, ContentTypes } from "../types";
import { makeBPGate } from "../makeBPGate";

// ---------------------------
const content_type = ContentTypes.QUEST;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// chapter 1
bp_gates.push(makeBPGate("the first mission", content_type, 830, 0));
bp_gates.push(
  makeBPGate("preparing for battle", content_type, 950, 0),
);
bp_gates.push(
  makeBPGate("an abundance of caution", content_type, 1100, 0),
);

// ---------------------------
// chapter 2?
bp_gates.push(
  makeBPGate(
    "the corner stone of retem's revival",
    content_type,
    1243,
    0,
  ),
);
bp_gates.push(
  makeBPGate("the truth behind the song", content_type, 1474, 0),
);
bp_gates.push(
  makeBPGate(
    "retem's independent partisan squad",
    content_type,
    1633,
    0,
  ),
);
export default bp_gates;

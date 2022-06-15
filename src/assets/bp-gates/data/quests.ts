import { BPGateData, ContentTypes, ContentRegions } from "../types";
import { makeBPGateData } from "../makeBPGateData";

// ---------------------------
const content_type = ContentTypes.QUEST;
let bp_gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// chapter 1
bp_gates.push(
  makeBPGateData(
    "the first mission",
    ContentRegions.AELIO,
    content_type,
    830,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "preparing for battle",
    ContentRegions.AELIO,
    content_type,
    950,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "an abundance of caution",
    ContentRegions.AELIO,
    content_type,
    1100,
    0,
  ),
);

// ---------------------------
// chapter 2?
bp_gates.push(
  makeBPGateData(
    "the corner stone of retem's revival",
    ContentRegions.RETEM,
    content_type,
    1243,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "the truth behind the song",
    ContentRegions.RETEM,
    content_type,
    1474,
    0,
  ),
);
bp_gates.push(
  makeBPGateData(
    "retem's independent partisan squad",
    ContentRegions.RETEM,
    content_type,
    1633,
    0,
  ),
);
export default bp_gates;

import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
gates.push(
  makeBPGateData(
    "the corner stone of retem's revival",
    [ContentLocation.RETEM],
    [ContentTypes.QUEST],
    1243,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "the truth behind the song",
    [ContentLocation.RETEM],
    [ContentTypes.QUEST],
    1474,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "retem's independent partisan squad",
    [ContentLocation.RETEM],
    [ContentTypes.QUEST],
    1633,
    0,
  ),
);

export default gates;

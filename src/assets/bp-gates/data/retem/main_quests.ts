import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
data.push(
  makeBPGateData(
    "the corner stone of retem's revival",
    [ContentLocation.RETEM],
    [ContentTypes.QUEST],
    1243,
    0,
  ),
);
data.push(
  makeBPGateData(
    "the truth behind the song",
    [ContentLocation.RETEM],
    [ContentTypes.QUEST],
    1474,
    0,
  ),
);
data.push(
  makeBPGateData(
    "retem's independent partisan squad",
    [ContentLocation.RETEM],
    [ContentTypes.QUEST],
    1633,
    0,
  ),
);

export default data;

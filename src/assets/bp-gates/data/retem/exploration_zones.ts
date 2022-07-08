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
    "west retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1223,
    17,
  ),
);
gates.push(
  makeBPGateData(
    "central retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1263,
    19,
  ),
);
gates.push(
  makeBPGateData(
    "north retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1396,
    21,
  ),
);
gates.push(
  makeBPGateData(
    "south retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1474,
    23,
  ),
);
gates.push(
  makeBPGateData(
    "rwh maqead",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1513,
    24,
  ),
);

export default gates;

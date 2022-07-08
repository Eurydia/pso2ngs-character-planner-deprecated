import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
// yellow
gates.push(
  makeBPGateData(
    "retem yellow (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.BATTLEDIA],
    1474,
    25,
  ),
);
gates.push(
  makeBPGateData(
    "retem yellow (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.BATTLEDIA],
    2049,
    45,
  ),
);

// ---------------------------
// purple
gates.push(
  makeBPGateData(
    "retem purple (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.BATTLEDIA],
    1813,
    39,
  ),
);
gates.push(
  makeBPGateData(
    "retem purple (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.BATTLEDIA],
    2114,
    49,
  ),
);

export default gates;

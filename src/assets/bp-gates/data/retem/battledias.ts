import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
// yellow
data.push(
  makeBPGateData(
    "retem yellow (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.BATTLEDIA],
    1474,
    25,
  ),
);
data.push(
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
data.push(
  makeBPGateData(
    "retem purple (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.BATTLEDIA],
    1813,
    39,
  ),
);
data.push(
  makeBPGateData(
    "retem purple (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.BATTLEDIA],
    2114,
    49,
  ),
);

export default data;

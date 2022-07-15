import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

// ---------------------------
let data: BPGateData[] = [];
// ---------------------------

// ---------------------------
// yellow
data.push(
  makeBPGateData(
    "aelio yellow (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1081,
    16,
  ),
);
data.push(
  makeBPGateData(
    "aelio yellow (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1363,
    24,
  ),
);

// ---------------------------
// purple
data.push(
  makeBPGateData(
    "aelio purple (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1363,
    24,
  ),
);
data.push(
  makeBPGateData(
    "aelio purple (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1957,
    44,
  ),
);

export default data;

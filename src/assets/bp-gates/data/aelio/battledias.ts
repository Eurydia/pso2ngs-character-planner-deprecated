import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

// ---------------------------
let gates: BPGateData[] = [];
// ---------------------------

// ---------------------------
// battledias

// yellow
gates.push(
  makeBPGateData(
    "aelio yellow (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1081,
    16,
  ),
);
gates.push(
  makeBPGateData(
    "aelio yellow (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1363,
    24,
  ),
);

// purple
gates.push(
  makeBPGateData(
    "aelio purple (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1363,
    24,
  ),
);
gates.push(
  makeBPGateData(
    "aelio purple (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.BATTLEDIA],
    1957,
    44,
  ),
);

export default gates;

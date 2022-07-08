import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
// alnothe
gates.push(
  makeBPGateData(
    "retem alnothe (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1363,
    20,
  ),
);
gates.push(
  makeBPGateData(
    "retem alnothe (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1633,
    30,
  ),
);
gates.push(
  makeBPGateData(
    "retem alnothe (rank 3)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1869,
    40,
  ),
);

// ---------------------------
// maqead lower
gates.push(
  makeBPGateData(
    "maqead lower level (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1562,
    25,
  ),
);
gates.push(
  makeBPGateData(
    "maqead lower level (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1633,
    30,
  ),
);
gates.push(
  makeBPGateData(
    "maqead lower level (rank 3)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1869,
    40,
  ),
);

export default gates;

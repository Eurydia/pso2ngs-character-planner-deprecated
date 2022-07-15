import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
// alnothe
data.push(
  makeBPGateData(
    "retem alnothe (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1363,
    20,
  ),
);
data.push(
  makeBPGateData(
    "retem alnothe (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1633,
    30,
  ),
);
data.push(
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
data.push(
  makeBPGateData(
    "maqead lower level (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1562,
    25,
  ),
);
data.push(
  makeBPGateData(
    "maqead lower level (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1633,
    30,
  ),
);
data.push(
  makeBPGateData(
    "maqead lower level (rank 3)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    1869,
    40,
  ),
);

export default data;

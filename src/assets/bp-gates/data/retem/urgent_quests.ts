import {
  BPGateData,
  ContentLocation,
  ContentTypes,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
// dustyl vera
data.push(
  makeBPGateData(
    "dustyl vera suppression (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    1682,
    32,
  ),
);
data.push(
  makeBPGateData(
    "dustyl vera suppression (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2049,
    45,
  ),
);

// ---------------------------
// renus vera
data.push(
  makeBPGateData(
    "renus vera suppression (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    1682,
    32,
  ),
);
data.push(
  makeBPGateData(
    "renus vera suppression (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2049,
    45,
  ),
);

// ---------------------------
// mining rig
data.push(
  makeBPGateData(
    "mining rig defense: retem",
    [ContentLocation.RETEM],
    [ContentTypes.UQ],
    2049,
    45,
  ),
);

// ---------------------------
// 1st anniversary event
data.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 1)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1474,
    25,
  ),
);
data.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1682,
    32,
  ),
);
data.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 3)",
    [ContentLocation.RETEM],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1957,
    42,
  ),
);

export default data;

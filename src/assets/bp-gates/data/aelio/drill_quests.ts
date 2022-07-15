import {
  BPGateData,
  ContentLocation,
  ContentTypes,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let data: BPGateData[] = [];

// ---------------------------
// a trap in the forest
data.push(
  makeBPGateData(
    "a trap in the forest (rank 1)",
    [
      ContentLocation.AELIO,
      ContentLocation.RETEM,
      ContentLocation.KVARIS,
    ],
    [ContentTypes.DRILL],
    1184,
    17,
  ),
);
data.push(
  makeBPGateData(
    "a trap in the forest (rank 2)",
    [
      ContentLocation.AELIO,
      ContentLocation.RETEM,
      ContentLocation.KVARIS,
    ],
    [ContentTypes.DRILL],
    1474,
    25,
  ),
);
data.push(
  makeBPGateData(
    "a trap in the forest (rank 3)",
    [
      ContentLocation.AELIO,
      ContentLocation.RETEM,
      ContentLocation.KVARIS,
    ],
    [ContentTypes.DRILL],
    1682,
    32,
  ),
);
data.push(
  makeBPGateData(
    "a trap in the forest (rank 4)",
    [
      ContentLocation.AELIO,
      ContentLocation.RETEM,
      ContentLocation.KVARIS,
    ],
    [ContentTypes.DRILL],
    1957,
    42,
  ),
);
data.push(
  makeBPGateData(
    "a trap in the forest (rank 5)",
    [
      ContentLocation.AELIO,
      ContentLocation.RETEM,
      ContentLocation.KVARIS,
    ],
    [ContentTypes.DRILL],
    2506,
    57,
  ),
);

export default data;

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
    "west retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1223,
    17,
  ),
);
data.push(
  makeBPGateData(
    "central retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1263,
    19,
  ),
);
data.push(
  makeBPGateData(
    "north retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1396,
    21,
  ),
);
data.push(
  makeBPGateData(
    "south retem",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1474,
    23,
  ),
);
data.push(
  makeBPGateData(
    "rwh maqead",
    [ContentLocation.RETEM],
    [ContentTypes.EXPLORATION],
    1513,
    24,
  ),
);

export default data;

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
    "central kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    1813,
    37,
  ),
);
data.push(
  makeBPGateData(
    "south kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    1869,
    39,
  ),
);
data.push(
  makeBPGateData(
    "north kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    1957,
    42,
  ),
);
data.push(
  makeBPGateData(
    "west kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    2049,
    45,
  ),
);
data.push(
  makeBPGateData(
    "rayjord groge",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    2744,
    64,
  ),
);

export default data;

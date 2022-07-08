import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
gates.push(
  makeBPGateData(
    "central kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    1813,
    37,
  ),
);
gates.push(
  makeBPGateData(
    "south kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    1869,
    39,
  ),
);
gates.push(
  makeBPGateData(
    "north kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    1957,
    42,
  ),
);
gates.push(
  makeBPGateData(
    "west kvaris",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    2049,
    45,
  ),
);
gates.push(
  makeBPGateData(
    "rayjord groge",
    [ContentLocation.KVARIS],
    [ContentTypes.EXPLORATION],
    2744,
    64,
  ),
);

export default gates;

import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";
import { makeBPGateData } from "../../makeData";

let gates: BPGateData[] = [];

// ---------------------------
// belugana ruins
gates.push(
  makeBPGateData(
    "belugana ruins (rank 1)",
    [ContentLocation.KVARIS],
    [ContentTypes.COMBAT],
    0,
    40,
  ),
);
gates.push(
  makeBPGateData(
    "belugana ruins (rank 2)",
    [ContentLocation.KVARIS],
    [ContentTypes.COMBAT],
    2251,
    55,
  ),
);

// ---------------------------
// lost central
gates.push(
  makeBPGateData(
    "lost central (rank 1)",
    [ContentLocation.KVARIS],
    [ContentTypes.COMBAT],
    0,
    45,
  ),
);
gates.push(
  makeBPGateData(
    "lost central (rank 2)",
    [ContentLocation.RETEM],
    [ContentTypes.COMBAT],
    2416,
    55,
  ),
);

export default gates;

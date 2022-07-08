import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let gates: BPGateData[] = [];

// ------------------------------------------
// exploration zones
gates.push(
  makeBPGateData(
    "central aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    800,
    1,
  ),
);
gates.push(
  makeBPGateData(
    "south aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    835,
    3,
  ),
);
gates.push(
  makeBPGateData(
    "west aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    933,
    7,
  ),
);
gates.push(
  makeBPGateData(
    "north aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    987,
    10,
  ),
);
gates.push(
  makeBPGateData(
    "halphia lake",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    2744,
    60,
  ),
);

export default gates;

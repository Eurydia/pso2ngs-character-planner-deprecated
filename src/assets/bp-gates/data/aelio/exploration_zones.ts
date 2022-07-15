import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let data: BPGateData[] = [];

// ------------------------------------------
data.push(
  makeBPGateData(
    "central aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    800,
    1,
  ),
);
data.push(
  makeBPGateData(
    "south aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    835,
    3,
  ),
);
data.push(
  makeBPGateData(
    "west aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    933,
    7,
  ),
);
data.push(
  makeBPGateData(
    "north aelio",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    987,
    10,
  ),
);
data.push(
  makeBPGateData(
    "halphia lake",
    [ContentLocation.AELIO],
    [ContentTypes.EXPLORATION],
    2744,
    60,
  ),
);

export default data;

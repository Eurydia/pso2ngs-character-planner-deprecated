import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let gates: BPGateData[] = [];

// ------------------------------------------
gates.push(
  makeBPGateData(
    "alters rush",
    [ContentLocation.AELIO],
    [ContentTypes.TOWER],
    1184,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "great wall",
    [ContentLocation.AELIO],
    [ContentTypes.TOWER],
    1184,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "aero runner",
    [ContentLocation.AELIO],
    [ContentTypes.TOWER],

    1184,
    0,
  ),
);

export default gates;

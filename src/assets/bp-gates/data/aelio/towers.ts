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
    "alters rush",
    [ContentLocation.AELIO],
    [ContentTypes.TOWER],
    1184,
    0,
  ),
);
data.push(
  makeBPGateData(
    "great wall",
    [ContentLocation.AELIO],
    [ContentTypes.TOWER],
    1184,
    0,
  ),
);
data.push(
  makeBPGateData(
    "aero runner",
    [ContentLocation.AELIO],
    [ContentTypes.TOWER],

    1184,
    0,
  ),
);

export default data;

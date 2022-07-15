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
    "first step",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    800,
    0,
  ),
);
data.push(
  makeBPGateData(
    "test flight",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    835,
    0,
  ),
);
data.push(
  makeBPGateData(
    "enhanced enemy",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    894,
    0,
  ),
);
data.push(
  makeBPGateData(
    "wild rush",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    894,
    0,
  ),
);
data.push(
  makeBPGateData(
    "swift jump",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    916,
    0,
  ),
);
data.push(
  makeBPGateData(
    "runway",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    1009,
    0,
  ),
);
data.push(
  makeBPGateData(
    "roaring rush",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    1184,
    0,
  ),
);
data.push(
  makeBPGateData(
    "fleeting flight",
    [ContentLocation.AELIO],
    [ContentTypes.COCOON],
    1184,
    0,
  ),
);

export default data;

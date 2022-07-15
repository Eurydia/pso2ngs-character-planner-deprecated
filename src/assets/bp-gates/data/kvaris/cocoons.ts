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
    "crazy tail",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2018,
    42,
  ),
);
data.push(
  makeBPGateData(
    "slope style",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2018,
    0,
  ),
);
data.push(
  makeBPGateData(
    "clockwork prison",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2082,
    44,
  ),
);
data.push(
  makeBPGateData(
    "horrible flapping",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2082,
    44,
  ),
);
data.push(
  makeBPGateData(
    "wild avalanche",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2181,
    47,
  ),
);
data.push(
  makeBPGateData(
    "vanishing path II",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2181,
    0,
  ),
);

export default data;

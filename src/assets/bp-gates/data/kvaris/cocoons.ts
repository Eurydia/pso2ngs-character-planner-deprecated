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
    "crazy tail",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2018,
    42,
  ),
);
gates.push(
  makeBPGateData(
    "slope style",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2018,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "clockwork prison",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2082,
    44,
  ),
);
gates.push(
  makeBPGateData(
    "horrible flapping",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2082,
    44,
  ),
);
gates.push(
  makeBPGateData(
    "wild avalanche",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2181,
    47,
  ),
);
gates.push(
  makeBPGateData(
    "vanishing path II",
    [ContentLocation.KVARIS],
    [ContentTypes.COCOON],
    2181,
    0,
  ),
);

export default gates;

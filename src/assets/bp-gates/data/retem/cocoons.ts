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
    "dyna assult",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1223,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "parkour master",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1223,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "runway II",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1223,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "narrow cage",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1396,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "buddy attack",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1396,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "vanishing path",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1562,
    0,
  ),
);

export default gates;

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
    "dyna assult",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1223,
    0,
  ),
);
data.push(
  makeBPGateData(
    "parkour master",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1223,
    0,
  ),
);
data.push(
  makeBPGateData(
    "runway II",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1223,
    0,
  ),
);
data.push(
  makeBPGateData(
    "narrow cage",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1396,
    0,
  ),
);
data.push(
  makeBPGateData(
    "buddy attack",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1396,
    0,
  ),
);
data.push(
  makeBPGateData(
    "vanishing path",
    [ContentLocation.RETEM],
    [ContentTypes.COCOON],
    1562,
    0,
  ),
);

export default data;

import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let gates: BPGateData[] = [];

// ------------------------------------------
// combat zone

// magnus
gates.push(
  makeBPGateData(
    "mt. magnus (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    894,
    5,
  ),
);
gates.push(
  makeBPGateData(
    "mt. magnus (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1184,
    15,
  ),
);
gates.push(
  makeBPGateData(
    "mt. magnus (rank 3)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1759,
    35,
  ),
);

// lab
gates.push(
  makeBPGateData(
    "vanford lab ruins (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1009,
    10,
  ),
);
gates.push(
  makeBPGateData(
    "vanford lab ruins (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1184,
    15,
  ),
);
gates.push(
  makeBPGateData(
    "vanford lab ruins (rank 3)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1759,
    35,
  ),
);

// resol
gates.push(
  makeBPGateData(
    "resol forest (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1184,
    15,
  ),
);
gates.push(
  makeBPGateData(
    "resol forest (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1759,
    35,
  ),
);

export default gates;

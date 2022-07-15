import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let data: BPGateData[] = [];

// ------------------------------------------
// magnus
data.push(
  makeBPGateData(
    "mt. magnus (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    894,
    5,
  ),
);
data.push(
  makeBPGateData(
    "mt. magnus (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1184,
    15,
  ),
);
data.push(
  makeBPGateData(
    "mt. magnus (rank 3)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1759,
    35,
  ),
);

// ------------------------------------------
// lab
data.push(
  makeBPGateData(
    "vanford lab ruins (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1009,
    10,
  ),
);
data.push(
  makeBPGateData(
    "vanford lab ruins (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1184,
    15,
  ),
);
data.push(
  makeBPGateData(
    "vanford lab ruins (rank 3)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1759,
    35,
  ),
);

// ------------------------------------------
// resol
data.push(
  makeBPGateData(
    "resol forest (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1184,
    15,
  ),
);
data.push(
  makeBPGateData(
    "resol forest (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.COMBAT],
    1759,
    35,
  ),
);

export default data;

import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let data: BPGateData[] = [];

// ------------------------------------------
// pettas vera
data.push(
  makeBPGateData(
    "command DOLLS suppression (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1184,
    17,
  ),
);
data.push(
  makeBPGateData(
    "command DOLLS suppression (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1898,
    40,
  ),
);

// ------------------------------------------
// nex vera
data.push(
  makeBPGateData(
    "nex vera suppression (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1184,
    40,
  ),
);
data.push(
  makeBPGateData(
    "nex vera suppression (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1898,
    40,
  ),
);

// ------------------------------------------
// mining rig
data.push(
  makeBPGateData(
    "mining rig defense: aelio (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1243,
    20,
  ),
);
data.push(
  makeBPGateData(
    "mining rig defense: aelio (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1898,
    40,
  ),
);

// ------------------------------------------
// dark falz
data.push(
  makeBPGateData(
    "dark falz interception (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ, ContentTypes.TRIGGER],
    1898,
    40,
  ),
);

// ------------------------------------------
// spring event
data.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1474,
    25,
  ),
);
data.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1682,
    32,
  ),
);
data.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 3)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1957,
    42,
  ),
);

export default data;

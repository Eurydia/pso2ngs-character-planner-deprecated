import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let gates: BPGateData[] = [];

// ------------------------------------------
// pettas vera
gates.push(
  makeBPGateData(
    "command DOLLS suppression (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1184,
    17,
  ),
);
gates.push(
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
gates.push(
  makeBPGateData(
    "nex vera suppression (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1184,
    40,
  ),
);
gates.push(
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
gates.push(
  makeBPGateData(
    "mining rig defense: aelio (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ],
    1243,
    20,
  ),
);
gates.push(
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
gates.push(
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
gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 1)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1474,
    25,
  ),
);
gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1682,
    32,
  ),
);
gates.push(
  makeBPGateData(
    "dazzling chaos suppression (rank 3)",
    [ContentLocation.AELIO],
    [ContentTypes.UQ, ContentTypes.DRILL],
    1957,
    42,
  ),
);

export default gates;

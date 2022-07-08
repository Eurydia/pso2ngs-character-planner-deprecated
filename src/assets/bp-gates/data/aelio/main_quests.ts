import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let gates: BPGateData[] = [];

// ------------------------------------------
// main quests
gates.push(
  makeBPGateData(
    "the first mission",
    [ContentLocation.AELIO],
    [ContentTypes.QUEST],
    830,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "preparing for battle",
    [ContentLocation.AELIO],
    [ContentTypes.QUEST],
    950,
    0,
  ),
);
gates.push(
  makeBPGateData(
    "an abundance of caution",
    [ContentLocation.AELIO],
    [ContentTypes.QUEST],
    1100,
    0,
  ),
);

export default gates;

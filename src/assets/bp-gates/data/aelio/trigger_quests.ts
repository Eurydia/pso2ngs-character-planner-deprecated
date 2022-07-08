import { makeBPGateData } from "../../makeData";
import {
  BPGateData,
  ContentTypes,
  ContentLocation,
} from "../../types";

let gates: BPGateData[] = [];

// ------------------------------------------
// urgent & seasonal quests

gates.push(
  makeBPGateData(
    "dark falz interception (rank 2)",
    [ContentLocation.AELIO],
    [ContentTypes.TRIGGER],
    1898,
    40,
  ),
);

export default gates;

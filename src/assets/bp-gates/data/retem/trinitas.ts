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
    "geometric labyrinth",
    [ContentLocation.RETEM],
    [ContentTypes.TRINITAS],
    1682,
    0,
  ),
);

export default gates;

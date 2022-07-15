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
    "geometric labyrinth",
    [ContentLocation.RETEM],
    [ContentTypes.TRINITAS],
    1682,
    0,
  ),
);

export default data;

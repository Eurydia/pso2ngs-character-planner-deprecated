import { BPGateData } from "./types";
import aelio from "./data/aelio";
import retem from "./data/retem";
import kvaris from "./data/kvaris";

export * from "./types";

const BP_GATE_DATA: BPGateData[] = [...aelio, ...retem, ...kvaris];

export default BP_GATE_DATA;

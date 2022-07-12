import { BPGateData } from "./types";
import aelio from "./data/aelio";
import retem from "./data/retem";
import kvaris from "./data/kvaris";

export * from "./types";

const BP_GATE_DATA: BPGateData[] = [
  ...aelio,
  ...retem,
  ...kvaris,
].sort((a, b) => {
  if (a.bp_required > b.bp_required) {
    return 1;
  } else if (a.bp_required < b.bp_required) {
    return -1;
  }
  return 0;
});

export default BP_GATE_DATA;

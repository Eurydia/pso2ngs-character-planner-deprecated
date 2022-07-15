import { BPGateData } from "../types";
import aelio from "./aelio";
import retem from "./retem";
import kvaris from "./kvaris";

export * from "../types";

const sortBPRequiredAscending = (
  a: BPGateData,
  b: BPGateData,
): number => {
  if (a.bp_required > b.bp_required) {
    return 1;
  } else if (a.bp_required < b.bp_required) {
    return -1;
  }
  return 0;
};

const DATA: BPGateData[] = [...aelio, ...retem, ...kvaris].sort(
  sortBPRequiredAscending,
);

export default DATA;

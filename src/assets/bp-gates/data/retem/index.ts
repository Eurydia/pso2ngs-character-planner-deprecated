import { BPGateData } from "../../types";
import main_q from "./main_quests";
import exploration from "./trinitas";
import combat from "./combat_zones";
import cocoon from "./cocoons";
import tower from "./towers";
import urgent_q from "./urgent_quests";
import battledia from "./battledias";
import geo from "./trinitas";

const retem_gates: BPGateData[] = [
  ...main_q,
  ...exploration,
  ...combat,
  ...cocoon,
  ...tower,
  ...urgent_q,
  ...battledia,
  ...geo,
];

export default retem_gates;

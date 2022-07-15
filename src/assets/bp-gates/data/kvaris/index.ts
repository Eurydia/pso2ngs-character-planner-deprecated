import { BPGateData } from "../../types";
import main_q from "./main_quests";
import exploration from "./exploration_zones";
import combat from "./combat_zones";
import cocoon from "./cocoons";
import tower from "./towers";
import urgent_q from "./urgent_quests";
import battledia from "./battledias";

const kvaris_gates: BPGateData[] = [
  ...main_q,
  ...exploration,
  ...combat,
  ...cocoon,
  ...tower,
  ...urgent_q,
  ...battledia,
];

export default kvaris_gates;

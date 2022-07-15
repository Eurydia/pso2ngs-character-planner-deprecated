import { BPGateData } from "../../types";
import main_q from "./main_quests";
import exploration from "./exploration_zones";
import combat from "./combat_zones";
import cocoon from "./cocoons";
import tower from "./towers";
import urgent_q from "./urgent_quests";
import battledia from "./battledias";
import trigger_q from "./trigger_quests";
import drill_q from "./drill_quests";

const aelio_gates: BPGateData[] = [
  ...main_q,
  ...exploration,
  ...combat,
  ...cocoon,
  ...tower,
  ...urgent_q,
  ...battledia,
  ...trigger_q,
  ...drill_q,
];

export default aelio_gates;

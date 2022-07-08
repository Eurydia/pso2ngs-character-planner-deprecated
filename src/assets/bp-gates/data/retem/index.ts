import { BPGateData } from "../../types";
import { default as main_q } from "./main_quests";
import { default as exploration } from "./trinitas";
import { default as combat } from "./combat_zones";
import { default as cocoon } from "./cocoons";
import { default as tower } from "./towers";
import { default as urgent_q } from "./urgent_quests";
import { default as battledia } from "./battledias";
import { default as geo } from "./trinitas";

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

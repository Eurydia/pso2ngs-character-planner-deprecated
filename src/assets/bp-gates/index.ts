import { default as battledias } from "./data/retem/battledias";
import { default as cocoons } from "./data/cocoons";
import { default as combats } from "./data/combats";
import { default as explorations } from "./data/explorations";
import { default as quests } from "./data/quests";
import { default as towers } from "./data/towers";
import { default as uqs } from "./data/uqs";

export * from "./types";

const BP_GATES = Object.freeze([
  ...battledias,
  ...cocoons,
  ...combats,
  ...explorations,
  ...quests,
  ...towers,
  ...uqs,
]);
export default BP_GATES;

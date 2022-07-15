import { BPGateData, ContentLocation, ContentTypes } from "./types";

export const makeBPGateData = (
  name: string,
  region: ContentLocation[],
  content_type: (ContentTypes | string)[],
  bp_required: number,
  enemy_level: number,
): BPGateData => {
  return Object.freeze({
    name,
    region,
    content_type,
    bp_required,
    enemy_level,
  });
};

import { BPGateData, ContentRegions, ContentTypes } from "./types";

export const makeBPGateData = (
  name: string,
  content_region: ContentRegions,
  content_type: ContentTypes,
  bp_required: number,
  enemy_level: number,
): BPGateData => {
  return Object.freeze({
    name,
    content_region,
    content_type,
    bp_required,
    enemy_level,
  });
};

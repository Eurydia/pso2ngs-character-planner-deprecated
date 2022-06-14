import { BPGateData, ContentTypes } from "./types";

export const makeBPGateData = (
  name: string,
  content_type: ContentTypes,
  bp_required: number,
  enemy_level: number,
): BPGateData => {
  return Object.freeze({
    name,
    content_type,
    bp_required,
    enemy_level,
  });
};

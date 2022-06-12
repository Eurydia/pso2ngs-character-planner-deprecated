import { BPGateData, ContentTypes } from "./types";

export const makeBPGateData = (
  name: string,
  content_type: ContentTypes,
  bp: number,
  enemy_level: number,
): BPGateData => {
  return Object.freeze({
    name,
    content_type,
    bp,
    enemy_level,
  });
};
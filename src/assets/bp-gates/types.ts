export enum ContentTypes {
  EXPLORATION,
  COMBAT,
  UQ,
  COCOON,
  TOWER,
  BATTLEDIA,
  QUEST,
}

export type BPGateData = Readonly<{
  name: string;
  content_type: ContentTypes;
  bp: number;
  enemy_level: number;
}>;

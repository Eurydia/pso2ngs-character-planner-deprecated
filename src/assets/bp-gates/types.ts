export enum ContentTypes {
  EXPLORATION = "exploration zone",
  COMBAT = "combat zone",
  UQ = "urgent quest",
  COCOON = "cocoon",
  TOWER = "tower",
  BATTLEDIA = "battledia",
  QUEST = "story quest",
}

export enum ContentRegions {
  ALL = "all region",
  AELIO = "aelio",
  RETEM = "retem",
  KVARIS = "kvaris",
}

export type BPGateData = Readonly<{
  name: string;
  content_region: ContentRegions;
  content_type: ContentTypes | string;
  bp_required: number;
  enemy_level: number;
}>;

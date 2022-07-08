export enum ContentTypes {
  EXPLORATION = "exploration zone",
  COMBAT = "combat zone",
  UQ = "urgent quest",
  DRILL = "drill quest",
  TRIGGER = "trigger quest",
  COCOON = "cocoon",
  TOWER = "tower",
  BATTLEDIA = "battledia",
  QUEST = "story quest",
}

export enum ContentLocation {
  AELIO = "aelio",
  RETEM = "retem",
  KVARIS = "kvaris",
}

export type BPGateData = Readonly<{
  name: string;
  region: ContentLocation[];
  content_type: (ContentTypes | string)[];
  bp_required: number;
  enemy_level: number;
}>;

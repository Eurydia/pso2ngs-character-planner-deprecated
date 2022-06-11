export enum StatTypes {
  BP = "BP",
  HP = "HP",
  PP = "PP",
  ATK = "ATK",
  DEF = "DEF",
  //   This HP boost should not be seen
  HP_BOOST = "HP boost",

  HP_RECOVERY_BOOST = "HP recovery boost",

  ACTIVE_PP_GAIN = "active PP recovery",
  PASSIVE_PP_GAIN = "natural PP recovery",
  PP_USAGE = "PP cost",

  PB_GAUGE_GAIN = "PB gauge charge rate",

  DMG_BOOST = "DMG",
  MEL_POT = "MEL pot",
  RNG_POT = "RNG pot",
  TEC_POT = "TEC pot",
  FLOOR_POT = "floor pot",
  CRIT_CHANCE = "crit chance",
  CRIT_DMG = "crit DMG",

  DMG_RES = "DMG resist",
  BURN_RES = "burn resist",
  FREEZE_RES = "freeze resist",
  SHOCK_RES = "shock resist",
  BLIND_RES = "blind resist",
  PANIC_RES = "panic resist",
  POISON_RES = "poison resist",
  PHYDOWN_RES = "physical down resist",
  AILMENT_DURATION = "ailment duration",

  // Stat shorthands,these stats get expanded into other stats
}

export const enum StatShorthands {
  POT = "potency",
  AILMENT_RES = "all ailment resist",
  PP_GAIN = "PP recovery",
}

// TODO: Turn these into functions, maybe?
export const PP_RECOVERY = [
  StatTypes.ACTIVE_PP_GAIN,
  StatTypes.PASSIVE_PP_GAIN,
];

export const OFFENSIVE_POT = [
  StatTypes.MEL_POT,
  StatTypes.RNG_POT,
  StatTypes.TEC_POT,
];

export const AILMENT_RES = [
  StatTypes.BURN_RES,
  StatTypes.FREEZE_RES,
  StatTypes.SHOCK_RES,
  StatTypes.BLIND_RES,
  StatTypes.PANIC_RES,
  StatTypes.POISON_RES,
  StatTypes.PHYDOWN_RES,
];

export const ADD_STAT_TYPES = [
  StatTypes.BP,
  StatTypes.HP,
  StatTypes.PP,
  StatTypes.ATK,
  StatTypes.DEF,
];

export const DISPLAY_AS_ADD = [
  StatTypes.BP,
  StatTypes.HP,
  StatTypes.PP,
  StatTypes.ATK,
  StatTypes.DEF,
];

export const MUL_DISPLAY_AS_ADD = [StatTypes.CRIT_CHANCE];

export type Stat = Readonly<{
  stat_type: StatTypes | StatShorthands;
  amount: number;
}>;

// TODO: To allow for a more robust conditional system,
// the condition might have to use `event trigger` enums
// instead of simple string
export type Conditional = Readonly<{
  stats: Stat[];
  condition: string;
}>;

export type StatPayload = Readonly<{
  stats: Stat[];
  conditionals: Conditional[];
}>;

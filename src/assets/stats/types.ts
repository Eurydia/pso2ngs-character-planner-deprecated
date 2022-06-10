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
  AILMENT_DURATION = "ailment duraion",

  // Stat shorthands,these stats get expanded into other stats
  POT = "potency",
  AILMENT_RES = "all ailment resist",
  PP_GAIN = "PP recovery",
}

export const STAT_SHORTHANDS = [
  StatTypes.POT,
  StatTypes.PP_GAIN,
  StatTypes.AILMENT_RES,
];
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

export type Stat = {
  stat_type: StatTypes;
  amount: number;
};

export type StatWithManyAmounts = {
  stat_type: StatTypes;
  many_amount: number[];
};

// TODO: To allow for a more robust conditional system,
// the condition might have to use `event trigger` enums
// instead of simple string
export type Conditional = {
  stats: Stat[];
  condition: string;
};

export type ConditionalWithManyAmounts = Readonly<{
  stats_with_many_amounts: StatWithManyAmounts[];
  condition: string;
}>;

export type StatPayload = {
  stats: Stat[];
  conditionals: Conditional[];
};

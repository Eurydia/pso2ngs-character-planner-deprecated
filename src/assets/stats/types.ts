export enum StatTypes {
  BP = "BP",
  HP = "HP",
  PP = "PP",
  ATK = "ATK",
  DEF = "DEF",

  HP_RECOVERY_BOOST = "HP recovery boost",

  PP_COST = "PP cost",
  ACTIVE_PP_RECOVERY = "active PP recovery",
  NATURAL_PP_RECOVERY = "natural PP recovery",

  PB_GAUGE_CHARGE_RATE = "PB gauge charge rate",

  DMG_BOOST = "DMG boost",
  MEL_POT = "MEL pot",
  RNG_POT = "RNG pot",
  TEC_POT = "TEC pot",
  FLOOR_POT = "floor pot",
  CRIT_CHANCE = "crit chance",
  CRIT_DMG = "crit DMG",

  DMG_RESIST = "DMG resist",
  BURN_RESIST = "burn resist",
  FREEZE_RESIST = "freeze resist",
  SHOCK_RESIST = "shock resist",
  BLIND_RESIST = "blind resist",
  PANIC_RESIST = "panic resist",
  POISON_RESIST = "poison resist",
  PHYDOWN_RESIST = "physical down resist",
  AILMENT_DURATION = "ailment duration",

  LOW_TEMP_RESIST = "harsh enviroment resist",
}

/**
 * Stat shorthands, these stats get expanded into other stats
 * */
export enum StatShorthands {
  HP_BOOST = "HP boost",
  POT = "pot",
  AILMENT_RES = "ailment resist",
  PP_RECOVERY = "PP recovery",
}

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

export type StatObject = {
  [key in StatTypes]: number;
};

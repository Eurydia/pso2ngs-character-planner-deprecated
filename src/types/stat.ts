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
  PP_USAGE = "pp cost reduction",

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

export type Stat = {
  stat_type: StatTypes;
  amount: number;
};

export type StatWithManyAmounts = {
  stat_type: StatTypes;
  many_amount: number[];
};

export type Conditional = {
  stats: Stat[];
  condition: string;
};

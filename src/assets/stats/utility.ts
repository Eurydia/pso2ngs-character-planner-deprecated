import { StatShorthands, StatObject, StatTypes } from "./types";

export const expandHPBoost = (): StatTypes[] => {
  return [];
};
export const expandPPGain = (): StatTypes[] => {
  return [
    StatTypes.ACTIVE_PP_RECOVERY,
    StatTypes.NATURAL_PP_RECOVERY,
  ];
};
export const expandPot = (): StatTypes[] => {
  return [StatTypes.MEL_POT, StatTypes.RNG_POT, StatTypes.TEC_POT];
};
export const expandAilmentRes = (): StatTypes[] => {
  return [
    StatTypes.BURN_RESIST,
    StatTypes.FREEZE_RESIST,
    StatTypes.SHOCK_RESIST,
    StatTypes.BLIND_RESIST,
    StatTypes.PANIC_RESIST,
    StatTypes.POISON_RESIST,
    StatTypes.PHYDOWN_RESIST,
  ];
};
export const expandShorthand = (
  shorthand: StatShorthands,
): StatTypes[] => {
  const lookup: { [key in StatShorthands]: () => StatTypes[] } = {
    [StatShorthands.HP_BOOST]: expandHPBoost,
    [StatShorthands.POT]: expandPot,
    [StatShorthands.AILMENT_RES]: expandAilmentRes,
    [StatShorthands.PP_RECOVERY]: expandPPGain,
  };

  if (lookup[shorthand] === undefined) {
    return [];
  }

  return lookup[shorthand]();
};

export const getStatTemplate = (): StatObject => {
  return {
    // basic stats
    [StatTypes.BP]: 0,
    [StatTypes.HP]: 0,
    [StatTypes.PP]: 0,
    [StatTypes.ATK]: 0,
    [StatTypes.DEF]: 0,
    [StatTypes.MEL_POT]: 1,
    [StatTypes.RNG_POT]: 1,
    [StatTypes.TEC_POT]: 1,
    [StatTypes.FLOOR_POT]: 1,
    [StatTypes.BURN_RESIST]: 1,
    [StatTypes.FREEZE_RESIST]: 1,
    [StatTypes.SHOCK_RESIST]: 1,
    [StatTypes.BLIND_RESIST]: 1,
    [StatTypes.PANIC_RESIST]: 1,
    [StatTypes.POISON_RESIST]: 1,
    [StatTypes.PHYDOWN_RESIST]: 1,

    // indepth stats
    [StatTypes.HP_RECOVERY_BOOST]: 1,
    [StatTypes.PP_COST]: 1,
    [StatTypes.ACTIVE_PP_RECOVERY]: 1,
    [StatTypes.NATURAL_PP_RECOVERY]: 1,
    [StatTypes.DMG_RESIST]: 1,
    [StatTypes.DMG_BOOST]: 1,
    [StatTypes.CRIT_CHANCE]: 1,
    [StatTypes.CRIT_DMG]: 1,
    [StatTypes.AILMENT_DURATION]: 1,
    [StatTypes.PB_GAUGE_CHARGE_RATE]: 1,
  };
};

export const isStatAddType = (
  stat_type: StatTypes | StatShorthands,
): boolean => {
  const lookup = new Set([
    StatTypes.BP,
    StatTypes.HP,
    StatTypes.PP,
    StatTypes.ATK,
    StatTypes.DEF,
  ]);
  if (Object.keys(StatShorthands).includes(stat_type)) {
    const expanded = expandShorthand(stat_type as StatShorthands);
    return lookup.has(expanded[0]);
  }
  return lookup.has(stat_type as StatTypes);
};

/**
 * Basically checking for the crit chance and harsh envi resist
 * Stats that are displayed as percentage, but
 * stacked additively.
 * @param stat_type
 * @returns
 */
export const isStatSpecialMulType = (
  stat_type: StatTypes | StatShorthands,
) => {
  const lookup = new Set([StatTypes.CRIT_CHANCE]);

  if (Object.keys(StatShorthands).includes(stat_type)) {
    const expanded = expandShorthand(stat_type as StatShorthands);
    return lookup.has(expanded[0]);
  }
  return lookup.has(stat_type as StatTypes);
};

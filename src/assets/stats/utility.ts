import { StatShorthands, StatTemplate, StatTypes } from "./types";

/**
 * Expand `StatShorthands.PP_GAIN`
 * @returns
 */
export const getExpandedPPGain = (): StatTypes[] => {
  return [
    StatTypes.ACTIVE_PP_RECOVERY,
    StatTypes.NATURAL_PP_RECOVERY,
  ];
};
/**
 * Expand `StatShorthands.POT`
 * @returns
 */
export const getExpandedPot = (): StatTypes[] => {
  return [StatTypes.MEL_POT, StatTypes.RNG_POT, StatTypes.TEC_POT];
};
/**
 * Expand `StatShorthands.AILMENT_RES`
 * @returns
 */
export const getExpandedAilmentRes = (): StatTypes[] => {
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

export const getExpandedShorthand = (
  shorthand: StatShorthands,
): StatTypes[] => {
  const lookup: { [key in StatShorthands]: () => StatTypes[] } = {
    "pot": getExpandedPot,
    "ailment resist": getExpandedAilmentRes,
    "PP recovery": getExpandedPPGain,
  };

  return lookup[shorthand]();
};

/**
 * @returns Stats stack via addition
 */
export const getAddStatTypes = (): StatTypes[] => {
  return [
    StatTypes.BP,
    StatTypes.HP,
    StatTypes.PP,
    StatTypes.ATK,
    StatTypes.DEF,
  ];
};
/**
 * @returns Stats stack via addition, but displayed as percentage
 */
export const getAddPercentageStatTypes = (): StatTypes[] => {
  return [StatTypes.CRIT_CHANCE];
};

export const getStatTemplate = (): StatTemplate => {
  return {
    // basic stats
    "BP": 0,
    "HP": 0,
    "PP": 0,
    "ATK": 0,
    "DEF": 0,
    "MEL pot": 1,
    "RNG pot": 1,
    "TEC pot": 1,
    "floor pot": 1,
    "DMG resist": 1,
    "burn resist": 1,
    "freeze resist": 1,
    "shock resist": 1,
    "blind resist": 1,
    "panic resist": 1,
    "poison resist": 1,
    "physical down resist": 1,

    // indepth stats
    "HP recovery boost": 1,
    "active PP recovery": 1,
    "natural PP recovery": 1,
    "PP cost": 1,
    "PB gauge charge rate": 1,
    "DMG boost": 1,
    "crit chance": 1,
    "crit DMG": 1,
    "ailment duration": 1,

    // hp boost expands into hp
    // via multiplication
    // so hp boost should not be seen at all
    "HP boost": 1,
  };
};

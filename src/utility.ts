import {
  Stat,
  StatTypes,
  makeStat,
  StatShorthands,
  getStatTemplate,
  getAddStatTypes,
  getAddPercentageStatTypes,
  getExpandedShorthand,
  StatTemplate,
} from "./assets/stats";

/**
 * Convert a number to roman string
 * @param num
 * @returns
 */
export const convertToRoman = (num: number): string => {
  if (num === 0) {
    return "";
  }

  const roman_keys: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let temp = num;
  let roman = "";
  for (const key of Object.keys(roman_keys)) {
    const q = Math.floor(temp / roman_keys[key]);
    temp -= q * roman_keys[key];
    roman += key.repeat(q);
  }
  return roman;
};

export const parseNumberToDisplay = (
  num: number,
  display_as_add: boolean,
): string => {
  let parsed_value: string;
  let default_value: number;
  if (display_as_add) {
    default_value = 0;
    parsed_value = num.toString();
  } else {
    default_value = 1;
    const temp = Math.round((num - 1) * 10000) / 100;
    parsed_value = `${temp.toPrecision(3)}%`;
  }

  const sign = num < default_value ? "" : "+";
  return `${sign}${parsed_value}`;
};

/**
 * Parse value according to the stacking type.
 * @param stat
 * @returns
 */
export const parseStatToDisplay = (stat: Stat): string => {
  let stat_type = stat.stat_type;

  // better to be implicit, I guess?
  if (stat_type === StatShorthands.POT) {
    stat_type = StatTypes.MEL_POT;
  } else if (stat_type === StatShorthands.AILMENT_RES) {
    stat_type = StatTypes.BURN_RESIST;
  } else if (stat_type === StatShorthands.PP_RECOVERY) {
    stat_type = StatTypes.NATURAL_PP_RECOVERY;
  }

  const display_stat_as_add = getAddStatTypes().includes(stat_type);

  return parseNumberToDisplay(stat.amount, display_stat_as_add);
};

export const addStatToTemplate = (
  stat: Stat,
  template: StatTemplate,
): StatTemplate => {
  let _template = { ...template };

  // if `stat_type` is a shorthand,
  // expand them and add them to the template
  if (
    Object.values(StatShorthands).includes(
      stat.stat_type as StatShorthands,
    )
  ) {
    getExpandedShorthand(stat.stat_type as StatShorthands).forEach(
      (_s) => {
        if (getAddPercentageStatTypes().includes(_s)) {
          _template[_s] += stat.amount - 1;
        } else if (getAddStatTypes().includes(_s)) {
          _template[_s] += stat.amount;
        } else {
          _template[_s] *= stat.amount;
        }
      },
    );
  } else {
    const _s = stat.stat_type as StatTypes;
    if (getAddPercentageStatTypes().includes(_s)) {
      _template[_s] += stat.amount - 1;
    } else if (getAddStatTypes().includes(_s)) {
      _template[_s] += stat.amount;
    } else {
      _template[_s] *= stat.amount;
    }
  }
  return _template;
};

export const tallyStats = (stats: Stat[]): Stat[] => {
  const add_stat_types = getAddStatTypes();

  let template = getStatTemplate();
  for (const stat of stats) {
    template = addStatToTemplate(stat, template);
  }

  if (template[StatTypes.HP_BOOST] !== 1) {
    template[StatTypes.HP] *= template[StatTypes.HP_BOOST];
    template[StatTypes.HP_BOOST] = 1;
  }

  const atk = template[StatTypes.ATK];
  const floor_pot = template[StatTypes.FLOOR_POT];
  template[StatTypes.BP] += Math.floor((atk * (2 - floor_pot)) / 2);

  let tallied: Stat[] = [];
  for (const key of Object.keys(template)) {
    const _key = key as StatTypes;
    const amount = template[_key];
    // If the amount is the same as `default` value
    // then don't include it in the result
    if (
      (add_stat_types.includes(_key) && amount === 0) ||
      amount === 1
    ) {
      continue;
    }
    tallied.push(makeStat(_key, amount));
  }

  return tallied;
};

export const getActiveAugmentSlots = (
  enhancement: number,
): number => {
  return enhancement >= 20
    ? 1 + Math.floor((enhancement - 10) / 10)
    : 1;
};

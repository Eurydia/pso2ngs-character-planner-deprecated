import {
  Stat,
  StatTypes,
  StatShorthands,
  getStatTemplate,
  expandShorthand,
  StatObject,
  isStatAddType,
  isStatSpecialMulType,
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

export const addStatToStatObject = (
  stat: Stat,
  template: StatObject,
): StatObject => {
  const doAdd = (key: StatTypes, _t: StatObject) => {
    if (isStatSpecialMulType(key)) {
      _t[key] += stat.amount - 1;
    } else {
      if (isStatAddType(key)) {
        _t[key] += stat.amount;
      } else {
        _t[key] *= stat.amount;
      }
    }
  };
  // if `stat_type` is a shorthand,
  // expand them and add them to the template
  let _template = { ...template };
  if (
    Object.values(StatShorthands).includes(
      stat.stat_type as StatShorthands,
    )
  ) {
    expandShorthand(stat.stat_type as StatShorthands).forEach((s) =>
      doAdd(s, _template),
    );
  } else {
    doAdd(stat.stat_type as StatTypes, _template);
  }
  return _template;
};

export const tallyStats = (stats: Stat[]): StatObject => {
  let hp_boost_percent = 1;
  let template = getStatTemplate();
  for (const stat of stats) {
    if (stat.stat_type === StatShorthands.HP_BOOST) {
      hp_boost_percent *= stat.amount;
      continue;
    }
    template = addStatToStatObject(stat, template);
  }
  template[StatTypes.HP] *= hp_boost_percent;

  return template;
};

export const sortByAlphabet = (a: string, b: string): number => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

import { Conditional, makeStatPayload, Stat } from "../stats";
import { FixaData, FixaTypes } from "./types";

/**
 * Make a `FixaData`
 * @param name name of fixa
 * @param level level of fixa
 * @param fixa_type either weapon or unit.
 * @param stats stats the fixa gives.
 * @param conditionals conditional stats if any.
 * @returns
 */
export const makeFixaData = (
  name: string,
  level: number,
  fixa_type: FixaTypes,
  stats: Stat[],
  conditionals: Conditional[] = [],
): FixaData => {
  const payload = makeStatPayload(stats, conditionals);
  return Object.freeze({
    name,
    level,
    fixa_type,
    payload,
  });
};

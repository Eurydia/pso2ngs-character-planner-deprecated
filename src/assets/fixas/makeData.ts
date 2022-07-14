import { Conditional, makeStatPayload, Stat } from "../stats";
import { FixaData, FixaTypes } from "./types";

/**
 * Make a `FixaData
 * @param name
 * @param level
 * @param stats
 * @param conditionals
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

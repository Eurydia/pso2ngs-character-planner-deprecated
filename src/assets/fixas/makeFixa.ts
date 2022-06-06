import { Stat } from "../stats";
import { FixaData, FixaTypes } from "./types";

/**
 * Make a Fixa
 * @param name
 * @param level
 * @param stats
 * @returns
 */
export const makeFixa = (
  name: string,
  level: number,
  fixa_type: FixaTypes,
  stats: Stat[],
): FixaData => {
  return Object.freeze({
    name,
    level,
    stats,
    fixa_type,
  });
};

// export const makeManyFixa = (
//   name: string,
//   level: number,
//   stats_with_many_amounts: StatWithManyAmounts[],
// ): Fixa[] => {
//   let result: Fixa[] = [];
//   for (let i = 0; i < level; i++) {
//     let stats: Stat[] = [];
//     for (const stat_with_many_amounts of stats_with_many_amounts) {
//       stats.push(
//         makeStat(
//           stat_with_many_amounts.stat_type,
//           stat_with_many_amounts.many_amount[i],
//         ),
//       );
//     }
//     result.push(makeFixa(name, i + 1, stats));
//   }

//   return result;
// };

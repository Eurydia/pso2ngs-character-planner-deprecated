import { WeaponData } from "../types";
import one from "./one";
import two from "./two";
import three from "./three";
import four from "./four";
import five from "./five";

const sortLevelRequiedAscending = (
  a: WeaponData,
  b: WeaponData,
): number => {
  if (a.level_required > b.level_required) {
    return 1;
  } else if (a.level_required < b.level_required) {
    return -1;
  }
  return 0;
};

const DATA: WeaponData[] = [
  ...one,
  ...two,
  ...three,
  ...four,
  ...five,
].sort(sortLevelRequiedAscending);

export default DATA;

import { FoodData } from "../types";
import generic from "./generic";

const sortNameAscending = (a: FoodData, b: FoodData): number => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  }
  return 0;
};

const FOOD: FoodData[] = [...generic].sort(sortNameAscending);

export default FOOD;

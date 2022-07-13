import { FoodItemData } from "./types";
import generic from "./data/generic";

export * from "./types";
export * from "./typeguard";
export * from "./getStatPayload";
export * from "./utility";

const FOOD: FoodItemData[] = [...generic].sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  }
  return 0;
});

export default FOOD;

import { FoodItemData } from "./types";
import generic from "./data/generic";

export * from "./types";
export * from "./typeguard";
export * from "./getStatPayload";
export * from "./utility";

const FOOD: FoodItemData[] = [...generic];

export default FOOD;

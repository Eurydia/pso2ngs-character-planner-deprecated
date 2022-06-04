import {
  Food,
  FoodAttribute,
  FoodCategory,
} from "../../../types/food";
import { makeFood } from "../makeFood";

let food: Food[] = [];

food.push(
  makeFood(
    FoodCategory.VEGETABLE,
    FoodAttribute.CRISPY,
    "autumn vampkin",
  ),
);

food.push(
  makeFood(
    FoodCategory.VEGETABLE,
    FoodAttribute.RICH,
    "winter cozylion",
  ),
);

food.push(
  makeFood(
    FoodCategory.FRUIT,
    FoodAttribute.LIGHT,
    "spring ballooni",
  ),
);

food.push(
  makeFood(
    FoodCategory.VEGETABLE,
    FoodAttribute.ROBUST,
    "anniversartichoke",
  ),
);

const FOOD = Object.freeze(food);
export default FOOD;

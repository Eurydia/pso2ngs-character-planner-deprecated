import { Food, FoodAttribute, FoodCategory } from "../types";
import { makeFood } from "../makeFood";

// ---------------------------
let food: Food[] = [];
// ---------------------------

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

export default food;

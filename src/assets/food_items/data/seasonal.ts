import { FoodItemData, FoodAttribute, FoodCategory } from "../types";
import { makeFoodItem } from "../makeFoodItem";

// ---------------------------
let food: FoodItemData[] = [];
// ---------------------------

food.push(
  makeFoodItem(
    FoodCategory.VEGETABLE,
    FoodAttribute.CRISPY,
    "autumn vampkin",
  ),
);
food.push(
  makeFoodItem(
    FoodCategory.VEGETABLE,
    FoodAttribute.RICH,
    "winter cozylion",
  ),
);
food.push(
  makeFoodItem(
    FoodCategory.FRUIT,
    FoodAttribute.LIGHT,
    "spring ballooni",
  ),
);
food.push(
  makeFoodItem(
    FoodCategory.VEGETABLE,
    FoodAttribute.ROBUST,
    "anniversartichoke",
  ),
);

export default food;

import { FoodItemData, FoodAttribute, FoodCategory } from "../types";
import { makeFoodItem } from "../makeFoodItem";

// ---------------------------
let food: FoodItemData[] = [];
// ---------------------------

const attributes = [
  FoodAttribute.CRISPY,
  FoodAttribute.LIGHT,
  FoodAttribute.RICH,
  FoodAttribute.ROBUST,
];
const categories = [
  FoodCategory.MEAT,
  FoodCategory.FRUIT,
  FoodCategory.VEGETABLE,
  FoodCategory.SEAFOOD,
];

attributes.forEach((attribute) => {
  categories.forEach((category) => {
    food.push(makeFoodItem(category, attribute));
  });
});

export default food;

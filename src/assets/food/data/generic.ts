import { FoodData, FoodAttribute, FoodCategory } from "../types";
import { makeFoodItemData } from "../makeFoodItemData";

// ---------------------------
let food: FoodData[] = [];
// ---------------------------
(() => {
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
      food.push(makeFoodItemData(category, attribute));
    });
  });
})();

export default food;

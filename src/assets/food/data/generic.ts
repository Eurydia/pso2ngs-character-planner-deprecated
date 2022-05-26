import {
  Food,
  FoodAttribute,
  FoodCategory,
} from "../../../types/food";
import { makeFood } from "../makeFood";

let food: Food[] = [];

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
    food.push(makeFood(category, attribute));
  });
});

const FOOD = Object.freeze(food);
export default FOOD;

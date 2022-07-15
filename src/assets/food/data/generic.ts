import { FoodData, FoodAttribute, FoodCategory } from "../types";
import { makeFoodData } from "../makeData";

// ---------------------------
let data: FoodData[] = [];
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

for (const attr of attributes) {
  for (const cate of categories) {
    data.push(makeFoodData(cate, attr));
  }
}

export default data;

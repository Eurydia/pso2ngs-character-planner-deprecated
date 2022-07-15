import { makeFoodData } from "../makeData";
import { FoodData, FoodAttribute, FoodCategory } from "../types";

// ---------------------------
let data: FoodData[] = [];
// ---------------------------

// ---------------------------
// fall event
data.push(
  makeFoodData(
    FoodCategory.VEGETABLE,
    FoodAttribute.CRISPY,
    "autumn vampkin",
  ),
);

// --------------------------
// winter event
data.push(
  makeFoodData(
    FoodCategory.VEGETABLE,
    FoodAttribute.RICH,
    "winter cozylion",
  ),
);

// --------------------------
// spring event
data.push(
  makeFoodData(
    FoodCategory.FRUIT,
    FoodAttribute.LIGHT,
    "spring ballooni",
  ),
);

// --------------------------
// 1st anniversary event
data.push(
  makeFoodData(
    FoodCategory.VEGETABLE,
    FoodAttribute.ROBUST,
    "anniversartichoke",
  ),
);

export default data;
